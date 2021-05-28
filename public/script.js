const socket = io('/') //socket verbind met hoofdmap (root)

const videoGrid = document.getElementById('video-grid')

const newPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})

const userVideo = document.createElement('video')
userVideo.muted = true

newPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

socket.on('new-user', userId => {
    console.log('Gebruiker verbonden > ' + userId)
})