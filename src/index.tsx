import * as React from 'react'

export function useLastRef<T> (value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value)
  ref.current = value
  return ref
};

export default useLastRef
