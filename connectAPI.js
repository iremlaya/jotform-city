var jf = require("jotform")
const fs = require('fs');
var logStream = fs.createWriteStream('test', { flags: 'a' });
var { cities } = require("./cities")

jf.options({
    debug: true,
    apiKey: "655aa6eddfaf0b05bb1bcd84f750dcf9",
    timeout: 5000
});
var links = []
cities.forEach(city => {
    jf.createForm(
        {
            "questions[0][type]": "control_head",
            "question[0][labelAlign]": "Auto",
            "questions[0][text]": city,
            "questions[0][order]": "0",
            "questions[0][name]": "Header",

            "questions[1][type]": "control_fullname",
            "questions[1][order]": "1",
            "questions[1][name]": "name",
            "questions[1][text]": "Name",
            "question[1][labelAlign]": "Auto",
            "question[1][required]": "Yes",
            "question[1][sublabels][first]": "First Name",
            "question[1][sublabels][last]": "Last Name",
            "question[1][builderLabel]": "Full Name",
            "question[1][order]": "2",


            "questions[2][type]": "control_email",
            "questions[2][text]": "Email",
            "questions[2][labelAlign]": "Auto",
            "questions[2][required]": "No",
            "questions[2][domainCheck]": "No",
            "questions[2][allowCustomDomains]": "No",
            "questions[2][verificationCode]": "No",
            "questions[2][size]": "30",
            "questions[2][validation]": "Email",
            "questions[2][subLabel]": "example@example.com",
            "questions[2][confirmationSublabel]": "Confirm Email",
            "questions[2][confirmation]": "No",
            "questions[2][confirmationHint]": "example@example.com",
            "questions[2][readonly]": "No",
            "questions[2][disallowFree]": "No",
            "questions[2][inlineEditDefaultValue]": "Email",
            "questions[2][builderLabel]": "Email",
            "questions[2][order]": "3",
            "questions[2][name]": "email",

            "questions[3][text]": "Phone Number",
            "questions[3][labelAlign]": "Auto",
            "questions[3][required]": "No",
            "questions[3][countryCode]": "No",
            "questions[3][inputMask]": "disable",
            "questions[3][inputMaskValue]": "(###) ### -####",
            "questions[3][validation]": "None",
            "questions[3][sublabels][country]": "Country Code",
            "questions[3][sublabels][area]": "Area Code",
            "questions[3][sublabels][phone]": "Phone Number",
            "questions[3][sublabels][full]": "Phone Number",
            "questions[3][readonly]": "No",
            "questions[3][inlineEditDefaultValue]": "Phone Number",
            "questions[3][type]": "control_phone",
            "questions[3][builderLabel]": "Phone",
            "questions[3][order]": "4",
            "questions[3][isPaymentStoreInBasicFields]": "false",
            "questions[3][name]": "phoneNumber",

            "questions[4][text]": "Note:",
            "questions[4][labelAlign]": "Auto",
            "questions[4][required]": "No",
            "questions[4][cols]": "40",
            "questions[4][rows]": "6",
            "questions[4][validation]": "None",
            "questions[4][entryLimitMin]": "None-0",
            "questions[4][entryLimit]": "None-0",
            "questions[4][readonly]": "No",
            "questions[4][wysiwyg]": "Disable",
            "questions[4][mde]": "No",
            "questions[4][inlineEditDefaultValue]": "Note: ",
            "questions[4][type]": "control_textarea",
            "questions[4][builderLabel]": "Long Text",
            "questions[4][order]": "5",
            "questions[4][isPaymentStoreInBasicFields]": "false",
            "questions[4][name]": "typeA",

            "questions[5][text]": "Submit",
            "questions[5][buttonAlign]": "Auto",
            "questions[5][continueLaterButtonText]": "Save",
            "questions[5][clear]": "No",
            "questions[5][encryptIcon]": "No",
            "questions[5][clearText]": "Clear Form",
            "questions[5][print]": "No",
            "questions[5][printText]": "Print Form",
            "questions[5][buttonStyle]": "None",
            "questions[5][inlineEditDefaultValue]": "Submit",
            "questions[5][type]": "control_button",
            "questions[5][builderLabel]": "Submit",
            "questions[5][order]": "6",
            "questions[5][isPaymentStoreInBasicFields]": "false",
            "questions[5][name]": "submit",

            "properties[title]": "Task5",
            "properties[height]": "600",

        })
        .then(function (r) {

            //links.push(r.url)

            logStream.write(r.url + "\n")

        })
        .fail(function (e) {
            console.log("error on form creattion")
            console.log(e)
        });
});

