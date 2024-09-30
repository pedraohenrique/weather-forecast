import * as React from 'react';
import { Avatar, Box, Typography, Grid2, Stack } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ForecastWeatherControl from './forecast-weather-control';
import QueryResult from '../query-result';
import { useOpenWeatherMap } from '../../hooks';
import { CurrentWeatherResponse } from '../../models';
import { formatWindSpeed, getWheatherBackground } from '../../utils';

export interface CurrentWeatherProps {
  cityId: string;
}

const CurrentWeather: React.FC<
  React.PropsWithChildren<CurrentWeatherProps>
> = ({ cityId }) => {
  const { data, loading, error } = useOpenWeatherMap<CurrentWeatherResponse>({
    endpoint: 'weather',
    cityId,
  });
  const [openForecast, setOpenForecast] = React.useState<boolean>(false);

  React.useEffect(() => {
    setOpenForecast(false);
  }, [cityId]);

  const toggleForecast = () => {
    setOpenForecast(!openForecast);
  };

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <Box
        margin={{ md: 8, sm: 4 }}
        borderRadius={6}
        padding={5}
        sx={{
          color: 'white',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: getWheatherBackground(data?.weather[0].main ?? ''),
        }}
      >
        <Grid2 container columnSpacing={2} rowSpacing={1}>
          <Grid2
            size={6}
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 72, height: 72 }}
              src={`https://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
            />
          </Grid2>
          <Grid2 display="flex" justifyContent="right" alignItems="center">
            <Typography variant="h3" component="p" fontWeight="bold">
              {data?.main.temp.toFixed()}˚
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body1" component="p" align="center">
              {data?.weather[0].main}, {data?.weather[0].description}
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <Typography variant="body2" component="p" align="center">
              Wind: {formatWindSpeed(data?.wind.speed ?? 0)}
            </Typography>
          </Grid2>
          <Grid2
            size={6}
            display="flex"
            justifyContent="right"
            alignItems="center"
          >
            <ArrowDownwardIcon />
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="body1" component="p">
                Min
              </Typography>
              <Typography variant="body1" component="p" fontWeight="bold">
                {data?.main.temp_min.toFixed()}˚
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            size={6}
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <ArrowUpwardIcon />
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="body1" component="p">
                Max
              </Typography>
              <Typography variant="body1" component="p" fontWeight="bold">
                {data?.main.temp_max.toFixed()}˚
              </Typography>
            </Stack>
          </Grid2>

          <ForecastWeatherControl
            cityId={cityId}
            openForecast={openForecast}
            toggleForecast={toggleForecast}
          />
        </Grid2>
      </Box>
    </QueryResult>
  );
};

export default CurrentWeather;
