import { IS_MAINNET } from '@hey/data/constants';
import { hydrateAuthTokens } from 'src/store/useAuthPersistStore';

const getAuthWorkerHeaders = () => {
  return {
    'X-Access-Token': hydrateAuthTokens().accessToken,
    'X-Lens-Network': IS_MAINNET ? 'mainnet' : 'testnet'
  };
};

export default getAuthWorkerHeaders;
