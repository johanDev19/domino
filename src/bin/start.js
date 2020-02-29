const createApi = require('./../api');

async function bootstrap() {
  const api = await createApi();

  const PORT = process.env.PORT || 4000;
  console.log(`Listening at port ${PORT}`);
  api.listen(PORT);
}

bootstrap();
