
const shuffle = (arr) => {
  let unShuffledFriends = [...arr]
  let shuffledFriends = [];
  let completelyShuffled = false;
  while(!completelyShuffled){
    if(shuffledFriends.length === arr.length) {
      completelyShuffled = true;
      break;
    }
    const index = getRandomNumberBetween(unShuffledFriends.length - 1);
    const availableNode = shuffledFriends.length
    if(availableNode !== index){
      shuffledFriends.push(unShuffledFriends[index])
      unShuffledFriends.splice(index, 1)
    }
  }
  return shuffledFriends;
}

const getRandomNumberBetween = (n) => {
  return (Math.floor(Math.random() * (n+1) + 1) - 1)
}

export default {
  // supported values are Object and Array
  'POST /api/v1/draw': (req, res) => {
    const {friends} = req.body;
    // do your custom logic here 
    const shuffledFriends = shuffle(friends);
    res.send(shuffledFriends);
  },


  // support for custom functions, APIs refer to express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};