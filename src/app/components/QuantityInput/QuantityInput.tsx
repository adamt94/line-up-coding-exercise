import { useState } from 'react'

type QuantityInputProps = {
  initialValue: number
  onChange: (value: number, step: number) => void
  step?: number
}

export default function QuantityInput({
  initialValue,
  onChange,
  step = 1,
}: QuantityInputProps) {
  const [value, setValue] = useState(initialValue)

  const handleIncrement = () => {
    onChange(value + step, step)
    setValue(value + step)
  }

  const handleDecrement = () => {
    onChange(value - step, -step)
    setValue(value - step)
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="surface-container-highest on-surface-container-text font-bold py-2 px-4 rounded-l disabled:opacity-40"
        disabled={value === 0}
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="surface-container-high on-surface-container-text  font-bold py-2 px-4">
        {value}
      </span>
      <button
        className="surface-container-highest on-surface-container-text font-bold py-2 px-4 rounded-r"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  )
}
