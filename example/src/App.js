import React from 'react'

import { useLastRef } from 'use-last-ref'

const App = () => {
  const example = useLastRef(1)
  return (
    <div>
      {example.current}
    </div>
  )
}
export default App
