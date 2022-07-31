import { Shop } from './shop/Shop';

import {ContextProvider} from '../context';

export const Main = () => {
  return(
    <main>
      <ContextProvider>
        <Shop />
      </ContextProvider>
    </main>
  );
};
