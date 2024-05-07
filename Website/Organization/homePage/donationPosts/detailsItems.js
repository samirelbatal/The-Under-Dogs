// Function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Retrieve query parameters
const category = getQueryParam("category");
const id = getQueryParam("id");
const organization = getQueryParam("organization");
const age = getQueryParam("age");
const gender = getQueryParam("gender");
const season = getQueryParam("season");
const material = getQueryParam("material");
const typeofclothing = getQueryParam("typeofclothing");
const nameofpatient = getQueryParam("nameofpatient");
const bloodtype = getQueryParam("bloodtype");
const hospitaladdress = getQueryParam("hospitaladdress");
const governorate = getQueryParam("governorate");
const area = getQueryParam("area");
const hospital = getQueryParam("hospital");
const type = getQueryParam("type");
const name1 = getQueryParam("bookName");
const name2 = getQueryParam("name");
const use = getQueryParam("use");
const author = getQueryParam("author");
const language = getQueryParam("language");
const edition = getQueryParam("edition");
const summary = getQueryParam("summary");
const quantity = getQueryParam("quantity");
const stationaryName = getQueryParam("stationaryName");

if (category === "Clothes") {
  // Use the retrieved data to populate the page dynamically

  document.getElementById("label1-1").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Season:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Material:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Type of Clothing:";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";

 
  document.getElementById("field1").value = age;
  document.getElementById("field2").value = gender;
  document.getElementById("field3").value = season;
  document.getElementById("field4").value = material;
  document.getElementById("field5").value = typeofclothing;
} else if (category === "Blood") {
  document.getElementById("field1").value = nameofpatient;
  document.getElementById("field2").value = bloodtype;
  document.getElementById("field3").value = hospitaladdress;
  document.getElementById("field4").value = governorate;
  document.getElementById("field5").value = hospital;
  document.getElementById("field6").value = area;
  document.getElementById("field7").style.display = "none";

  document.getElementById("label1-1").querySelector("strong").innerText = "Patient Name:";

  document.getElementById("label1-2").querySelector("strong").innerText = "Blood Type:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Hospital Address:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Hospital Governorate:";
  document.getElementById("label1-5").querySelector("strong").innerText = "Hospital Name:";
  document.getElementById("label1-6").querySelector("strong").innerText = "Hospital Area:";
} else if (category === "Food") {
  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "foodType";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["Fruits & Vegetables", "Canned Foods", "Fresh Meals", "Baked Goods"];
  foodTypes.forEach((foodType) => {
    const option = document.createElement("option");
    option.value = foodType;
    option.textContent = foodType;
    foodTypeDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page
  const label1 = document.getElementById("label1-3");
  label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

  document.getElementById("field3").style.display = "none";
  document.getElementById("field1").value = name2;
  document.getElementById("field2").style.display = "none";
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
  document.getElementById("label1-3").style.display = "none";
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Food Type:";
} else if (category === "Toys") {
  const foodTypeDropdown = document.createElement("select");
  foodTypeDropdown.id = "food-type";
  foodTypeDropdown.className = "form-control";

  // Add options for food types
  const foodTypes = ["Doll", "Board Games", "Stuffed Toys", "Sports", "Cars", "Outdoor"];
  foodTypes.forEach((foodType) => {
    const option = document.createElement("option");
    option.value = foodType;
    option.textContent = foodType;
    foodTypeDropdown.appendChild(option);
  });

  // Add the dropdown menu to the page
  const label1 = document.getElementById("label1-2");
  label1.parentNode.insertBefore(foodTypeDropdown, label1.nextSibling);

  document.getElementById("field1").value = name2;
  document.getElementById("field2").style.display = "none";
  document.getElementById("field3").value = age;
  document.getElementById("field4").value = gender;
  document.getElementById("field5").style.display = "none";
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Game Category:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Age:";
  document.getElementById("label1-4").querySelector("strong").innerText = "Gender:";
  document.getElementById("label1-5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
} else if (category === "Medical Supplies") {
  document.getElementById("field4").style.display = "none";
  document.getElementById("field5").style.display = "none";
  document.getElementById("field6").style.display = "none";
  document.getElementById("field7").style.display = "none";
  document.getElementById("field1").value = name2;
  document.getElementById("field2").value = type;
  document.getElementById("field3").value = use;
  document.getElementById("label1-1").querySelector("strong").innerText = "Name:";
  document.getElementById("label1-2").querySelector("strong").innerText = "Type:";
  document.getElementById("label1-3").querySelector("strong").innerText = "Use:";
} else if (category === "School Supplies") {
  if (type === "Stationary") {
    document.getElementById("field1").value = stationaryName;
    document.getElementById("field2").value = quantity;
    document.getElementById("label1-1").querySelector("strong").innerText = "Stationary Name:";
    document.getElementById("label1-2").querySelector("strong").innerText = "Quantity needed:";

    document.getElementById("field3").style.display = "none";
    document.getElementById("field4").style.display = "none";
    document.getElementById("field5").style.display = "none";
    document.getElementById("field6").style.display = "none";
    document.getElementById("field7").style.display = "none";
  } else {
    document.getElementById("field6").style.display = "none";
    document.getElementById("field7").style.display = "none";
    document.getElementById("field1").value = name1;
    document.getElementById("field2").value = author;
    document.getElementById("field3").value = language;
    document.getElementById("field4").value = edition;
    document.getElementById("field5").value = summary;
    document.getElementById("label1-1").querySelector("strong").innerText = "Book Name:";
    document.getElementById("label1-2").querySelector("strong").innerText = "Book Author:";
    document.getElementById("label1-3").querySelector("strong").innerText = "Book Language:";
    document.getElementById("label1-4").querySelector("strong").innerText = "Book Edition:";
    document.getElementById("label1-5").querySelector("strong").innerText = "Book Summary:";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});

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
  const viewDetailsButtons = document.querySelectorAll(".view-details-btn");

  // Loop through each "View Details" button and add a click event listener
  viewDetailsButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action of the button

      // Get the URL of the page you want to navigate to
      const detailsPageUrl = "../delivery/delivery.html"; // Replace 'YOUR_DETAILS_PAGE_URL_HERE' with the actual URL

      // Navigate to the details page
      window.location.href = detailsPageUrl;
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const exitButtons = document.querySelectorAll(".donate-btn");

//   // Loop through each "Exit" button and add a click event listener
//   exitButtons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//       event.preventDefault(); // Prevent the default action of the button

//       // Navigate back to the previous page
//       window.history.back();
//     });
//   });
// });

// Get reference to the button
const updateButton = document.getElementById("updateButton");

// Add click event listener
updateButton.addEventListener("click", function () {
  const field1Value = document.getElementById("field1").value;
  const field2Value = document.getElementById("field2").value;
  const field3Value = document.getElementById("field3").value;
  const field4Value = document.getElementById("field4").value;
  const field5Value = document.getElementById("field5").value;
  const field6Value = document.getElementById("field6").value;
  const field7Value = document.getElementById("field7").value;

  // Get the URL of the previous page
  const previousPageUrl = document.referrer;

  // Extract the page name from the URL
  const previousPageName = previousPageUrl.substring(previousPageUrl.lastIndexOf("/") + 1);

  const baseUrl = "./";

  if (category === "Medical Supplies") {
    // Get the card details
    const card = {
      id: id,
      category: category,
      name: field1Value,
      type: field2Value,
      use: field3Value,
    };

    // Construct the URL with query parameters
    const url = `./medicalSupplies.html?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&type=${encodeURIComponent(
      card.type
    )}&use=${encodeURIComponent(card.use)}`;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Toys") {

    card = {
      id: id,
      category: category,
   //   type: type,
      name: field1Value,
      age: field3Value,
      gender: field4Value,
    };


    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(
      card.age
    )}&gender=${encodeURIComponent(card.gender)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "School Supplies") {
    let card = {};
    if (type === "Book") {
      // Get the card details
      card = {
        id: id,
        category: category,
        type: type,
        author: field2Value,
        edition: field4Value,
        language: field3Value,
        summary: field4Value,
        bookName: field1Value,
      };
    } else {
      // Get the card details
      card = {
        id: id,
        category: category,
        type: type,
        stationaryName: field1Value,
      };
    }

    // Construct the URL with query parameters
    const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&author=${encodeURIComponent(card.author)}&edition=${encodeURIComponent(
      card.edition
    )}&summary=${encodeURIComponent(card.summary)}&language=${encodeURIComponent(card.language)}&bookName=${encodeURIComponent(card.bookName)}&type=${encodeURIComponent(
      card.type
    )}&stationaryName=${encodeURIComponent(card.stationaryName)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Blood") {
    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Clothes") {

    card = {
      id: id,
      category: category,
   //   type: type,
      gender: field1Value,
      season: field2Value,
      material: field3Value,
      material: field4Value,
    };

       // Construct the URL with query parameters
       const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.material)}&season=${encodeURIComponent(card.material)}&season=${encodeURIComponent(card.seaon)}&age=${encodeURIComponent(
        card.age
      )}&gender=${encodeURIComponent(card.gender)}`;
    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  } else if (category === "Food") {

    card = {
      id: id,
      category: category,
   //   type: type,
      name: field1Value,
    };

       // Construct the URL with query parameters
       const queryString = `?id=${encodeURIComponent(card.id)}&category=${encodeURIComponent(card.category)}&name=${encodeURIComponent(card.name)}&age=${encodeURIComponent(
        card.age
      )}&gender=${encodeURIComponent(card.gender)}`;

    const url = baseUrl + previousPageName + queryString;

    // Navigate to the URL
    window.location.href = url;
  }
});
