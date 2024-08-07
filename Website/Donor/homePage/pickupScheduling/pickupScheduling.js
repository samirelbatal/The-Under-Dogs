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

document.getElementById("pickup-form").addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Validate form fields
  var date = document.getElementById("pickup-date").value;
  var time = document.getElementById("pickup-time").value;
  var type = document.getElementById("pickup-type").value;
  var location = document.getElementById("pickup-location").value;

  if (date && time && type && location) {
    // All fields are filled, show the popup
    document.getElementById("popup").style.display = "block";

    // Hide the popup after 3 seconds and navigate to another page
    setTimeout(function () {
      document.getElementById("popup").style.display = "none";
      window.location.href = "../homePage.html"; // Replace "another-page.html" with your desired page URL
    }, 3500); // 3000 milliseconds = 3 seconds

    // All fields are filled, navigate to another page
    // window.location.href = "../homePage.html"; // Replace "another-page.html" with your desired page URL
  } else {
    // If any field is missing, display an alert or handle the error accordingly
    alert("Please fill out all fields");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var cancelButtons = document.querySelectorAll(".btn1.donate-btn#return");

  // Loop through each "Cancel" button and add a click event listener
  cancelButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Navigate back to the previous page
      window.history.back();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var deleteProfileLink = document.querySelector(".delete-profile");

  if (deleteProfileLink) {
    deleteProfileLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Show a confirmation popup
      var confirmDelete = confirm("Are you sure you want to delete your profile?");
      if (confirmDelete) {
        window.location.href = "../../../../index.html"; // Replace "deleted-profile.html" with the actual URL of the page you want to redirect to
      }
    });
  }
});
