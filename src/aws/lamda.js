/** This was a bitch to set up, mainly because there are two ways a lambda function can be wired to a API Gateway endpoint
 * and the documentation doesn't clearly spell this out.
 * 1) Creating the lamba function and via that UI interface choosing to set up a trigger that is an API Gateway, AWS then
 * automatically geneartes a LambdaMicroservice API, creates a resource with same name as the lambda func, eg. myLambaFunc,
 * makes a special 'ANY' method which is all methods that can hit the resource.  With this setup the lambda is set up as a proxy
 * which I think essntially means there is more 'passthrough' of things happening in the lambda func.  For instance CORS headers
 * must be set up in the lambda function with this API-lamba wire up.
 * 2) If you first create a custom API and then through that interface choose to hook it to a lambda function you can choose
 * to have the lamba as a proxy or not.  If it is like a proxy, then it is similar (or same?) setup as #1 above.  If it is
 * just 'integrated' then you set up CORS in the API POST, GET etc method.
 * These two wire-up scenarios make it very difficut to navigate the docs as this is not clearly spelled out!!!!
 */

var aws = require('aws-sdk');
var ses = new aws.SES({
    region: 'us-west-2'
});

//This setup is for non-proxy lambda: headers not included here, they are specified in the API endpoint method
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


var test = {
    "name": "Groovy Jane",
    "email": "jane@groovy.com",
    "company": "Groovin",
    "subject": "Its all good",
    "message": "Let's get a coffee and discuss design."
};