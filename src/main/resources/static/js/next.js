document.addEventListener("DOMContentLoaded", function () {
  var searchBar = document.querySelector(".search-bar");
  var searchButton = document.querySelector(".top-bar button");
  var mainContent = document.querySelector("main");

  // Function to display profiles based on the search term
  function showProfile(profile) {
    if (profile === "ai") {
      mainContent.innerHTML =
        '<section class="content">' +
        '<h2>Dr. Amita Jain</h2>' +
        '<p><strong>Expertise:</strong> Artificial Intelligence and Machine Learning</p>' +
        '<p><strong>Experience:</strong> 15+ years in AI research and mentorship</p>' +
        '<p><strong>Achievements:</strong> Published 50+ research papers, keynote speaker at international AI conferences.</p>' +
        '<p><strong>Contact:</strong> amita.jain@example.com</p>' +
        '</section>';
    } else if (profile === "programming languages") {
      mainContent.innerHTML =
        '<section class="content">' +
        '<h2>Dr. Piyush Chaudhary</h2>' +
        '<p><strong>Expertise:</strong> Programming Languages and Software Development</p>' +
        '<p><strong>Experience:</strong> 10+ years in software engineering and teaching and now HOD of Computer Science</p>' +
        '<p><strong>Achievements:</strong> Author of "Modern Programming Paradigms," contributed to open-source projects.</p>' +
        '<p><strong>Contact:</strong> piyush.chaudhary@example.com</p>' +
        '</section>';
    } else if (profile === "literature") {
      mainContent.innerHTML =
        '<section class="content">' +
        '<h2>Seema Sharma</h2>' +
        '<p><strong>Expertise:</strong> English Literature and Creative Writing</p>' +
        '<p><strong>Experience:</strong> 12+ years as a literature professor and writer</p>' +
        '<p><strong>Achievements:</strong> Published 3 novels, recipient of National Literary Award.</p>' +
        '<p><strong>Contact:</strong> seema.sharma@example.com</p>' +
        '</section>';
    } else {
      alert("No results found for your search.");
    }
  }

  // Event listener for the search bar
  searchButton.addEventListener("click", function () {
    var searchTerm = searchBar.value.trim().toLowerCase();
    if (searchTerm) {
      showProfile(searchTerm);
    } else {
      alert("Please enter a search term.");
    }
  });

  // Handle the Enter key in the search bar
  searchBar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      var searchTerm = searchBar.value.trim().toLowerCase();
      if (searchTerm) {
        showProfile(searchTerm);
      } else {
        alert("Please enter a search term.");
      }
    }
  });
});
