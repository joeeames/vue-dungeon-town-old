/*
services:
healing
food
drink
hotel
potions
armor/weapon repair
general equipment purchase
mount purchase
mount care
armor/weapon purchase
selling jewelry
selling magic items
selling monster parts
selling illegal items
training
research

*/

export default {
  calculateDemand(state) {
    let numRoomsNeeded = getRandomInt(5) + 5;
    console.log('rooms needed', numRoomsNeeded);
    return {
      neededRooms: numRoomsNeeded
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}