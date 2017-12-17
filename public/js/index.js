const socket = io()

socket.on('connect', () => {
    console.log('connected to server')

    socket.emit('createMessage', {
        from: 'Francesco',
        text: 'here we go again'
    })
})

socket.on('disconnect', () => {
    console.log('disconnect')
})

socket.on('newEmail', (email) => {
    console.log('new email', email)
})

socket.on('newMessage', newMessage => {
    console.log('newMessage', newMessage)
})