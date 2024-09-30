import * as React from 'react';

import { weatherApi } from '../api';

export interface OpenWeatherMapParams {
  endpoint: string;
  cityId: string;
}

export interface OpenWeatherMapResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | undefined;
}

export const useOpenWeatherMap = <T>(
  params: OpenWeatherMapParams
): OpenWeatherMapResult<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | undefined>(undefined);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await weatherApi.request({
          url: params.endpoint,
          params: {
            id: params.cityId,
            units: 'metric',
          },
        });
        setError(undefined);
        setData(response.data);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.cityId, params.endpoint]);

  return { data, loading, error };
};
