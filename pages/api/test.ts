import type { NextApiRequest, NextApiResponse } from 'next'
 
interface ResponseData {
  phone_number: string;
  message: string;
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const twloToken = process.env.TWLO_TOKEN;
    const twloSid = process.env.TWLO_SID;
    const twloNumber = process.env.TWLO_NUMBER;
    const data: ResponseData = req.body as ResponseData
    const messageBody = data.message
    const phoneNumber = data.phone_number

    // console.log(data)
    console.log(typeof(req.body))
    console.log(phoneNumber)

  //   if (twloToken && twloSid && twloNumber) {
  //     const client = require('twilio')(twloSid, twloToken);
  
  //     client.messages
  //     .create({
  //        body: `${messageBody}`,
  //        from: `${twloNumber}`,
  //        to: `${phoneNumber}`,
  //      })
  //   } else {
  //     console.log('Failed to parse request body or data')
  //     return
  //   }
  } catch(error) {
    console.log(`Error: ${error}`)
    return
  }
  console.log('Job complete!')
  return
}