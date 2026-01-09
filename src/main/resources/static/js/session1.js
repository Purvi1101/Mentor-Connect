// Get the form element
var form = document.getElementById('meetingForm');

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Collect form data
    var formData = new FormData(form);

    // Send data to the backend using Fetch API
    fetch('createMeeting', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);  // Show the response from the server (success message)
        form.reset();  // Optionally reset the form after submission
    })
    .catch(error => {
        alert('Error: ' + error);  // Show an error message if something goes wrong
    });
});