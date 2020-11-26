📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# VTEX COUNTRY FLAGS

⚠️ **This is an ongoing, unsupported, unfinished and undocumented project. We do not guarantee any results after installation.** ⚠️

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->


This component receives the country code and renders that respective country's flag in SVG.

## Configuration 


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


## Customization

TBC

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
