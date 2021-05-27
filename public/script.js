const socket = io('/') //socket verbind met hoofdmap (root)
socket.emit('join-room', ROOM_ID, 10)

socket.on('new-user', userId => {
    console.log('Gebruiker verbonden > ' + userId)
})