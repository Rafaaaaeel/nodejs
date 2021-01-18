var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rafaelo.oliveira2020@gmail.com',
    pass: '@Cachorro10'
  }
});

var mailOptions = {
  from: 'rafaelo.oliveira2020@gmail.com',
  to: 'leticianascimento123@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});