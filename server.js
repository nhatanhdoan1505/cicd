/* eslint-disable*/
const express = require('express');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  var jsonParser = bodyParser.json();

  server.use(jsonParser);

  server.post('/auth/login', (req, res) => {
    if (req.body.email === 'admin@admin.com') {
      return res.status(200).json({ data: { token: 123 } });
    }

    return res.status(400).json({ OK: 1 });
  });

  server.get('/api/admin/users', async (req, res) => {
    const offset = (Number(req.query.page) - 1) * Number(req.query.perPage) || 0;
    const limit = Number(req.query.perPage) || 10;

    const items = [];
    const totalItem = 53;

    for (let i = 0; i < totalItem; i++) {
      items.push({
        name: {
          firstName: '山田',
          lastName: '太郎',
        },
        email: `taroyamada${i}@test.co.jp`,
        department: '営業部',
        position: '部長',
        phoneNumber: '070-0000-0000',
        role: i % 2 == 0 ? 1 : 2,
      });
    }

    return res.status(200).json({
      statusCode: true,
      message: '',
      success: true,
      data: {
        items: items.splice(offset, limit),
        pagination: {
          total: totalItem,
          page: Number(req.query.page),
          perPage: Number(req.query.perPage),
        },
      },
    });
  });

  server.all('*', (req, res) => {
    const parsedUrl = parse(req.url, true);

    return handle(req, res, parsedUrl);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
