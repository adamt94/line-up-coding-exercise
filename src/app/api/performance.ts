import { API_URL } from '@/utils/constants'
type PricingVariant = {
  id: number
  name: string
  description: string
  price: {
    id: number
    value: number
  }
  adjusters: {
    id: number
    name: string
    description: string
    external: boolean
    rateType: string
    rate: number
    price: {
      id: number
      value: number
    }
  }[]
  discount: null
}

export type PricingBand = {
  id: number
  name: string
  description: string
  color: string
  variants: PricingVariant[]
}

export type PerformancePricing = {
  id: number
  capacity: number
  capacityRemaining: number
  priceBand: PricingBand
}

export type PerformanceData = {
  id: number
  eventId: number
  startDate: string
  startTime: string
  endDate: string | null
  endTime: string | null
  tags: string[]
  timeZone: string
  pricing: PerformancePricing[]
  totalCapacity: number
  totalCapacityRemaining: number
  venuePlanId: number
}
export type GetTicketResponse = {
  data: PerformanceData[]
}

export async function getPreformanceByEventId({
  eventId,
}: {
  eventId: string
}): Promise<GetTicketResponse> {
  const url = new URL(API_URL + 'performance/')

  url.search = new URLSearchParams({
    event_id: eventId,
    expand: 'pricing',
  }).toString()

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export async function getPreformanceById({
  performanceId,
}: {
  eventId: string
  performanceId: string
}): Promise<GetTicketResponse> {
  const url = new URL(API_URL + `performance/${performanceId}`)

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  })
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
