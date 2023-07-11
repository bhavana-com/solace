const fs = require("fs");

fs.readFile("employee.json", function(err, data){
	if (err) throw err;
	const users =JSON.parse(data);
	console.log(users);
});

const users1 = require("./employee.json");

let user = {
    fname: "Sai",
	lname: "Kumar",
    age: 25,
    employee_Id: "365784" 
};

let user1 = {
    fname: "manoj",
	lname: "Kumar",
    age: 30,
    employee_Id: "365784"
};

users1.push(user);
users1.push(user1);
   

fs.writeFile("employee.json", JSON.stringify(users1), err => {
    
    if (err) throw err; 
   
    console.log("Done writing");
});
