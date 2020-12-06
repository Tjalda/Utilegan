/*module.exports = {
    publicPath: '/'
}*/

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Utilegan/'
      : '/'
  }