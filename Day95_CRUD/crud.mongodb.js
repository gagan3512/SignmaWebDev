use("CrudDB")

// //create collection
// db.createCollection("courses")

// //create data
// db.courses.insertOne({
//     name: "Sigma web dev course",
//     price: 0,
//     projects: 12,
//     assigment: 20
// })

// //insert many
// db.courses.insertMany([
//     {
//       "name": "Sigma web dev course",
//       "price": 100,
//       "projects": 8,
//       "assignment": 15
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 150,
//       "projects": 10,
//       "assignment": 18
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 200,
//       "projects": 12,
//       "assignment": 20
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 120,
//       "projects": 9,
//       "assignment": 16
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 180,
//       "projects": 11,
//       "assignment": 19
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 130,
//       "projects": 8,
//       "assignment": 17
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 160,
//       "projects": 10,
//       "assignment": 18
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 140,
//       "projects": 9,
//       "assignment": 16
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 170,
//       "projects": 11,
//       "assignment": 19
//     },
//     {
//       "name": "Sigma web dev course",
//       "price": 110,
//       "projects": 7,
//       "assignment": 14
//     }
// ])


// //Read
// let a = db.courses.find({price : 0});
// console.log(a);

// let b = db.courses.findOne({price : 0});
// console.log(b);

// console.log(a.count());
// console.log(a.toArray());

//update
// db.courses.updateOne({price: 0}, {$set:{price:100}})

// db.courses.updateMany({price: 0}, {$set:{price:500}})

//DELETE
db.courses.deleteOne({price: 100})

db.courses.deleteMany({price: 100})