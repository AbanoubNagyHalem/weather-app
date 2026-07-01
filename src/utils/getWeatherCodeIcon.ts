export const getWeatherCodeIcon = (weatherCode: number): string => {
  switch (weatherCode) {
    case 0:
      return "☀️";

    case 1:
      return "🌤️";

    case 2:
      return "⛅";

    case 3:
      return "☁️";

    case 45:
    case 48:
      return "🌫️";

    case 51:
    case 53:
      return "🌦️";

    case 55:
      return "🌧️";

    case 56:
    case 57:
    case 66:
    case 67:
      return "🧊🌧️";

    case 61:
      return "🌦️";

    case 63:
    case 65:
    case 81:
      return "🌧️";

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "🌨️";

    case 80:
      return "🌦️";

    case 82:
    case 95:
      return "⛈️";

    case 96:
    case 99:
      return "⛈️🧊";

    default:
      return "❓";
  }
};
