import { Connector } from '@web3-react/types'
import { coinbaseWalletConnection } from 'connection'

import { isMobile } from '../../utils/userAgent'
import COINBASE_ICON_URL from '../assets/images/coinbaseWalletIcon.svg'
import Option from './Option'

const BASE_PROPS = {
  color: '#315CF5',
  icon: COINBASE_ICON_URL,
  id: 'coinbase-wallet',
}

const CoinbaseWalletOption = ({ tryActivation }: { tryActivation: (connector: Connector) => void }) => {
  const isActive = coinbaseWalletConnection.hooks.useIsActive()
  const isCoinbaseWallet = !!window.ethereum?.isCoinbaseWallet

  if (isMobile && !isCoinbaseWallet) {
    return (
      <Option
        {...BASE_PROPS}
        isActive={isActive}
        onClick={() => tryActivation(coinbaseWalletConnection.connector)}
        link="https://go.cb-w.com/mtUDhEZPy1"
        header="Open in Coinbase Wallet"
        subheader="Open in Coinbase Wallet app."
      />
    )
  } else {
    return (
      <Option
        {...BASE_PROPS}
        isActive={isActive}
        header="Coinbase Wallet"
        subheader="Use Coinbase Wallet app on mobile device"
      />
    )
  }
}

export default CoinbaseWalletOption