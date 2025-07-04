// pages/_app.tsx
import '@/sentry.client.config'; // adjust path if needed
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;