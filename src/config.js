export const baseURL =
  process.env.REACT_APP_ENV === 'development' ? 'https://api.dev.upstock.io/' : 'https://api.dev.upstock.io/';

export const mapConfig = process.env.REACT_APP_MAP_MAPBOX;

export const googleAnalyticsConfig = process.env.REACT_APP_GA_MEASUREMENT_ID;
