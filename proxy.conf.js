module.exports = {
  '/api/*': {
    target: 'http://api.nrugroup.ir/',
    secure: false,
    changeOrigin: true,
  },
};
