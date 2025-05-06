import axios from 'axios'

const PROXYCURL_API_KEY = process.env.PROXYCURL_API_KEY

export interface LinkedInProfile {
  full_name: string
  headline: string
  summary: string
  industry: string
  location: {
    country: string
    city: string
  }
  experiences: Array<{
    title: string
    company: string
    description: string
    location: string
    starts_at: {
      month: number
      year: number
    }
    ends_at: {
      month: number
      year: number
    } | null
  }>
  education: Array<{
    school: string
    degree_name: string
    field_of_study: string
    starts_at: {
      year: number
    }
    ends_at: {
      year: number
    } | null
  }>
  skills: string[]
}

export async function getLinkedInProfile(linkedInProfileUrl: string): Promise<LinkedInProfile> {
  try {
    const response = await axios.get('https://nubela.co/proxycurl/api/v2/linkedin', {
      params: {
        url: linkedInProfileUrl,
        skills: 'include',
        education: 'include',
        experience: 'include',
      },
      headers: {
        'Authorization': `Bearer ${PROXYCURL_API_KEY}`
      }
    })
    
    return response.data
  } catch (error) {
    console.error('Error fetching LinkedIn profile:', error)
    throw new Error('Failed to fetch LinkedIn profile data')
  }
} 