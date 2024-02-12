// import { Twilio } from "twilio";

// export function capitalize(str: string) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// export const sendSMS = (phoneNumber: string, messageBody: string ) => {
//   const twloToken = process.env.TWLO_TOKEN;
//   const twloSid = process.env.TWLO_SID;
//   const twloNumber = process.env.TWLO_NUMBER;

//   if (twloToken && twloSid && twloNumber) {
//     const client = require('twilio')(twloSid, twloToken);

//     client.messages
//     .create({
//        body: `${messageBody}`,
//        from: `${twloNumber}`,
//        to: `${phoneNumber}`,
//      })
//   }
// } 