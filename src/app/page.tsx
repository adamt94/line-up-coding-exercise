import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-20 p-2">
      <h1 className="on-surface-text text-4xl font-bold text-center">
        Line Up Coding Exercise
      </h1>
      <Link
        className="primary on-primary-text font-bold py-2 px-4 rounded-full"
        href={'/tickets'}
      >
        to Basket Page
      </Link>
    </main>
  )
}
