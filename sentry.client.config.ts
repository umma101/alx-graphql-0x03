import * as Sentry from '@sentry/react';

componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  Sentry.captureException(error, { extra: errorInfo });
}