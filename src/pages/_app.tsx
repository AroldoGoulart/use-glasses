/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';

import { setup } from 'twind';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
// optional configuration
import AlertTemplate from 'react-alert-template-basic';

import twindConfig from '../twind.config';

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: `30px`,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Component {...pageProps} />
    </AlertProvider>
  );
}
