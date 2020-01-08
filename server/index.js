import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';

import users from './routes/users';

let app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
 res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('starterd Server in port 3000'));
