import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Lead from '@/models/Lead';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { fullName, email, phone, message } = await request.json();

    if (!fullName || !phone || !message) {
      return NextResponse.json({ error: 'Name, phone, and message are required' }, { status: 400 });
    }

    const lead = await Lead.create({
      fullName,
      email,
      phone,
      message,
      status: 'New'
    });

    return NextResponse.json({ success: true, leadId: lead._id });
  } catch (error: any) {
    console.error('Contact submit error', error);
    return NextResponse.json({ error: error?.message || 'Failed to submit inquiry' }, { status: 500 });
  }
}
