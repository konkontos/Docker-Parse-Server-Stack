{

verifyUserEmails: true,

emailAdapter: {
    module: 'parse-server-mailgun',
        options: {
            fromAddress: "YourApp <noreply@yourapp.com>,
            domain: "example.com",
            host: "api.mailgun.net",
            apiKey: "key-mykey",
            templates: {
                passwordResetEmail: {
                    subject: 'Reset your password',
                    pathPlainText: resolve(__dirname, 'path/to/templates/password_reset_email.txt'),
                    pathHtml: resolve(__dirname, 'path/to/templates/password_reset_email.html'),
                    callback: (user) => { return { firstName: user.get('firstName') }}
                    // Now you can use {{firstName}} in your templates
                },
                verificationEmail: {
                    subject: 'Confirm your account',
                    pathPlainText: resolve(__dirname, 'path/to/templates/verification_email.txt'),
                    pathHtml: resolve(__dirname, 'path/to/templates/verification_email.html'),
                    callback: (user) => { return { firstName: user.get('firstName') }}
                    // Now you can use {{firstName}} in your templates
                },
                customEmailAlert: {
                    subject: 'Urgent notification!',
                    pathPlainText: resolve(__dirname, 'path/to/templates/custom_alert.txt'),
                    pathHtml: resolve(__dirname, 'path/to/templates/custom_alert.html'),
                }
            }
        }
    }

}
