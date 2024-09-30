export const formatTemperature = (temp: number): string => {
  return `${temp.toFixed()}˚C`;
};

export const formatWindSpeed = (speed: number): string => {
  return `${speed.toFixed()} m/sec`;
};
