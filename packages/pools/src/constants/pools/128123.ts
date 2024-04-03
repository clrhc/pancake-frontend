import { getAddress } from 'viem'
import { etherlinkTestnetTokens } from '@pancakeswap/tokens'
import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  {
    sousId: 1,
    stakingToken: etherlinkTestnetTokens.ign,
    earningToken: etherlinkTestnetTokens.wxtz,
    contractAddress: '0x6e9Cf632243070984A44743d9009CD48cb232F83',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
  {
    sousId: 2,
    stakingToken: etherlinkTestnetTokens.wxtz,
    earningToken: etherlinkTestnetTokens.eusd,
    contractAddress: '0x6C9ffC1FE0f6aD00eeedbF99384E60517CA3E706',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
  {
    sousId: 3,
    stakingToken: etherlinkTestnetTokens.eusd,
    earningToken: etherlinkTestnetTokens.usdt,
    contractAddress: '0x452ED06e65aF886Ff778E9aF319fdC0ffaFA9d85',
    poolCategory: PoolCategory.CORE,
    tokenPerSecond: '0.01',
    version: 3,
  },
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
export const finishedPools: SerializedPool[] = []

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
