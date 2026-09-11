import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the project foundation message', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /la tienda está tomando forma/i }),
    ).toBeInTheDocument()
  })
})
