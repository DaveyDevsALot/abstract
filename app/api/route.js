import { NextResponse as response } from 'next/server'

export async function GET(request) {
  return new Response('Hello, Next.js!', {
    status: 200,
  })}