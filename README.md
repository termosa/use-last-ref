# use-last-ref

> Constantly updating ref value from the argument

[![NPM](https://img.shields.io/npm/v/use-last-ref.svg)](https://www.npmjs.com/package/use-last-ref) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-last-ref
```

## Usage

```tsx
import * as React from 'react'
import api from "./api"

import useLastRef from 'use-last-ref'
// Or: import { useLastRef } from 'use-last-ref'

const ExampleInput = ({ value }: { value?: string }) => {
  const valueRef = useLastRef(value)

  const save = React.useCallback((newValue: string) => {
    // Instead of adding `[value]` to `useCallback` dependency list
    // and updating `save` function and `<CustomSelect>` component
    // we use React reference feature to always access updated value

    // Prevent submitting the save value
    if (newValue !== valueRef.current) {
      api.saveNewValue(newValue)
    }
  }, [])

  return <CustomSelect onSelect={save} />
}
```

## License

MIT © [termosa](https://github.com/termosa)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
