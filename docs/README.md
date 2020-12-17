📢 Use this project, [contribute](https://github.com/vtex-apps/country-flags) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Country Flags

> :warning: *Although ready to be installed, the Country Flags app is currently an **open-beta project**. Bear in mind that due to that status, you can expect an accelerated state of evolution.*

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->


The Country Flags app provides flags in SVG icons to be displayed according to the countries' ISO code.

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

No CSS Handles are available yet for the app customization.

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
