const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here

  // [1, 2, 3, 4]

  // reduce(function(p, c){
  //   return p[c]
  // }, {})

  // should return {1: , 2: , 3: , 4: }
  return emailFile.emails.reduce((p, c) => {
    if (!p[c.email]) {
      p[c.email] = 1;
    } else {
      p[c.email]++;
    }
    return p;
    // p[c] = (p[c] || 0) + 1;
    // return p[c];
  }, {});
}

console.log(countUniqueEmails(emailLog));
