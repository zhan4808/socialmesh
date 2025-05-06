import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="hero relative w-full bg-primary-700 py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold">Connect with professionals who matter to your career</h1>
            <p className="mb-8 text-xl">SocialMesh uses AI to match you with the right people based on your LinkedIn profile, skills, and career goals.</p>
            <div className="flex gap-4">
              <Link href="/auth/signin" className="rounded-lg bg-white px-6 py-3 font-medium text-primary-700 hover:bg-gray-100">
                Sign in with LinkedIn
              </Link>
              <Link href="#how-it-works" className="rounded-lg border border-white px-6 py-3 font-medium hover:bg-primary-600">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">How SocialMesh Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">1</div>
              <h3 className="mb-2 text-xl font-semibold">Connect with LinkedIn</h3>
              <p className="text-gray-600">Sign in with your LinkedIn account to automatically import your professional profile.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">2</div>
              <h3 className="mb-2 text-xl font-semibold">Get AI-Powered Matches</h3>
              <p className="text-gray-600">Our algorithm analyzes your profile to suggest connections based on shared interests and goals.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">3</div>
              <h3 className="mb-2 text-xl font-semibold">Grow Your Network</h3>
              <p className="text-gray-600">Connect with your matches and start building meaningful professional relationships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Professionals Love SocialMesh</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-600">"SocialMesh connected me with people in my industry I would have never met otherwise. It's been invaluable for my career growth."</p>
              <p className="font-medium">Alex Chen, Product Manager</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-600">"The quality of connections is what sets SocialMesh apart. Each match feels carefully curated for my specific goals."</p>
              <p className="font-medium">Sarah Johnson, Software Engineer</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-600">"I've found my last two job opportunities through contacts I made on SocialMesh. The platform really works!"</p>
              <p className="font-medium">Michael Park, Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-gray-800 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-xl font-bold">SocialMesh</p>
              <p className="text-sm text-gray-400">© 2023 SocialMesh. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 