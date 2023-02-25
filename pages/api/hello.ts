// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import excuteQuery from '../../lib/db'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log("req nom", req.body)
    const result = await excuteQuery({
        query: 'INSERT INTO submissions(firstname,lastname,email) VALUES(?,?,?)',
        values: [req.body.firstname,req.body.lastname,req.body.email],
    });
    res.status(200).json({ message: 'Your submission has been received!' })
    console.log( "ttt",result );
  } catch ( error ) {
    res.status(500).json({ message: 'Could not save the submission, please try again.' })
    console.log( error );
  }
}
