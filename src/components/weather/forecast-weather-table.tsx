import * as React from 'react';
import { groupBy } from 'lodash';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import QueryResult from '../query-result';
import { formatTemperature, formatWindSpeed } from '../../utils';
import { useOpenWeatherMap } from '../../hooks';
import { ForecastWeatherResponse } from '../../models';

export interface ForecastWeatherTableProps {
  cityId: string;
}

const ForecastWeatherTable: React.FC<
  React.PropsWithChildren<ForecastWeatherTableProps>
> = ({ cityId }) => {
  const { data, loading, error } = useOpenWeatherMap<ForecastWeatherResponse>({
    endpoint: 'forecast',
    cityId,
  });
  const [currentPage, setCurrentPage] = React.useState(0);

  const paginatedData = groupBy(
    data?.list,
    (row: { dt_txt: string | number | Date }) =>
      new Date(row.dt_txt).toLocaleDateString()
  );
  const pages = Object.keys(paginatedData);

  return (
    <QueryResult error={error} loading={loading} data={data}>
      <TableContainer component={Paper} sx={{ marginTop: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Temp</TableCell>
              <TableCell align="right">Min Temp</TableCell>
              <TableCell align="right">Max Temp</TableCell>
              <TableCell align="right">Wind</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData[pages[currentPage]]?.map((row) => (
              <TableRow
                key={row.dt}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {new Date(row.dt_txt).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {formatTemperature(row.main.temp)}
                </TableCell>
                <TableCell align="right">
                  {formatTemperature(row.main.temp_min)}
                </TableCell>
                <TableCell align="right">
                  {formatTemperature(row.main.temp_max)}
                </TableCell>
                <TableCell align="right">
                  {formatWindSpeed(row.wind.speed)}
                </TableCell>
                <TableCell align="right">
                  {row.weather[0].description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {pages &&
        pages.map((page, index) => (
          <Button
            key={`page-button-${index}`}
            variant={currentPage === index ? 'contained' : 'outlined'}
            sx={{ marginTop: 2, marginRight: 2 }}
            onClick={() => setCurrentPage(index)}
          >
            {page}
          </Button>
        ))}
    </QueryResult>
  );
};

export default ForecastWeatherTable;
