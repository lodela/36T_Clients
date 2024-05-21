import jest from 'jest'
import { render, screen, describe, it } from '@testing-library/react'
import { expect } from '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { ClientsForm } from './ClientsForm'

describe('ClientsForm', () => {
  it('should render the form fields', () => {
    render(<ClientsForm />)
    expect(screen.getByLabelText('NombreComercial')).toBeInTheDocument()
    expect(screen.getByLabelText('Telefono')).toBeInTheDocument()
    expect(screen.getByLabelText('Correo')).toBeInTheDocument()
  })

  it('should validate the form fields', () => {
    render(<ClientsForm />)
    const submitButton = screen.getByRole('button', { name: 'Save' })
    userEvent.click(submitButton)
    expect(screen.getByText('NombreComercial is required')).toBeInTheDocument()
    expect(screen.getByText('Telefono is required')).toBeInTheDocument()
    expect(screen.getByText('Correo is required')).toBeInTheDocument()
  })

  it('should submit the form with valid data', () => {
    const handleData = jest.fn()
    render(<ClientsForm handleData={handleData} />)
    const nombreComercialInput = screen.getByLabelText('NombreComercial')
    const telefonoInput = screen.getByLabelText('Telefono')
    const correoInput = screen.getByLabelText('Correo')
    userEvent.type(nombreComercialInput, 'Client 1')
    userEvent.type(telefonoInput, '1234567890')
    userEvent.type(correoInput, 'client1@email.com')
    userEvent.click(screen.getByRole('button', { name: 'Save' }))
    expect(handleData).toHaveBeenCalledWith({
      NombreComercial: 'Client 1',
      Telefono: '1234567890',
      Correo: 'client1@email.com',
    })
  })
})
