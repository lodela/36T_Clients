import jest from 'jest'
import { render, screen, describe, it } from '@testing-library/react'
import { expect } from '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { ClientsTable } from './ClientsTable'

describe('ClientsTable', () => {
  it('should render the table header', () => {
    const clients = [{ id: 1, NombreComercial: 'Client 1' }]
    render(<ClientsTable data={clients} />)
    expect(screen.getByText('NombreComercial')).toBeInTheDocument()
    expect(screen.getByText('Telefono')).toBeInTheDocument()
    expect(screen.getByText('Correo')).toBeInTheDocument()
    expect(screen.getByText('Actions')).toBeInTheDocument()
  })

  it('should render the client rows', () => {
    const clients = [{ id: 1, NombreComercial: 'Client 1' }]
    render(<ClientsTable data={clients} />)
    expect(screen.getByText('Client 1')).toBeInTheDocument()
  })

  it('should handle edit button click', () => {
    const clients = [{ id: 1, NombreComercial: 'Client 1' }]
    const handleEditClient = jest.fn()
    render(<ClientsTable data={clients} editClient={handleEditClient} />)
    userEvent.click(screen.getByRole('button', { name: 'Edit' }))
    expect(handleEditClient).toHaveBeenCalledWith(1)
  })

  it('should handle delete button click', () => {
    const clients = [{ id: 1, NombreComercial: 'Client 1' }]
    const handleDeleteClient = jest.fn()
    render(<ClientsTable data={clients} deleteClient={handleDeleteClient} />)
    userEvent.click(screen.getByRole('button', { name: 'Delete' }))
    expect(handleDeleteClient).toHaveBeenCalledWith(1)
  })
})
