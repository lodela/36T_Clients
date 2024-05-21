import jest from 'jest'
import { render, screen, describe, it } from '@testing-library/react'
import { expect } from '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Clients } from './Clients'
import { getClients } from '../Services/ClientsService'

jest.mock('../Services/ClientsService')

describe('Clients', () => {
  it('should fetch clients on mount', async () => {
    const clients = [{ id: 1, NombreComercial: 'Client 1' }]
    getClients.mockResolvedValue(clients)
    render(<Clients />)
    expect(await screen.findAllByRole('row')).toHaveLength(clients.length)
  })

  it('should render the client list', async () => {
    const clients = [{ id: 1, NombreComercial: 'Client 1' }]
    getClients.mockResolvedValue(clients)
    render(<Clients />)
    expect(screen.getByText('Client 1')).toBeInTheDocument()
  })

  it('should open and close the modal', () => {
    render(<Clients />)
    const button = screen.getByRole('button', { name: 'Add Client' })
    userEvent.click(button)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should search for clients', async () => {
    const clients = [
      { id: 1, NombreComercial: 'Client 1' },
      { id: 2, NombreComercial: 'Client 2' },
    ]
    getClients.mockResolvedValue(clients)
    render(<Clients />)
    const searchInput = screen.getByRole('textbox')
    userEvent.type(searchInput, 'Client 2')
    expect(await screen.findAllByRole('row')).toHaveLength(1)
    expect(screen.getByText('Client 2')).toBeInTheDocument()
  })
})
