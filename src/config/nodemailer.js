import nodemailer from 'nodemailer';
import config from './config.js';

const transport = nodemailer.createTransport({ 
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: config.nodeMailerUser,
        pass: config.nodeMailerPassword
    }
});

const sendMail = async (mailOptions) => {
    try {
        await transport.sendMail(mailOptions);
        console.log('Email enviado correctamente');
    } catch (error) {
        console.error(error);
    }
};

export const sendRecoveryMail = (email, recoveryLink) => {
    const mailOptions = {
        from: config.nodeMailerUser,
        to: email,
        subject: 'Link para reestablecer su contraseña',
        text: `Haga click en el siguiente enlace para reestablecer su contraseña: ${recoveryLink}`
    }

    sendMail(mailOptions);
}

export const sendDeleteMail = (email) => {
    const mailOptions = {
        from: config.nodeMailerUser,
        to: email,
        subject: 'Novedades respecto a su cuenta',
        text: `Sr. Usuario, su cuenta ha sido eliminada por inactividad`
    }

    sendMail(mailOptions);
}