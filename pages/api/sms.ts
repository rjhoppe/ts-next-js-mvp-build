import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const twloToken = process.env.TWLO_TOKEN;
    const twloSid = process.env.TWLO_SID;
    const twloNumber = process.env.TWLO_NUMBER;
    const phoneNumber = req.body['phone_number']
    const messageBody = req.body['message']

    if (twloToken && twloSid && twloNumber) {
      const client = require('twilio')(twloSid, twloToken);

      console.log(twloToken)
      console.log(twloSid)
      console.log(twloNumber)
      console.log(messageBody)
      console.log(phoneNumber)

      client.messages
      .create({
         body: `${messageBody}`,
         from: `${twloNumber}`,
         to: `${phoneNumber}`,
       })
    } else {
      console.log('Failed to parse request body or data')
      res.status(500).json({ message: 'Internal Server Error' })
      return
    }
  } catch(error) {
    console.log(`Error: ${error}`)
    res.status(404).json({ message: 'Response' })
    return
  }
  console.log('Job complete!')
  res.status(200).json({ message: 'Response' })
  return
}