import { Button, Grid2 } from '@mui/material';

import ForecastWeatherControlTable from './forecast-weather-table';

export interface ForecastWeatherControlProps {
  cityId: string;
  openForecast: boolean;
  toggleForecast: () => void;
}

const ForecastWeatherControl: React.FC<
  React.PropsWithChildren<ForecastWeatherControlProps>
> = ({ cityId, openForecast, toggleForecast }) => {
  return (
    <Grid2 size={12} textAlign="center" marginTop={4}>
      {!openForecast && (
        <Button variant="contained" onClick={toggleForecast}>
          See Forecast
        </Button>
      )}

      {openForecast && (
        <>
          <Button variant="contained" onClick={toggleForecast}>
            Close
          </Button>
          <ForecastWeatherControlTable cityId={cityId} />
        </>
      )}
    </Grid2>
  );
};

export default ForecastWeatherControl;
