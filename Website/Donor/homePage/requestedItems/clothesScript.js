document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  const data = [
    // Existing data
    {
      id: 1,
      organization: "Resala Charity",
      category: "Clothes",
      age: "18 Years",
      gender: "Male",
      season: "Summer",
      material: "Cotton",
      typeofclothing: "T-shirt",
      quantity: "50",
    },
    {
      id: 2,
      organization: "Resala Charity",
      category: "Clothes",
      age: "18 Years",
      gender: "Male",
      season: "Summer",
      material: "Cotton",
      typeofclothing: "Short",
    },
    {
      id: 3,
      category: "Clothes",
      organization: "AL-Omran",
      age: "18 Years",
      gender: "Female",
      season: "Spring",
      material: "Cotton",
      typeofclothing: "Leggings",
      quantity: "100",
    },
    {
      id: 4,
      category: "Clothes",
      organization: "Misr El-Kheir",
      age: "5 Years",
      gender: "Female",
      season: "Autumn",
      material: "Cotton",
      typeofclothing: "Skirt",
      quantity: "80",
    },
    {
      id: 5,
      category: "Clothes",
      organization: "AL-Omran",
      age: "18 Years",
      gender: "Male",
      season: "Spring",
      material: "Linen",
      typeofclothing: "Pants",
      quantity: "90",
    },
    {
      id: 6,
      category: "Clothes",
      organization: "Resala",
      age: "10 Years",
      gender: "Male",
      season: "Summer",
      material: "Jeans",
      typeofclothing: "Trousers",
      quantity: "40",
    },
    {
      id: 7,
      category: "Clothes",
      organization: "Misr El-Kheir",
      age: "15 Years",
      gender: "Male",
      season: "Summer",
      material: "Cotton",
      typeofclothing: "Polo-Shirt",
      quantity: "150",
    },
    {
      id: 8,
      category: "Clothes",
      organization: "Resla",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
      material: "Leather",
      typeofclothing: "Black Shoes",
      quantity: "90",
    },
    {
      id: 9,
      category: "Clothes",
      organization: "Red Crescent",
      age: "10 Years",
      gender: "Male",
      season: "Winter",
      material: "Cotton",
      typeofclothing: "Long Sleeve Shirt",
      quantity: "50",
    },
    {
      id: 10,
      category: "Clothes",
      organization: "Red Crescent",
      age: "5 Years",
      gender: "Female",
      season: "Winter",
      material: "Cotton",
      typeofclothing: "Jacket",
      quantity: "120",
    },
    {
      id: 11,
      category: "Clothes",
      organization: "Red Crescent",
      age: "10 Years",
      gender: "Male",
      season: "Spring",
      material: "Cotton",
      typeofclothing: "Pants",
      quantity: "130",
    },
    {
      id: 12,
      category: "Clothes",
      organization: "Misr El-Kheir",
      age: "15 Years",
      gender: "Male",
      season: "Winter",
      material: "Cotton",
      typeofclothing: "Ice Cap",
      quantity: "110",
    },
    // Additional data
    {
      id: 13,
      category: "Clothes",
      organization: "Hand in Hand",
      age: "8 Years",
      gender: "Female",
      season: "Summer",
      material: "Silk",
      typeofclothing: "Dress",
      quantity: "60",
    },
    {
      id: 14,
      category: "Clothes",
      organization: "Helping Hands",
      age: "12 Years",
      gender: "Unisex",
      season: "Winter",
      material: "Wool",
      typeofclothing: "Sweater",
      quantity: "30",
    },
    {
      id: 15,
      category: "Clothes",
      organization: "Charity Aid",
      age: "8 Years",
      gender: "Female",
      season: "Spring",
      material: "Cotton",
      typeofclothing: "Cardigan",
      quantity: "40",
    },
    {
      id: 16,
      category: "Clothes",
      organization: "Helping Hearts",
      age: "15 Years",
      gender: "Unisex",
      season: "Autumn",
      material: "Polyester",
      typeofclothing: "Jacket",
      quantity: "70",
    },
    {
      id: 17,
      category: "Clothes",
      organization: "Hope Foundation",
      age: "10 Years",
      gender: "Female",
      season: "Winter",
      material: "Fleece",
      typeofclothing: "Hoodie",
      quantity: "90",
    },
    {
      id: 18,
      category: "Clothes",
      organization: "Youth Empowerment",
      age: "16 Years",
      gender: "Unisex",
      season: "Summer",
      material: "Cotton",
      typeofclothing: "Tank Top",
      quantity: "100",
    },
    {
      id: 19,
      category: "Clothes",
      organization: "Care for All",
      age: "3 Years",
      gender: "Female",
      season: "Spring",
      material: "Linen",
      typeofclothing: "Blouse",
      quantity: "50",
    },
    {
      id: 20,
      category: "Clothes",
      organization: "Bright Futures",
      age: "8 Years",
      gender: "Unisex",
      season: "Winter",
      material: "Wool",
      typeofclothing: "Beanie",
      quantity: "80",
    },
    {
      id: 21,
      category: "Clothes",
      organization: "Aid for Kids",
      age: "3 Years",
      gender: "Female",
      season: "Autumn",
      material: "Denim",
      typeofclothing: "Jacket",
      quantity: "40",
    },
    {
      id: 22,
      category: "Clothes",
      organization: "Care and Share",
      age: "10 Years",
      gender: "Unisex",
      season: "Spring",
      material: "Cotton",
      typeofclothing: "Shorts",
      quantity: "60",
    },
    {
      id: 23,
      category: "Clothes",
      organization: "Happy Hearts",
      age: "10 Years",
      gender: "Female",
      season: "Summer",
      material: "Rayon",
      typeofclothing: "Skirt",
      quantity: "100",
    },
    {
      id: 24,
      category: "Clothes",
      organization: "Generous Hands",
      age: "15 Years",
      gender: "Unisex",
      season: "Winter",
      material: "Leather",
      typeofclothing: "Gloves",
      quantity: "50",
    },
    {
      id: 25,
      category: "Clothes",
      organization: "Hope and Care",
      age: "8 Years",
      gender: "Female",
      season: "Spring",
      material: "Polyester",
      typeofclothing: "Raincoat",
      quantity: "70",
    },
  ];

  // Function to populate dropdown options
  function populateDropdownOptions(dropdownId, propertyName) {
    const dropdown = document.getElementById(dropdownId);
    const options = [...new Set(data.map((item) => item[propertyName]))]; // Get unique values
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.textContent = option;
      optionElement.value = option;
      dropdown.appendChild(optionElement);
    });
  }

  // Populate dropdown options
  populateDropdownOptions("age-dropdown", "age");
  populateDropdownOptions("gender-dropdown", "gender");
  populateDropdownOptions("season-dropdown", "season");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(age, gender, season) {
    const filteredCards = data.filter((card) => {
      return (age === "" || card.age === age) && (gender === "" || card.gender === gender) && (season === "" || card.season === season);
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card, id) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center">
          <div class="card-body">
            <img src="../img/don/clothing.png" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">${card.typeofclothing}</h5>
            <p class="card-text">Type: ${card.season}</p>
            <p class="card-text">Age: ${card.age}</p>
            <p class="card-text">Gender: ${card.gender}</p>
            <a href="./detailsItems.html?id=${
              card.id
            }&category=${encodeURIComponent(card.category)}&organization=${encodeURIComponent(card.organization)}&quantity=${encodeURIComponent(card.quantity)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(card.gender)}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}" class="btn btn--primary btn-block">View Details</a>
          </div>
        </div>
      </div>
    `;
  }

  // Function to render cards
  function renderCards(cards) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    cards.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });
  }

  // Initial rendering of all cards
  renderCards(data);

  // Event listener for search/filter button
  const filterButton = document.getElementById("filter-button");
  filterButton.addEventListener("click", () => {
    const selectedArea = document.getElementById("age-dropdown").value;
    const selectedGovernorate = document.getElementById("gender-dropdown").value;
    const selectedType = document.getElementById("season-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Function to handle button click and redirect to details page
  function handleButtonClick(card) {
    // Construct the URL with query parameters
    const url = `detailsItems.html?id=${card.id}&organization=${encodeURIComponent(card.organization)}&age=${encodeURIComponent(card.age)}&gender=${encodeURIComponent(
      card.gender
    )}&season=${encodeURIComponent(card.season)}&material=${encodeURIComponent(card.material)}&typeofclothing=${encodeURIComponent(card.typeofclothing)}`;
    window.location.href = url; // Redirect to the details page
  }

  // Add event listener to each "View Details" button
  document.querySelectorAll(".btn-primary").forEach((button) => {
    button.addEventListener("click", function () {
      const cardIndex = this.dataset.cardIndex; // Assuming you have a data attribute to identify the card index
      const selectedCard = data[cardIndex]; // Get the corresponding card object from the data array
      handleButtonClick(selectedCard); // Call the function to handle button click with the selected card
    });
  });
});

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
