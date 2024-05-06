
$(document).ready(function() {
    $('.navbar-nav .nav-item:nth-child(2)').addClass('active');
  
    $('.navbar-nav .nav-item .nav-link').click(function() {
      $('.navbar-nav .nav-item').removeClass('active');
  
      $(this).closest('.nav-item').addClass('active');
    });
  });


  
  var subMenu1 = document.getElementById('subMenu1');
  var subMenu2 = document.getElementById('subMenu2');
  
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