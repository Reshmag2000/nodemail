const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'reshmag.resh2000@gmail.com',
    pass: 'dtaq vsvz ljei ntcp',
  },
});

const mailOptions = {
  from: 'reshmag.resh2000@gmail.com',
  to: 'rg484386@gmail.com',
  subject: 'Hello Friend!',
  text: 'This email send using nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error.message);
  }
  console.log('Email sent:', info.response);
});
