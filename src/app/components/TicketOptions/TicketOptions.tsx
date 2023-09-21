'use client'
import { PerformancePricing } from '@/app/api/performance'
import QuantityInput from '../QuantityInput/QuantityInput'
import { useMemo, useState } from 'react'
import Table from '../Table/Table'

type TicketTableProps = {
  data: PerformancePricing[]
}

type PricingData = {
  name: string
  description: string
  price: number
  variantName: string
}

export default function TicketTable({ data }: TicketTableProps) {
  const [total, setTotal] = useState(0)

  // formats api data into a format that can be used by the table
  const tableData = useMemo(() => {
    const pricingData: PricingData[] = []
    data.forEach((pricing) => {
      pricing.priceBand.variants.forEach((variant) => {
        pricingData.push({
          name: pricing.priceBand.name,
          description: pricing.priceBand.description,
          price: variant.price.value,
          variantName: variant.name,
        })
      })
    })
    return pricingData
  }, [data])

  return (
    <section className="w-full max-w-2xl">
      <div className="flex justify-end w-full pt-4 px-4">
        <p className="on-surface-text">
          Tickets Remaining:{' '}
          <span className="font-bold">{data[0].capacity}</span>
        </p>
      </div>
      <div className="m-auto shadow-md rounded my-6">
        <Table headings={['Ticket', 'Description', 'Price', 'Quantity']}>
          {tableData.map((item, index) => [
            <div key={index} className="flex flex-col">
              <div className="font-bold p-0">{item.variantName}</div>
              <div className="p-1 outline-text">{item.name}</div>
            </div>,
            item.description,
            `£${item.price.toFixed(2)}`,
            <QuantityInput
              key={index}
              initialValue={0}
              onChange={(value, step) => {
                setTotal(total + step * item.price)
                console.log(`Quantity changed to ${value}`)
              }}
            />,
          ])}
        </Table>
      </div>
      <div className="flex flex-col items-end px-4 gap-4">
        <p className="on-surface-text mx-4">
          Total: <span className="font-bold">{`£${total.toFixed(2)}`}</span>
        </p>
        <div className="flex justify-end w-full">
          <button className="primary-container hover:bg-blue-700 on-primary-container-text font-bold py-2 px-4 rounded-full">
            Add to Basket
          </button>
        </div>
      </div>
    </section>
  )
}
