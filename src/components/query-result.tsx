import * as React from 'react';
import { Alert, Backdrop, CircularProgress } from '@mui/material';

interface QueryResultProps {
  loading: boolean;
  error?: Error | undefined;
  data?: unknown;
}

const QueryResult: React.FC<React.PropsWithChildren<QueryResultProps>> = ({
  loading,
  error,
  data,
  children,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}): React.ReactElement<any, any> | null => {
  if (error) {
    return (
      <Alert severity="error" sx={{ m: 4 }}>
        {error.message}
      </Alert>
    );
  }
  if (loading) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  if (data) {
    return <>{children}</>;
  }

  return (
    <Alert severity="info" sx={{ mt: 2 }}>
      Content not found
    </Alert>
  );
};

export default QueryResult;
