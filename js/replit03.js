
const users = [
  {
    name: "Leanne Graham",
    age: 30,
    email: "Sincere@april.biz",
    country: "England",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  },
  {
    name: "Ervin Howell",
    age: 27,
    email: "Shanna@melissa.tv",
    country: "New Zealand",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  }
]


const getUsersData = (users, data) => {
    // const arr = [];
    // for (let i = 0; i < users.length; i++) {
    //     arr.push(users[i][data]);
    // }
    // return arr;

    return users.map(user => user[data]);
  }
  console.log(getUsersData(users, "name"));
  console.log(getUsersData(users, "age"));
  console.log(getUsersData(users, "country"));