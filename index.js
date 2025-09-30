// 1
const { faker } = require('@faker-js/faker');
// 4
const mysql = require('mysql2');

// 5
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Admin@123'
});


// let query = 'SHOW TABLES'; // 10 can be written in a variable and is passed as an argument

// let q = 'INSERT INTO user (id, username, email, password) VALUES ?';
// // let user = ["123","Abhi","abhishubhraj@gmail.com","shubhuu"];
// // let q1 = 'SELECT * FROM user';

// let users = [
//     ["11067","Shoeb","shoebali@gmail.com","shoeb@786"],
//     ["13549","Adarsh","adarshraj@gmail.com","adarsh@123"]
// ];

// let q2 = 'UPDATE user SET id = 13238 WHERE id = 123';

// let selQue = 'SELECT * FROM user';
// // 6
// try {
//     connection.query(selQue, (err, result) => { 
//         if (err) throw err;
//         console.log(result);  // 8 here result is an array
//         console.log(result.length); // 9
//     });
// }catch(err){
//     console.log(err);
// }

// // 7 
// connection.end();

// 2
// let getRandomUser = () => {
//     return {
//         id: faker.string.uuid(),
//         username: faker.internet.username(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//     };
// }

//insert in bulk using faker  we will modify the grtRandomUser to give an array consits of [id, username, email, password];


//################# INSERT IN BULK ########################################
let query = 'INSERT INTO user (id, username, email, password) VALUES ?';
let getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let data = [];

for(let i = 1;i<=100 ;i++){
    data.push(getRandomUser);
}

try{
    connection.query(query, [data], (err, result) =>{
        if(err) throw err;
        console.log(result);
    });
}catch(err){
    console.log(err);
};

connection.end();

// // 3
// console.log(getRandomUser());