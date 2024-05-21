import jest from 'jest'
import { render, screen, describe, it } from '@testing-library/react'
import { expect } from '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('should render the search input', () => {
    render(<SearchBar />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should trigger the onSearch callback', () => {
    const onSearch = jest.fn()
    render(<SearchBar onSearch={onSearch} />)
    const searchInput = screen.getByRole('textbox')
    userEvent.type(searchInput, 'Client 1')
    expect(onSearch).toHaveBeenCalledWith('Client 1')
  })
})
