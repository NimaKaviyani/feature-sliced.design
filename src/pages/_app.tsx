import '@styles/globals.scss';
import {ReactElement} from 'react';
import {NextPage} from 'next';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {store} from '@app/store';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement<any, any> | null
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout): React.ReactElement<any, any> | null {
  const getLayout = Component.getLayout ?? function(page) {
    return page;
  };
  return (
    <Provider store={store}>
      <ToastContainer rtl={false} pauseOnFocusLoss />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
