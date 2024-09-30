import * as React from 'react';
import { Container } from '@mui/material';

import { CitySelect, CurrentWeather } from '../components';

const WeatherForecastPage = () => {
  const [cityId, setCityId] = React.useState<string | undefined>(undefined);

  const handleCityChange = (value: string) => {
    setCityId(value);
  };

  return (
    <Container sx={{ paddingTop: 3 }}>
      <CitySelect valueSelected={handleCityChange} />
      {cityId && <CurrentWeather cityId={cityId} />}
    </Container>
  );
};

export default WeatherForecastPage;
