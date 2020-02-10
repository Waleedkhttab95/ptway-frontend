const config = {};
let baseUrl;
config.getBasePublicUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:80/';
  } else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'http://localhost:80/';
  } else {
    baseUrl = 'http://localhost:80/';
  }
  // todo: delete the line below
  return baseUrl;
};

export default config;
