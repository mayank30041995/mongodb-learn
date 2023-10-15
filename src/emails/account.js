const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'mayankdesigndemo@gmail.com',
      subject: 'This is my first creation!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
    .then(() => {
      console.log('Message sent')
    })
    .catch((error) => {
      console.log(error.response.body)
    })
}

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: 'mayankdesigndemo@gmail.com',
      subject: 'Sorry to see you go!',
      text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    })
    .then(() => {
      console.log('Message cancelation done')
    })
    .catch((error) => {
      console.log(error.response.body)
    })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
}
