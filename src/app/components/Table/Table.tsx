import React from 'react'
import { ReactNode, useMemo } from 'react'

type TableProps<T> = {
  headings: string[]
  children: ReactNode[]
}
// This is generic table that accepts some headings and children
export default function Table<T>({ headings, children }: TableProps<T>) {
  return (
    <table className="min-w-max w-full table-auto">
      <thead>
        <tr className="secondary-container on-secondary-container-text uppercase text-sm leading-normal px-2">
          {headings.map((header) => (
            <th key={header} className="py-2 text-center">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="surface-container on-surface-text text-sm text-center font-light">
        {children.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b surface-variant-border">
            {React.Children.map(row, (cell, cellIndex) => (
              <td key={cellIndex} className="py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
