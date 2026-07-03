import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';
  const adminSecret = process.env.ADMIN_BYPASS_SECRET;

  const bypassQuery = request.nextUrl.searchParams.get('admin_bypass');
  
  if (bypassQuery === adminSecret && adminSecret) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('admin_bypass');
    
    const response = NextResponse.redirect(url);
    response.cookies.set('admin_bypass', 'true', {
      maxAge: 60 * 60 * 24,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    return response;
  }

  if (!isMaintenanceMode) {
    if (request.nextUrl.pathname.startsWith('/maintenance')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  const hasBypassCookie = request.cookies.get('admin_bypass')?.value === 'true';

  if (hasBypassCookie) {
    if (request.nextUrl.pathname.startsWith('/maintenance')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  const isMaintenancePage = request.nextUrl.pathname.startsWith('/maintenance');
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/');
  const isStaticAsset = request.nextUrl.pathname.match(/\.(.*)$/); 

  if (isMaintenancePage || isApiRoute || isStaticAsset) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/maintenance', request.url));
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
