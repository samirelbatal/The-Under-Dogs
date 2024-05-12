$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(2)").addClass("active");

  $(".navbar-nav .nav-item .nav-link").click(function () {
    $(".navbar-nav .nav-item").removeClass("active");

    $(this).closest(".nav-item").addClass("active");
  });
});

var subMenu1 = document.getElementById("subMenu1");
var subMenu2 = document.getElementById("subMenu2");

function toggleMenu() {
  // Check if subMenu2 is open, if yes, close it
  if (subMenu2.classList.contains("open-menu")) {
    subMenu2.classList.remove("open-menu");
  }
  // Toggle open-menu class for subMenu1
  subMenu1.classList.toggle("open-menu");
}

function toggleBell() {
  // Check if subMenu2 is open, if yes, close it
  if (subMenu1.classList.contains("open-menu")) {
    subMenu1.classList.remove("open-menu");
  }
  // Toggle open-menu class for subMenu1
  subMenu2.classList.toggle("open-menu");
}

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});


document.getElementById("pickup-form").addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Validate form fields
  var date = document.getElementById("pickup-date").value;
  var time = document.getElementById("pickup-time").value;
  var type = document.getElementById("pickup-type").value;
  var location = document.getElementById("pickup-location").value;

  if (date && time && type && location) {
      // All fields are filled, navigate to another page
      window.location.href = "../homePage.html"; // Replace "another-page.html" with your desired page URL
  } else {
      // If any field is missing, display an alert or handle the error accordingly
      alert("Please fill out all fields");
  }
});