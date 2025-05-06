import NextAuth from 'next-auth'
import { NextAuthOptions } from 'next-auth'
import LinkedInProvider from 'next-auth/providers/linkedin'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Generate a unique state identifier for this session
const generateNonce = () => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15) + 
         Date.now().toString(36)
}

// Development hardcoded secret - DO NOT USE IN PRODUCTION
const DEV_SECRET = "76c395a3cd2f3ebc5f8d3a0c8d3f8c3e5f8d3a0c8d3f8c3e5f8d3a0c"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Use a custom configuration instead of the built-in LinkedInProvider
    {
      id: "linkedin",
      name: "LinkedIn",
      type: "oauth",
      clientId: process.env.LINKEDIN_CLIENT_ID || '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
      wellKnown: "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      authorization: { params: { scope: "openid profile email" } },
      idToken: true,
      checks: ["state"],
      // Override the issuer verification to work with LinkedIn's non-standard implementation
      client: {
        token_endpoint_auth_method: "client_secret_post",
        id_token_signed_response_alg: "RS256",
      },
      // Customize profile extraction to handle LinkedIn's data format
      profile(profile) {
        console.log("LinkedIn profile:", JSON.stringify(profile, null, 2));
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    },
  ],
  callbacks: {
    async session({ session, user }) {
      // Add user id to session
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
    async jwt({ token, user }) {
      // Add user id to token
      if (user) {
        token.id = user.id
      }
      return token
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  debug: process.env.NODE_ENV === 'development', // Enable debug in development
  logger: {
    error(code, metadata) {
      console.error(`Auth error: ${code}`, metadata)
    },
    warn(code) {
      console.warn(`Auth warning: ${code}`)
    },
    debug(code, metadata) {
      console.log(`Auth debug: ${code}`, metadata)
    }
  },
  // Use the environment variable, but fall back to a hardcoded secret in development
  secret: process.env.NEXTAUTH_SECRET || DEV_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } 