const createApi = require('./../api');

function bootstrap() {
  const api = createApi( )

  const PORT = process.env.PORT || 3000;
  console.log(`Listening at port ${PORT}`);
  api.listen(PORT);

}

bootstrap();
