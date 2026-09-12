import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { StartupMessage } from './StartupMessage'

describe('StartupMessage', () => {
  it('confirms that the Next.js frontend is running', () => {
    render(<StartupMessage />)

    expect(
      screen.getByRole('heading', { name: /next\.js está funcionando/i }),
    ).toBeInTheDocument()
  })
})
