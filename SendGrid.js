//  Prueba de usod e SendGRid via API

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

const dotenv = require("dotenv");

const result = dotenv.config();
 
const sgMail = require('@sendgrid/mail');

//import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//sgMail.setApiKey("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");
const msg = {
  to: 'sergio.rojas0@walmart.com',
  from: 'CESI360@walmart.com<CESI360@hotmail.com>',
  subject: 'CESI360 le recuerda..... ',
  text: 'CESI360 le recuerda que tiene tareas pendentes en e sistema',
  html: '<h2><strong>Tiene APROBACIONES pendientes en CESI360</strong></h2><P>Por favor ingrese al siguiente link para proceder&nbsp <a href=#>Haga click aqui</a></P>',
};
sgMail.send(msg).then(x=>{console.log("listo ", x)}).catch(e => console.log("E-STACK: ",e.stack));
