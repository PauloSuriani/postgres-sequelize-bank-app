const app = require('./app');

const PORT = 3000;

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT: ${PORT}`);
});
