document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    
    },
    {
      id: 2,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 1",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    {
      id: 3,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 4,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    
    {
      id: 5,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 1",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    {
      id: 6,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "B-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 7,
      nameofpatient:"Ahmed",
      category:"Blood",
      bloodtype: "A+",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    
    {
      id: 8,
      category:"Blood",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      nameofpatient:"Ahmed",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      id: 9,
      nameofpatient:"Ahmed",
      category:"Blood",
      bloodtype: "A-",
      hospitaladdress:"zayed",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 1",
      governorate: "Governorate 2"
    },
    {
      id: 10,
      category:"Blood",
      name: "Organization 1",
      hospital: "Hospital 2",
      area: "Area 2",
      governorate: "Governorate 1"
    },
    {
      "id": 11,
      "category": "Blood",
      "nameofpatient": "Ahmed",
      "bloodtype": "A-",
      "hospitaladdress": "zayed",
      "name": "Organization 1",
      "hospital": "Hospital 1",
      "area": "Area 1",
      "governorate": "Governorate 2"
    },
    {
      "id": 12,
      "category": "Blood",
      "nameofpatient": "Sarah",
      "bloodtype": "O+",
      "hospitaladdress": "example",
      "name": "Organization 2",
      "hospital": "Hospital 3",
      "area": "Area 3",
      "governorate": "Governorate 3"
    },
    {
      "id": 13,
      "category": "Blood",
      "nameofpatient": "John",
      "bloodtype": "AB-",
      "hospitaladdress": "example",
      "name": "Organization 3",
      "hospital": "Hospital 4",
      "area": "Area 4",
      "governorate": "Governorate 4"
    },
    {
      "id": 14,
      "category": "Blood",
      "nameofpatient": "Emily",
      "bloodtype": "B+",
      "hospitaladdress": "example",
      "name": "Organization 4",
      "hospital": "Hospital 5",
      "area": "Area 5",
      "governorate": "Governorate 5"
    },
    {
      "id": 15,
      "category": "Blood",
      "nameofpatient": "Michael",
      "bloodtype": "A+",
      "hospitaladdress": "example",
      "name": "Organization 5",
      "hospital": "Hospital 6",
      "area": "Area 6",
      "governorate": "Governorate 6"
    }
    
    // Add more organizations here if needed
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
  populateDropdownOptions("hospital-dropdown", "hospital");
  populateDropdownOptions("governorate-dropdown", "governorate");
  populateDropdownOptions("type-dropdown", "area");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(hospital, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (
        (hospital === "" || card.hospital === hospital) &&
        (governorate === "" || card.governorate === governorate) &&
        (type === "" || card.area === type)
      );
    });
    renderCards(filteredCards);
  }

  function createCardHTML(card) {
    return `
      <div class="col-lg-4 mb-4">
        <div class="card toy-donation-requests text-center" data-card-id="${card.id}" style="background-color: #e6edff;">
          <div class="card-header">
            <div class="dropdown dropleft">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-ellipsis-v"></i>
          </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item edit-post" id="edit"href="#">Edit Post</a> <!-- Added 'edit-post' class -->
                <a class="dropdown-item" id="delete" href="#">Delete Post</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <img src="../img/don/bloodDonation.jpg" class="card-img-top mx-auto mb-3" style="max-width: 90px; border: none; height: auto;" alt="Card Image">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Hospital: ${card.hospital}</p>
            <p class="card-text">Area: ${card.area}</p>           
            <p class="card-text">Governorate: ${card.governorate}</p>
            <p class="card-text">Status: Fulfilled by a Donor</p>
            <a href="../requestedItems/detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}" class="btn btn-primary btn-block">View Details</a>
        
          </div>
        </div>
      </div>
    `;
  }

  // Function to navigate to detailsItems.html with attributes attached
function navigateToDetails(card) {
  const url = `./detailsItems.html?id=${card.id}&category=${encodeURIComponent(card.category)}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}`;
  window.location.href = url;
}

// Add event listener to "Edit Post" links
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('edit-post')) {
    const card = event.target.closest('.card');
    if (card) {
      // Get card data from the card's data attributes
      const cardId = card.getAttribute('data-card-id');
      const selectedCard = data.find(card => card.id === parseInt(cardId));
      if (selectedCard) {
        navigateToDetails(selectedCard);
      }
    }
  }
});


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
    const selectedArea = document.getElementById("hospital-dropdown").value;
    const selectedGovernorate =
      document.getElementById("governorate-dropdown").value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });


    // Function to handle button click and redirect to details page
// Function to handle button click and redirect to details page
function handleButtonClick(card) {
  // Construct the URL with query parameters
  const url = `detailsItems.html?id=${card.id}&nameofpatient=${encodeURIComponent(card.nameofpatient)}&bloodtype=${encodeURIComponent(card.bloodtype)}&hospitaladdress=${encodeURIComponent(card.hospitaladdress)}&name=${encodeURIComponent(card.name)}&hospital=${encodeURIComponent(card.hospital)}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(card.governorate)}&category=${encodeURIComponent(card.category)}`;
  window.location.href = url; // Redirect to the details page
}

// Add event listener to each "View Details" button
document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', function() {
      const cardIndex = this.dataset.cardIndex; // Assuming you have a data attribute to identify the card index
      const selectedCard = data[cardIndex]; // Get the corresponding card object from the data array
      handleButtonClick(selectedCard); // Call the function to handle button click with the selected card
  });
});

});

document.addEventListener("DOMContentLoaded", function() {
  // Hide loader after 2 seconds
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});




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