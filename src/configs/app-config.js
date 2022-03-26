/*server configurations*/

module.exports = {
    serverPort: process.env.PORT || 3000,
    dbHost: "localhost",
    dbName: "vehicle_manger",
    dbPort: "3306",
    dbUserName: "root",
    dbPw: "1234"
};

// module.exports = {
//     serverPort: process.env.PORT || 3000,
//     dbHost: "us-cdbr-east-05.cleardb.net",
//     dbName: "heroku_0ba0d62c9a6a1d4",
//     dbPort: "3306",
//     dbUserName: "b42d00b570915b",
//     dbPw: "85ca356d"
// };
