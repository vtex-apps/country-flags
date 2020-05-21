import React from 'react'
import getCountryISO3 from 'country-iso-2-to-3'

import DefaultFlag from './icons/default'
import { loadFlag } from './flagMap'

type Props = { iso2: string } | { iso3: string }

const CountryFlag: React.FC<Props> = props => {
  const countryCode = 'iso2' in props ? getCountryISO3(props.iso2) : props.iso3

  const flag = loadFlag(countryCode) ?? <DefaultFlag />

  return flag
}

export default CountryFlag
