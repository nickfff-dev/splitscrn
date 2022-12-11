
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@lib/prisma';


export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {

  const fantasyname = req.query.fantasyname

  await prisma.participant.delete({
    where: {
      fantasyname:fantasyname as string
    }
  }).then(async () => {
    await prisma.$disconnect()
  })

  res.send("you have been removed from the league")


 }
