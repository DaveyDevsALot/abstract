import { NextResponse as response } from 'next/server'

export async function GET(request) {
  return new Response({
    status: 200,
    message: 'OK',
  })
}
