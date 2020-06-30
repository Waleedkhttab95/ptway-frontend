const config = {};
let baseUrl;
config.getBasePublicUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost/';
  } else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://ptway-test.herokuapp.com/';
  } else {
    baseUrl = 'http://localhost/';
  }
  // todo: delete the line below
  return baseUrl;
};

export default config;
