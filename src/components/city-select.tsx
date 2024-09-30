import * as React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import { cityList } from '../utils';

interface CitySelectProps {
  valueSelected: (value: string) => void;
}

const CitySelect = ({ valueSelected }: CitySelectProps) => {
  const [selection, setSelection] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;

    setSelection(value);
    valueSelected(value);
  };

  return (
    <FormControl variant="standard">
      <InputLabel id="city-select-label">City</InputLabel>
      <Select
        labelId="city-select-label"
        id="city-select"
        value={selection}
        label="City "
        onChange={handleChange}
      >
        {cityList.map((city) => (
          <MenuItem key={`city-${city.id}`} value={city.id}>
            {city.name}/{city.country}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Please select city to see the forecast</FormHelperText>
    </FormControl>
  );
};

export default CitySelect;
