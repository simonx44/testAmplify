var aws = require("aws-sdk");
var ses = new AWS.SES({apiVersion: '2010-12-01'});
const { MAIL, TABLE_NAME} = process.env;


// Funktion kann nur genutzt werden, wenn registrierte Mail für AWS SES aktiviert wird
// Angelegte Mails befinden sich inital in einem Sandbox-Modus

exports.handler = async (event) => {
  console.log("testsststst");
  //console.log(event.Records[0].Sns);


  var params = {
    Destination: {
      ToAddresses: [MAIL],
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },

      Subject: { Data: "Test Email" },
    },
    Source: MAIL,
  };
 
return await ses.sendEmail(params).promise()


};

const { MAIL, TABLE_NAME} = process.env;


exports.handler = async (event) => {

    console.log("222qwsa")
  console.log("testsststst");
  //console.log(event.Records[0].Sns);

console.log("MAIL")
console.log(MAIL)


  var params = {
    Destination: {
      ToAddresses: [MAIL],
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },

      Subject: { Data: "Test Email" },
    },
    Source: MAIL,
  };
 
return await ses.sendEmail(params).promise()


};
