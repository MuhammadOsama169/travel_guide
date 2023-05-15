import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // The user is authenticated, do something here

  res.status(200).json({ message: 'Hello, world!' });
}
