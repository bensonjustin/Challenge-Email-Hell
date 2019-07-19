const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here

  return emailFile.emails.reduce((p, c) => {
    if (!p[c.email]) {
      p[c.email] = 1;
    } else {
      p[c.email]++;
    }
    return p;
  }, {});
}

console.log(countUniqueEmails(emailLog));
