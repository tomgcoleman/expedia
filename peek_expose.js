// peek.tools.expedia.com has this object : socket
// using it, we can register for data updates.
// it is not created with the page, rather when the user connects, it is created.
// after created, register for data after  socket.acks.connected is true
// socket.on('userInteractionMatch', uim);
// where uim is a function to call.
// each time the connection is broken and remade, registration must be redone.
//
// extensions should create an element with class "extension_ids" and id of themselves
//

if (socket) {
    console.log('peek expose : socket exists');

    window.peek_socket = socket;
} else {

    console.log('peek expose : socket does not exists');
}

function callback_from_extension(data) {

}

function onUserInteractionMatch(data) {
    console.log('data received from expedia peek tool');
    for (var i = 0 ; i < extension_ids_to_notify.length ; i++) {
        var extension_id = extension_ids_to_notify[i];
        var data_for_extension = {
            peek_data: data
        };

        chrome.runtime.sendMessage(extension_id, data_for_extension, callback_from_extension);
    }
}

var registered_for_callback = false;
var extension_ids_to_notify = [];
function ping_for_changes() {
    if (!socket) return;
    if (socket.acks.connected && !registered_for_callback) {
        console.log('register for user interaction match callback');
        socket.on('userInteractionMatch', onUserInteractionMatch);
        registered_for_callback = true;
    }
    if (!socket.acks.connected && registered_for_callback) {
        console.log('un register for user interaction match callback');
        registered_for_callback = false;
    }
    var extension_ids_elements = document.getElementsByClassName('extension_ids');
    for (var i = 0 ; i < extension_ids_elements.length ; i++) {
        var id = extension_ids_elements[i].id;
        if (extension_ids_to_notify.indexOf(id) < 0) {
            console.log('adding new extension id: ' + id);
            extension_ids_to_notify.push(id);
        }
    }
}

setTimeout( ping_for_changes, 1000);

function get_peek_socket() {
    return socket;
}

window.get_peek_socket = get_peek_socket;

chrome.runtime.sendMessage(extension_id, data_for_extension, injectJson_callback_from_extension);
