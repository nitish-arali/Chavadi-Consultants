import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    await dbConnect();
    
    const count = await User.countDocuments();
    if (count > 0) {
      return NextResponse.json({ message: 'Setup already completed' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await User.create({
      name: 'Default Admin',
      email: 'admin@chavadi.com',
      password: hashedPassword,
      role: 'Admin',
    });

    return NextResponse.json({ success: true, message: 'Admin user created (admin@chavadi.com / admin123)' });
  } catch (error) {
    console.error('Setup error', error);
    return NextResponse.json({ error: 'Failed to setup' }, { status: 500 });
  }
}
