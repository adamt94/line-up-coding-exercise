import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Table', () => {
  it('renders the headers and data correctly', () => {
    const headers = ['Name', 'Age', 'Gender']
    const data = [['Alice', '25', 'Female']]

    render(<Table headings={headers}>{data}</Table>)

    const nameHeader = screen.getByText('Name')
    const ageHeader = screen.getByText('Age')
    const genderHeader = screen.getByText('Gender')

    expect(nameHeader).toBeVisible()
    expect(ageHeader).toBeInTheDocument()
    expect(genderHeader).toBeInTheDocument()

    const aliceName = screen.getByText('Alice')
    const aliceAge = screen.getByText('25')
    const aliceGender = screen.getByText('Female')

    expect(aliceName).toBeInTheDocument()
    expect(aliceAge).toBeInTheDocument()
    expect(aliceGender).toBeInTheDocument()
  })
})
