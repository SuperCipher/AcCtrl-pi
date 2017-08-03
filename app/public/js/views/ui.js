$(document).ready(function(){
// connect to server
	var socket = io.connect();
	// listening to server
  socket.on('Identification', function (data) {
		// print what receive
    console.log(data);
		if (data == "IdentifySucess") {
			alert(data)
		}

    socket.emit('respond', "coppy");
  });

});
