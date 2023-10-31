import * as dotenv from "dotenv";
import { SESv2 } from "@aws-sdk/client-sesv2"
dotenv.config();

// Configure AWS SES SDK
const sesv2 = new SESv2({
  region: process.env.AWS_SES_REGION
});

const sendForgotPasswordEmail = async (recipient, resetLink) => {
  const params = {
    Content: {
      Simple: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
            <html>
            <head></head>
            <body>
              <p>Hi there,</p>
              <p>Click the link below and follow the instructions to reset your password:</p>
              <a href="${resetLink}">Reset Password</a>
              <p>If you did not request this, you can ignore this email.</p>
            </body>
            </html>
          `,
          },
          Text: {
            Charset: "UTF-8",
            Data: `Hi there. Click the link and follow the instructions to reset your password: ${resetLink} \n If you did not request this, you can ignore this email.`
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: "Reset your nexxalytics password."
        }
      }
    },
    Destination: {
      ToAddresses: [recipient]
    },

    // TODO: change this to an @nexxalytics.com email address
    FromEmailAddress: "amazibizzy@gmail.com"
  };

  try {
    const response = await sesv2.sendEmail(params);
    console.log("Email sent successfully!", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Usage:
sendForgotPasswordEmail("secondkweb@gmail.com", "https://nexxalytics.com")