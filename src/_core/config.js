const config = {};
let baseUrl;
config.getBasePublicUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    baseUrl = 'https://ptway-test.herokuapp.com/';
  } else if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://ptway-test.herokuapp.com/';
  } else {
    baseUrl = 'https://ptway-test.herokuapp.com/';
  }
  // todo: delete the line below
  return baseUrl;
};

export default config;
