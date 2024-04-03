import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { FeeAmount, Pool } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { FarmConfigV3, SerializedFarmConfig } from '..'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    lpAddress: '0x5EFf51E8718F7b36D09CBc0506f653E886eBdAdb',
    token0: opBnbTestnetTokens.ign,
    token1: opBnbTestnetTokens.wxtz,
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 2,
    lpAddress: '0x71C5C28442353877f6a4A196f95Ee4CfB0Dcb5Aa',
    token0: opBnbTestnetTokens.wxtz,
    token1: opBnbTestnetTokens.weth,
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 3,
    lpAddress: '0x6Cd45Ef02989A9188A9d8B170b86FAAA6d2B194C',
    token0: opBnbTestnetTokens.ign,
    token1: opBnbTestnetTokens.usdc,
    feeAmount: FeeAmount.HIGH,
  },
])

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 1,
    lpSymbol: 'IGN-WXTZ LP',
    lpAddress: '0xF8E1FA0648F87c115F26E43271B3D6e4a80A2944',
    quoteToken: etherlinkTestnetTokens.ign,
    token: etherlinkTestnetTokens.wxtz,
  },
  {
    pid: 2,
    vaultPid: 2,
    lpSymbol: 'WXTZ-EUSD LP',
    lpAddress: '0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109',
    quoteToken: etherlinkTestnetTokens.wxtz,
    token: etherlinkTestnetTokens.eusd,
  },
  {
    pid: 3,
    vaultPid: 3,
    lpSymbol: 'EUSD-USDT LP',
    lpAddress: '0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109',
    quoteToken: etherlinkTestnetTokens.eusd,
    token: etherlinkTestnetTokens.usdt,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms
