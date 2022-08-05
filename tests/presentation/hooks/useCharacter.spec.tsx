import { BrowserRouter } from 'react-router-dom'
import { useCharacter } from '../../../src/presentation/hooks/useCharacter'
import { act, cleanup, renderHook } from '@testing-library/react-hooks'

describe('useCharacter', () => {
  afterEach(async () => {
    const { result, waitForValueToChange } = renderHook(() => useCharacter(), {
      wrapper: BrowserRouter,
    })

    act(() => {
      result.current.handleChangePage(
        {
          target: {
            value: 1,
          },
        } as unknown as React.ChangeEvent<unknown>,
        1,
      )
      result.current.setFilterType('Nenhum')
      result.current.setFilterValue('')
    })
  })

  it('should params have the correct data', async () => {
    const { result, waitForValueToChange } = renderHook(() => useCharacter(), {
      wrapper: BrowserRouter,
    })
    await waitForValueToChange(() => result.current)
    expect(result.current.filterType).toBe('Nenhum')
    expect(result.current.filterValue).toBe('')
    expect(result.current.page).toBe(1)
  })

  it('should return 20 characters', async () => {
    const { result, waitForValueToChange } = renderHook(() => useCharacter(), {
      wrapper: BrowserRouter,
    })
    await waitForValueToChange(() => result.current.data) // times out as the value never changes
    expect(result.current.data).toHaveLength(20)
  })

  it('should return the correct page', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper: BrowserRouter,
    })

    act(() => {
      result.current.handleChangePage(
        {
          target: {
            value: 3,
          },
        } as unknown as React.ChangeEvent<unknown>,
        3,
      )
    })
    expect(result.current.page).toBe(3)
  })

  it('should return the correct filterType', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper: BrowserRouter,
    })
    const filters = ['Nenhum', 'status', 'especie', 'nome', 'genero']
    filters.forEach((filter) => {
      act(() => {
        result.current.setFilterType(filter)
      })
      expect(result.current.filterType).toBe(filter)
    })
  })

  it('should return the correct filterValue', async () => {
    const { result } = renderHook(() => useCharacter(), {
      wrapper: BrowserRouter,
    })
    const filters = ['Nenhum', 'status', 'especie', 'nome', 'genero']
    filters.forEach((filter) => {
      act(() => {
        result.current.setFilterValue(filter)
      })
      expect(result.current.filterValue).toBe(filter)
    })
  })
})
