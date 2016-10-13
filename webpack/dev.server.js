import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './dev.config';
import config from '../app/config/config';

const app = express();
const compiler = webpack(webpackConfig);

const host = config.host || 'localhost';
const port = (Number(config.port)) || 3000;

const serverOpions = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
};

const devMid = webpackDevMiddleware(compiler, serverOpions);

app.use(devMid);
app.use(webpackHotMiddleware(compiler));

const server = app.listen(port, host, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info('==> 🚧  Webpack development server listening on port %s', port);
});

process.on('SIGTERM', () => {
  console.log('Stopping dev server');

  devMid.close();
  server.close(() => {
    process.exit(0);
  });
});
