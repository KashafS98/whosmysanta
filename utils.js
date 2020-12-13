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

  module.exports = shuffle