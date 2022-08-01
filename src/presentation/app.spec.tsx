/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react'
import { Home } from './pages/home'
import * as ReactRouter from 'react-router'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { useCharacter } from './hooks/useCharacter'
import { renderHook, act } from '@testing-library/react-hooks'

it('Test', async () => {
  render(<Home />, { wrapper: BrowserRouter })
  const { result, waitForValueToChange } = renderHook(() => useCharacter(), {
    wrapper: BrowserRouter,
  })
  await waitForValueToChange(() => result.current.data) // times out as the value never changes
  expect(result.current.data).toHaveLength(20)
  expect(screen.getByTestId('characters')).toBeInTheDocument()
})
