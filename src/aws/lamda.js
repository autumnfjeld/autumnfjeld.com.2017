var aws = require('aws-sdk');
var ses = new aws.SES({
    region: 'us-west-2'
});


var sendEmail = function(emailDetails, context){
    if( !emailDetails.email) context.fail("Please provide at least an email address");
    console.log("sending email with following details: ", emailDetails)
    var messageParts = [];
    messageParts.push("Email Address: "+emailDetails.email)
    if (emailDetails.name) messageParts.push("Name: "+emailDetails.name);
    if (emailDetails.company) messageParts.push("Company: "+emailDetails.company);
    if (emailDetails.subject) messageParts.push("Subject: "+emailDetails.subject);
    if (emailDetails.message) messageParts.push("Message: \n"+emailDetails.message);
    var params = {
        Destination: { ToAddresses: [ 'Autumn <autumnfjeld@gmail.com>' ] },
        Message: {
            Body: { Text: { Data: messageParts.join("\r\n"), Charset: 'UTF-8' } },
            Subject: { Data: "You've got an electric message", Charset: 'UTF-8' }
        },
        Source: "Contact Form <autumnfjeld@gmail.com>",
        ReplyToAddresses: [ "autumnfjeld@gmail.com" ]
    };

    ses.sendEmail(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            context.fail(err);
        } else {
            console.log("Email send confirmed with following", data);
            context.succeed('Thanks for dropping us a line');
        }
    });
}

exports.handler = function(event, context) {
    console.log("Incoming: ", event);

    console.log("email address=",event.email)
    var emailDetails = {
        "name": event.name,
        "email": event.email,
        "company": event.company,
        "subject": event.subject,
        "message": event.message
    };
    sendEmail(emailDetails, context)
};


{
    "name": "Groovy Jane",
    "email": "jane@groovy.com",
    "company": "Groovin",
    "subject": "Its all good",
    "message": "Let's get a coffee and discuss design."
}