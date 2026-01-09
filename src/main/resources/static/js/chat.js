var socket;

function initChat(role, senderId, receiverId) {
    // Initialize WebSocket connection to a WebSocket server
    socket = new WebSocket("ws://localhost:8080/your-app/chat"); // Update with actual WebSocket server URL

    var chatBox = document.getElementById("chatBox");
    var  messageInput = document.getElementById("messageInput");
    var sendButton = document.getElementById("sendButton");

    // Handle WebSocket connection open event
    socket.onopen = function() {
        console.log("WebSocket connection established.");
    };

    // Handle incoming messages
    socket.onmessage = function(event) {
        var messageElement = document.createElement("p");
        messageElement.textContent = "From: " + event.data; // Show the incoming message
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    };

    // Handle WebSocket errors
    socket.onerror = function(error) {
        console.error("WebSocket Error:", error);
    };

    // Handle WebSocket closure
    socket.onclose = function() {
        console.log("WebSocket connection closed.");
    };

    // Send message on button click
    sendButton.addEventListener("click", function() {
       var  message = messageInput.value.trim();
        if (message) {
           var  payload = senderId + ":" + receiverId + ":" + message;
            if (socket.readyState === WebSocket.OPEN) {
                socket.send(payload); // Send the message

                var  userMessage = document.createElement("p");
                userMessage.textContent = "You: " + message; // Display the user's message
                chatBox.appendChild(userMessage);

                messageInput.value = ""; // Clear input field
                chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
            } else {
                console.log("WebSocket is not open.");
            }
        }
    });

    // Cleanup: Close WebSocket connection when the page is unloaded
    window.addEventListener("beforeunload", function() {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.close();
        }
    });
}

// Example: Initialize chat for role "user" with senderId "123" and receiverId "456"
initChat("user", "123", "456");
