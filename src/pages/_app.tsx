/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';

import { setup } from 'twind';
// optional configuration
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
