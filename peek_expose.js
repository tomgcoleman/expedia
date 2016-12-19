if (socket) {
    console.log('peek expose : socket exists');

    window.peek_socket = socket;
} else {

    console.log('peek expose : socket does not exists');
}

function get_peek_socket() {
    return socket;
}

window.get_peek_socket = get_peek_socket;
