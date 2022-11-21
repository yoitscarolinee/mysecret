// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose, { mongo } from 'mongoose';
import { config } from '../../config/config';
import Logging from '../../lib/Logging';

type Data = {
  secret: string
}

//connect mongo
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
  .then(() => { 
    Logging.info('Connected to mongoDB.') 
  })
  .catch((error) => { 
    Logging.error('Unable to connect: ')
    Logging.error(error) 
  })

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ secret: 'comi miojo escondido ontem' })
}
