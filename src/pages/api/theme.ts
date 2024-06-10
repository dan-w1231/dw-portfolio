import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const theme = req.cookies.theme || 'light';
  res.status(200).json({ theme });
}