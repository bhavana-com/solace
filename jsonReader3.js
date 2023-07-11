const fs = require("fs");
  

const users = require("./usersnew");
   

let user = {
    name: "Sap1",
    age: 25,
    language: ["Node", "react", "Graphql"]
};

let user1 = {
    name: "Sap2",
    age: 35,
    language: ["MSA", "Graphql"]
};

users.unshift(user);
users.push(user1);
   

fs.writeFile("usersnew.json", JSON.stringify(users), err => {
    
    if (err) throw err; 
   
    console.log("Done writing");
});