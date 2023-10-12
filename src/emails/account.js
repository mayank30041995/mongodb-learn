const sgMail = require('@sendgrid/mail')

const sendgridAPIKey =
  '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail
  .send({
    to: 'mayankece155@gmail.com',
    from: 'mayankdesigndemo@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.',
  })
  .then(() => {
    console.log('Message sent')
  })
  .catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
  })
