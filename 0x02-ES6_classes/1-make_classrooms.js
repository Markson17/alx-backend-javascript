const ClassRoom = require('./0-classroom');

function initializeRooms() {
  const sizes = [19, 20, 34];
  const rooms = sizes.map((size) => new ClassRoom(size));
  return rooms;
}

const rooms = initializeRooms();
console.log(rooms);
