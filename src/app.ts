import { Response, Request } from "express";
import indexHTML from '~/index.html';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.contentType("html");
  return res.send(indexHTML);
});

app.get('/test', (_req: Request, res: Response) => {
  const numbers = [];
  const numNumbers = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i< numNumbers; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
  }

  return res.json({
    numbers,
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
