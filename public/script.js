const socket = io('/') //socket verbind met hoofdmap (root)

const videoGrid = document.getElementById('video-grid')

const newPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})

const userVideo = document.createElement('video')
userVideo.muted = true

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
addVideoStream(userVideo, stream)
})

newPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

socket.on('new-user', userId => {
    console.log('Gebruiker verbonden > ' + userId)
})

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}