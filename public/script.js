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
socket.on('new-user', userId => {
    connectToNewUser(userId, stream)
})
})

newPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id)
})

//Oude testcode
//socket.on('new-user', userId => {
 //   console.log('Gebruiker verbonden > ' + userId)
//})

function connectToNewUser(userId, stream) {
    const call = newPeer.call(userId, stream) //stuur stream naar peer
    const video = document.createElement('video')
    call.on('stream', userVideoStream => { //luisteren naar stream / stream van andere gebruiker ontvangen
        addVideoStream(video, userVideoStream)
    }) 
    call.on('close'), () => { //constroleert of gebruiker weggaat en verwijderd stream
        video.remove()
    }
}

function addVideoStream(video, stream) {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play()
    })
    videoGrid.append(video)
}