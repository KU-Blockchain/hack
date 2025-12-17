import NextAuth from 'next-auth';
import OPTIONS from './options';

const handler = NextAuth(OPTIONS);

// Custom HEAD handler for SafeLink email clients
export async function HEAD(req: Request) {
  // Return a 200 response for HEAD requests
  return new Response(null, { status: 200 });
}

// Export NextAuth handlers for GET and POST
export const GET = handler;
export const POST = handler;
