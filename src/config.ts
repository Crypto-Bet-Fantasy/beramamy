import { http, createConfig, injected } from '@wagmi/core'
import { berachainTestnetbArtio } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [ berachainTestnetbArtio],
  connectors: [injected()], 
  transports: {
    [berachainTestnetbArtio.id]: http(),
  },
})