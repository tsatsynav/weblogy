const users = [
	{
	  username: 'David',
	  status: 'online',
	  lastActivity: 10
	},
	{
	  username: 'Lucy',
	  status: 'offline',
	  lastActivity: 22
	},
	{
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
];

const onlineUsers = users.filter((item) => {
  return item.status === "online";
});

const nameOfUsers =  



console.log(onlineUsers);

console.log(onlineUsers.username);

const name = "username";

console.log(onlineUsers['username']);

//console.log(`Сейчас в онлайн следующие пользователи:`, onlineUsers.username.join(', '));