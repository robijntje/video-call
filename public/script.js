const socket = io('/') //socket verbind met hoofdmap (root)

const newPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})
newPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

socket.on('new-user', userId => {
    console.log('Gebruiker verbonden > ' + userId)
})