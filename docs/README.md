# VTEX Country Flags

A React component that renders country flags as SVG icons.

## API

### CountryFlag

This component receives the country code and renders that respective country's flag.

#### Props

| Prop name | Type | Description |
| --- | --- | --- |
| `iso3` | `string` | The country code in ISO-3 format (e.g. `BRA`). Default: `undefined` |
| `iso2` | `string` | The country code in ISO-2 format (e.g. `BR`). Default: `undefined` |

> Notice that you only need to pass either `iso3` or `iso2` prop, not both.

Example usage:

```tsx
import { CountryFlag } from 'vtex.country-flags'

const Component = () => {
  return (
    // renders Brazil flag
    <CountryFlag iso3="BRA" />
  )
}
```
