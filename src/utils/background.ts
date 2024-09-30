export const getWheatherBackground = (mainWeather: string): string => {
  switch (mainWeather) {
    case 'Snow':
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";

    case 'Clouds':
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";

    case 'Fog':
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
    case 'Rain':
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";

    case 'Clear':
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";

    case 'Thunderstorm':
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderst)";

    default:
      return "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
  }
};
