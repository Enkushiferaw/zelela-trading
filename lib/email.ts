import nodemailer from 'nodemailer';
export async function sendMail(d:{name:string;organization?:string;email:string;phone?:string;service:string;subject:string;message:string}){
 const t=nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||465),secure:String(process.env.SMTP_SECURE??'true')==='true',auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}});
 const to=process.env.MAIL_TO||'zelelatradingplc@gmail.com',from=process.env.MAIL_FROM||process.env.SMTP_USER;
 await t.sendMail({from,to,replyTo:d.email,subject:`New Zelela Website Inquiry — ${d.service}`,text:`NEW WEBSITE INQUIRY\n\nName: ${d.name}\nOrganization: ${d.organization||'Not provided'}\nEmail: ${d.email}\nPhone: ${d.phone||'Not provided'}\nService: ${d.service}\nSubject: ${d.subject}\n\nMESSAGE\n${d.message}`});
 await t.sendMail({from,to:d.email,subject:'Thank you for contacting Zelela Trading PLC',text:`Dear ${d.name},\n\nThank you for contacting Zelela Trading PLC. We have received your inquiry and a member of our team will review it and respond as soon as possible.\n\nZelela Trading PLC\nDessie, Ethiopia\n+251 910 333 692\nzelelatradingplc@gmail.com`});
}
