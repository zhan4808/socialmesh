# SocialMesh - Automated Professional Networking

SocialMesh is a web-based platform that facilitates automated professional networking by allowing users to log in via LinkedIn. The platform parses user profiles to create rich user data and suggests potential connections based on mutual interests, industries, and goals.

## Core Features

1. **LinkedIn Authentication**: Sign in with LinkedIn OAuth 2.0
2. **Profile Parsing and Enrichment**: Comprehensive LinkedIn profile data fetching
3. **Automated Matchmaking**: Algorithm that suggests potential connections
4. **Messaging System**: Send personalized messages to connections
5. **User Dashboard**: View suggested matches, messages, and profile information

## Tech Stack

- **Frontend**: Next.js with TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js with LinkedIn provider

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/socialmesh.git
   cd socialmesh
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   # Database
   DATABASE_URL="postgresql://postgres:password@localhost:5432/socialmesh?schema=public"

   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-change-in-production"

   # LinkedIn OAuth
   LINKEDIN_CLIENT_ID="your-linkedin-client-id"
   LINKEDIN_CLIENT_SECRET="your-linkedin-client-secret"

   # Proxycurl API
   PROXYCURL_API_KEY="your-proxycurl-api-key"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## LinkedIn API Setup

1. Create a LinkedIn Developer account at [LinkedIn Developer Portal](https://developer.linkedin.com/)
2. Create a new app and configure the OAuth 2.0 settings
3. Set the redirect URL to `http://localhost:3000/api/auth/callback/linkedin`
4. Request access to r_liteprofile and r_emailaddress scopes

## Database Schema

The database schema includes the following main models:
- User: Stores user profile data
- Match: Manages connection requests between users
- Message: Stores messages exchanged between users
- Preferences: Stores user preferences for networking

## Feature Roadmap

- Premium Features:
  - ✓ Advanced analytics and insights for premium users
  - ✓ Connection and messaging metrics visualization
  - ✓ Industry-based connection analysis
  - ✓ Premium subscription tiers (Basic, Professional, Enterprise)
  - Priority matchmaking for premium subscribers
- Mobile Application: Native mobile apps for iOS and Android
- Integration with Other Platforms: Support for GitHub and Google authentication

## Premium Analytics Features

The SocialMesh platform offers premium analytics features that help users optimize their networking strategy:

### User Analytics
- Profile view tracking
- Search appearance metrics
- Connection success rate
- Message response rate

### Network Insights
- Industry distribution of connections
- Skill-based matching analysis
- Weekly activity tracking

### Premium Tiers
- **Basic**: Analytics dashboard, increased connection limits
- **Professional**: Priority matching, advanced filters, full analytics
- **Enterprise**: Unlimited connections and messages, top priority in search results

For more information on premium features, visit the Premium tab in the dashboard.
