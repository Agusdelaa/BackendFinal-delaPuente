
const config = {
    port: process.env.PORT ,
    dbUrl : process.env.DBURL,
    cookieSecret: process.env.COOKIESECRET ,
    jwtSecret: process.env.JWTSECRET,
    clientID: process.env.CLIENTID,
    clientSecret:process.env.CLIENTSECRET ,
    callbackURL: process.env.CALLBACKURL,
    bycrptSalt: process.env.BYCRPTSALT,
    nodeMailerUser: process.env.NODEMAILERUSER,
    nodeMailerPassword: process.env.NODEMAILERPASSWORD,
    adminUser: process.env.ADMINUSER,
    adminPass: process.env.ADMINPASS,
    reciveMail : process.env.RECIVEMAIL
}

export default config