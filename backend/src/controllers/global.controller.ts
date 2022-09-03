import { Request, Response } from 'express';

export const getAll = (example: any) => async (req: Request, res: Response) => {
  await example
    .find({}, (err: Error, data: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    })
    .clone()
    .catch((err: any) => {
      console.error(err);
    });
};
