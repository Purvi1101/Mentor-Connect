const params = new URLSearchParams(window.location.search);
const email = params.get("email");

fetch("http://localhost:8080/api/mentee/profile?email=" + email)
  .then(res => res.json())
  .then(user => {
    document.getElementById("name").innerText = user.name;
    document.getElementById("email").innerText = user.email;
    document.getElementById("mobile").innerText = user.mobile;
    document.getElementById("age").innerText = user.age;
    document.getElementById("gender").innerText = user.gender;
    document.getElementById("interest").innerText = user.fieldOfInterest;
  });
