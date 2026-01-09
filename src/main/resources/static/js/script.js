document.getElementById("menteeForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("Name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        fieldOfInterest: document.getElementById("interest").value
    };

    try {
        const response = await fetch("http://localhost:8080/api/mentee/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = "student2.html";
        }

    } catch (error) {
        console.error(error);
    }
});
