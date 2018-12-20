db.createUser({
              "user": "parsedb",
              "pwd": "parsedb",
              "roles": [ { role: "dbOwner", db: "parsedb" } ]
              });


emailAdapter: {
module: "simple-parse-smtp-adapter",
options: {
fromAddress: 'your@sender.address',
user: 'email@email.com',
password: 'AwesomePassword',
host: 'your.smtp.host',
isSSL: true, //True or false if you are using ssl
port: 465, //SSL port or another port
name: 'your domain name', //  optional, used for identifying to the server
    //Somtimes the user email is not in the 'email' field, the email is search first in
    //email field, then in username field, if you have the user email in another field
    //You can specify here
emailField: 'username',
templates: {
    //This template is used only for reset password email
resetPassword: {
    //Path to your template
template: __dirname + '/views/email/reset-password',
    //Subject for this email
subject: 'Reset your password'
},
verifyEmail: {
template: __dirname + '/views/email/verify-email',
subject: 'Verify Email'
}
}
}
}
