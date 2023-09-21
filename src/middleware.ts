import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.rewrite("https://fiber.up.railway.app/")
}

export const config = {
  matcher: '/apitest',
}
