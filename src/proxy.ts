import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function proxy(request: NextRequest) {
  const token = request.cookies.get('session-token')?.value;
  const path = request.nextUrl.pathname;

  // Paths requiring authentication
  const isDashboard = path.startsWith('/dashboard');
  const isAdminOnly = path.startsWith('/dashboard/admin');

  if (isDashboard) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Role-based access control
    if (isAdminOnly && payload.role !== 'Admin') {
      return NextResponse.redirect(new URL('/dashboard/employee', request.url));
    }
    
    // Redirect Employee to their dashboard if they hit just /dashboard
    if (path === '/dashboard' && payload.role === 'Employee') {
      return NextResponse.redirect(new URL('/dashboard/employee', request.url));
    }
    
    // Redirect Admin to their dashboard if they hit just /dashboard
    if (path === '/dashboard' && payload.role === 'Admin') {
      return NextResponse.redirect(new URL('/dashboard/admin', request.url));
    }
  }

  // Hide login if already authenticated
  if (path === '/login' && token) {
    const payload = await verifyToken(token);
    if (payload) {
      const redirectPath = payload.role === 'Admin' ? '/dashboard/admin' : '/dashboard/employee';
      return NextResponse.redirect(new URL(redirectPath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
