import { WETH9, ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { USDC, CAKE } from './common'

export const etherlinkTestnetTokens = {
  wxtz: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0xB1Ea698633d57705e93b0E40c1077d46CD6A51d8', 18, 'WXTZ', 'Wrapped XTZ'),
  ign: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0xBeEfb119631691a1e0D9378fA7864fC6E67A72Ad', 18, 'IGN', 'Iguana Token'),
  eusd: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0x1A71f491fb0Ef77F13F8f6d2a927dd4C969ECe4f', 18, 'eUSD', 'Etherlink USD'),
  usdt: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0xD21B917D2f4a4a8E3D12892160BFFd8f4cd72d4F', 18, 'USDT', 'Tether USD'),
  usdc: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0xa7c9092A5D2C3663B7C5F714dbA806d02d62B58a', 18, 'USDC', 'USD Coin'),
  weth: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0x8DEF68408Bc96553003094180E5C90d9fe5b88C1', 18, 'WETH', 'Wrapped Ether'),
  tzbtc: new ERC20Token(ChainId.ETHERLINK_TESTNET, '0x6bDE94725379334b469449f4CF49bCfc85ebFb27', 18, 'tzBTC', 'Tez Wrapped BTC'),
}
