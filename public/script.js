const socket = io('/') //socket verbind met hoofdmap (root)

const newPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})

socket.emit('join-room', ROOM_ID, 10)

socket.on('new-user', userId => {
    console.log('Gebruiker verbonden > ' + userId)
})