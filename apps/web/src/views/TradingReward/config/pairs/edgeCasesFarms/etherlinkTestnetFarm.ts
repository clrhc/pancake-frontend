import { defineFarmV3Configs } from '@pancakeswap/farms/src/defineFarmV3Configs'
import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'

export const tradingRewardEtherlinkTestnetV3Pair = defineFarmV3Configs([
  {
    pid: null as any,
    lpAddress: '0xE817A59F8A030544Ff65F47536abA272F6d63059',
    token0: etherlinkTestnetTokens.ign,
    token1: etherlinkTestnetTokens.weth,
    feeAmount: FeeAmount.LOW,
  },
])
