import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // all env values coming through in Vercel
    const twloToken = process.env.TWLO_TOKEN;
    const twloSid = process.env.TWLO_SID;
    const twloNumber = process.env.TWLO_NUMBER;
    const phoneNumber = req.body['phone_number']
    const messageBody = req.body['message']

    if (twloToken && twloSid && twloNumber) {
      const client = require('twilio')(twloSid, twloToken);

      // this needs to be await
      await client.messages
      .create({
         body: `${messageBody}`,
         from: `${twloNumber}`,
         to: `${phoneNumber}`,
       })
       .then((message: any) => console.log(message.sid))
       console.log('Job complete!')
       return res.status(200).json({ message: 'Success' });
    } else {
      console.log('Failed to parse request body or data')
      return res.status(500).json({ message: 'Internal Server Error' })
    }
  } catch(error) {
    console.log(`Error: ${error}`)
    return res.status(404).json({ message: 'Failed to send text' })
  };
};