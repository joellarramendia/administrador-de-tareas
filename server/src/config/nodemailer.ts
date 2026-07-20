import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const config = () => {
    return {
        host: process.env.SMTP_HOST,
        port: +process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        // Fuerza a Node.js a preferir IPv4 sobre IPv6 para evitar el ENETUNREACH
        dnsLookup: (hostname, options, callback) => {
            require('dns').lookup(hostname, { family: 4 }, callback);
        }
    }
}

export const transporter = nodemailer.createTransport(config());