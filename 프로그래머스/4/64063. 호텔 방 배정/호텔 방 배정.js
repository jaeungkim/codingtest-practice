function solution(k, room_number) {
    let roomMap = new Map();

    const find = (room) => {
        if (!roomMap.has(room)) {
            roomMap.set(room, room + 1); // Assign next available room
            return room;
        }
        let nextRoom = find(roomMap.get(room)); // Find the next available room
        roomMap.set(room, nextRoom + 1); // Path compression
        return nextRoom;
    };

    return room_number.map(find);
}
