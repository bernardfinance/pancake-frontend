import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BONES-BNB LP',
    lpAddresses: {
      97: '0x3e60365d098E33c037699F53b733CDE21AfeFa9e',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'BONES',
    tokenAddresses: {
      97: '0x517917Ffbe2950A15E4bbAe609812394F8e95095',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.wbnb,
  }
]

export default farms
