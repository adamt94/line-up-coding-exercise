import { getPreformanceByEventId } from '../api/performance'
import TicketOptions from '../components/TicketOptions/TicketOptions'

export default async function TicketPage() {
  const performance = await getPreformanceByEventId({ eventId: '151' })

  return (
    <main className="flex min-h-screen flex-col items-center p-2">
      <h1 className="text-4xl font-bold text-center on-surface-text py-2">
        Ticket Options
      </h1>
      {/* i assume that the number of events from endpoint is always one so just used first index */}
      <TicketOptions data={performance.data[0].pricing} />
    </main>
  )
}
