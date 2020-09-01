// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@gmail.com",
//   location: "berlin",
//   blogs: ["why mac & cheese rules", "10 things to make with marmite"],
// }; //object literal inside will be different properties and its key value pair..above age for example is key and 30 is the pair

// console.log(user);
// console.log(user.name); //will print console
// user.name = 24;
// user.age = 35; //will now update to 35

// //square bracket notation

// const key = "location";
// console.log(user[key]);
// user["location"]; // the const key above has set the both of them equal to each other now
// console.log(user["name"]); //you will now see crystal in the browser..
// user[name] = "chun -li"; //will update it to chun-li

//square bracktet notation can be valuable when you are passing a variable through it
//
//now we want to add methods
// let user = {
//   name: "crystal",
//   age: 30,
//   email: "crystal@gmail.com",
//   location: "berlin",
//   blogs: [
//     { title: "Why mac and cheese rules", likes: 30 },
//     { title: "ten things to make with marmite", likes: 50 },
//   ],
//   login: function () {
//     console.log("the user logged in");
//   },
//   logout: function () {
//     console.log("user logged out");
//   },
//   logBlogs: function () {
//     console.log("this user has written the followig blogs");
//     this.blogs.forEach(function (blog) {
//       console.log(blog.title, blog.likes);
//     });
//   },
// }; //object literal inside will be different properties and its key value pair..above age for example is key and 30 is the pair

// user.logBlogs(); //you will see the following printed below this line
//this user has written the following blogs
//  why mac & cheese rules
//  10 things to make with marmite
/////////////////

// user.login(); // because you called this outside of the object you will now see it on the console because inside you did set it to do a consoleassert.lengthOf(
// user.logout();
//if we want to access blogs inside of logBlogs function we need to do the this key word
//if you go inside of log blogs function and type console.log('this); it will print out the entire user opbject when you call logBlogs outside of the object

// const blogs = [
//   { title: "Why mac and cheese rules", likes: 30 },
//   { title: "ten things to make with marmite", likes: 50 },
// ];

// let ting = blogs.map(function (num) {
//   console.log(num);
//   return num;
// });

let order = [{ apple: 8, orange: 10 }];
let wareHouses = [
  { name: "owd", inventory: { apple: 9, orange: 11 } },
  { name: "dm", inventory: { banana: 5, orange: 10, apple: 3 } },
];

wareHouses.forEach(() => {
  let hasApples = 1;
  let warehouseOne = wareHouses[1];
  // console.log(warehouseOne.inventory);
  // let apple = wareHouses[0].inventory.apple;
  // console.log(wareHouses[0].inventory.apple);
  // console.log(wareHouses[0].inventory.apple);
  // console.log(order[0].apple);
  if (wareHouses[0].inventory.apple - order[0].apple == 0) {
    hasApples = 0;
    console.log(hasApples);
  }
});
