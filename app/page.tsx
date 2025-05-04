import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">SocialMesh</span>
        </h1>
        
        <p className="mt-4 text-xl">
          Your one-stop solution for managing social connections across platforms
        </p>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {session?.user ? (
            <Link
              href="/dashboard"
              className="rounded-md bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
            >
              Sign In
            </Link>
          )}
          
          <a
            href="https://github.com/yourusername/socialmesh"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-300 bg-white px-8 py-3 text-gray-700 hover:bg-gray-50"
          >
            GitHub
          </a>
        </div>
      </main>
      
      <footer className="w-full py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} SocialMesh. All rights reserved.</p>
      </footer>
    </div>
  );
} 