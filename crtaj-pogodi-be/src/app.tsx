import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Error from './types/Error';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(require('./routes'));

app.use((req: Request, res:Response, next:NextFunction) => {
  let err:Error = {
    message: 'Not Found',
    status: 404,
  };
  next(err);
});

if (!isProduction) {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

const server = app.listen(port, () => {
  console.log(`Server started: Listening on port ${port}`);
});
