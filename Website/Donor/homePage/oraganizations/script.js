document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 2000);

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      name: "Organization 1",
      governorate: "Cairo",
      area: "Area 1",
      type: "Type 1",
    },
    {
      id: 2,
      name: "Organization 2",
      governorate: "Alexandria",
      area: "Area 2",
      type: "Type 2",
    },
    {
      id: 3,
      name: "Organization 3",
      governorate: "Giza",
      area: "Area 3",
      type: "Type 1",
    },
    {
      id: 4,
      name: "Organization 4",
      governorate: "Aswan",
      area: "Area 4",
      type: "Type 2",
    },
    {
      id: 5,
      name: "Organization 5",
      governorate: "Giza",
      area: "Area 1",
      type: "Type 1",
    },
    {
      id: 6,
      name: "Organization 6",
      governorate: "Alexandria",
      area: "Area 1",
      type: "Type 2",
    },
    {
      id: 7,
      name: "Organization 7",
      governorate: "Alexandria",
      area: "Area 2",
      type: "Type 1",
    },
    {
      id: 8,
      name: "Organization 8",
      governorate: "Alexandria",
      area: "Area 3",
      type: "Type 2",
    },
    {
      id: 9,
      name: "Organization 9",
      governorate: "Aswan",
      area: "Area 3",
      type: "Type 1",
    },
    {
      id: 10,
      name: "Organization 10",
      governorate: "Alexandria",
      area: "Area 4",
      type: "Type 2",
    },
    {
      id: 11,
      name: "Organization 11",
      governorate: "Aswan",
      area: "Area 3",
      type: "Type 2",
    },
    {
      id: 12,
      name: "Organization 12",
      governorate: "Cairo",
      area: "Area 2",
      type: "Type 3",
    },
    {
      id: 13,
      name: "Organization 13",
      governorate: "Alexandria",
      area: "Area 1",
      type: "Type 4",
    },
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
  populateDropdownOptions("area-dropdown", "area");
  populateDropdownOptions("governorate-dropdown", "governorate");
  populateDropdownOptions("type-dropdown", "type");

  // Function to filter cards based on selected options from dropdown menus
  function filterCardsByOptions(area, governorate, type) {
    const filteredCards = data.filter((card) => {
      return (
        (area === "" || card.area === area) &&
        (governorate === "" || card.governorate === governorate) &&
        (type === "" || card.type === type)
      );
    });
    renderCards(filteredCards);
  }

  // Function to create card HTML
  function createCardHTML(card) {
    return `
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">Type: ${card.type}</p>
            <p class="card-text">Area: ${card.area}</p>
            <p class="card-text">Governorate: ${card.governorate}</p>
            <!-- Add other card details here if needed -->
            <a href="organizationProfile.html" class="btn btn-primary btn-block">View Profile</a>
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
    const searchInput = document.getElementById("search-input");
    const selectedArea = document.getElementById("area-dropdown").value;
    const selectedGovernorate = document.getElementById(
      "governorate-dropdown"
    ).value;
    const selectedType = document.getElementById("type-dropdown").value;

    // If search term is empty, filter by selected options
    filterCardsByOptions(selectedArea, selectedGovernorate, selectedType);
  });

  // Event listener for search/filter button
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-input");
    const searchTerm = searchInput.value.trim();

    // If search term is not empty, filter by search term
    filterCards(searchTerm);
  });

  // Function to filter cards based on search input
  function filterCards(searchTerm) {
    const filteredCards = data.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderCards(filteredCards);
  }
});
