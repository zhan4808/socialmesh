# SocialMesh - Professional Networking Platform

SocialMesh is an automated professional networking platform that leverages LinkedIn authentication and profile data to match users with relevant professional connections.

## Features

- LinkedIn authentication and profile import
- AI-powered matchmaking algorithm
- Profile enrichment using Proxycurl API
- Messaging system between matched connections
- Analytics dashboard with connection metrics

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js with LinkedIn provider
- **API Integration**: Proxycurl for LinkedIn profile data

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- LinkedIn Developer account
- Proxycurl API key

### Environment Setup

1. Clone the repository
2. Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/socialmesh"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here"

# LinkedIn OAuth
LINKEDIN_CLIENT_ID="your-linkedin-client-id"
LINKEDIN_CLIENT_SECRET="your-linkedin-client-secret"

# Proxycurl API
PROXYCURL_API_KEY="your-proxycurl-api-key"
```

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Generate Prisma client:
   ```
   npx prisma generate
   ```

3. Run database migrations:
   ```
   npx prisma db push
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## LinkedIn Developer Setup

1. Create a LinkedIn app at [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps)
2. Configure OAuth 2.0 settings:
   - Add redirect URI: `http://localhost:3000/api/auth/callback/linkedin`
   - Request the following OAuth scopes: `r_liteprofile`, `r_emailaddress`
3. Add the client ID and secret to your `.env` file

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License. 