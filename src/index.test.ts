import { useLastRef } from './'
import { renderHook } from '@testing-library/react-hooks'

// mock timer using jest
jest.useFakeTimers()

describe('useLastRef', () => {
  it('updates every second', () => {
    const { result, rerender } = renderHook<{ value: number }, React.MutableRefObject<number>>(({ value }) => useLastRef(value), { initialProps: { value: 0 } })

    expect(result.current.current).toBe(0)

    rerender({ value: 1 })
    expect(result.current.current).toBe(1)
  })
})
