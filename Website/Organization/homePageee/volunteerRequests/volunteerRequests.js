document.addEventListener("DOMContentLoaded", function () {
  // Function to hide loader after 2 seconds

  // Sample data for demonstration
  const data = [
    {
      id: 1,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Pediatrics",
      nameofpatient: "Ahmed",
      location: "Cairo",
      address: "123 Street, Cairo, Egypt",
      organization: "Charity Hospital",
      weight: 70,
      age: 7,
      gender: "Male",
      area: "Nasr City",
      governorate: "Cairo",
      caseDescription:
        "Ahmed has been experiencing persistent coughing and fever for the past week.",
    },
    {
      id: 2,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Cardiology",
      nameofpatient: "Fatima",
      location: "Alexandria",
      address: "456 Road, Alexandria, Egypt",
      organization: "Volunteer Clinic",
      weight: 65,
      age: 45,
      gender: "Female",
      area: "Miami",
      governorate: "Giza",
      caseDescription:
        "Fatima complains of chest pain and shortness of breath, suspecting a heart condition.",
    },
    {
      id: 3,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Dermatology",
      nameofpatient: "Hassan",
      location: "Giza",
      address: "789 Avenue, Giza, Egypt",
      organization: "Free Clinic",
      weight: 80,
      age: 30,
      gender: "Male",
      area: "Dokki",
      governorate: "Aswan",
      caseDescription:
        "Hassan has a persistent skin rash that needs examination and treatment.",
    },
    {
      id: 4,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Orthopedics",
      nameofpatient: "Layla",
      location: "Luxor",
      address: "10 Street, Luxor, Egypt",
      organization: "Cairo Clinic",
      weight: 60,
      age: 55,
      gender: "Female",
      area: "Karnak",
      governorate: "Luxor",
      caseDescription:
        "Layla has been experiencing severe joint pain in her knees, affecting her mobility.",
    },
    {
      id: 5,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Ophthalmology",
      nameofpatient: "Karim",
      location: "Aswan",
      address: "15 Lane, Aswan, Egypt",
      organization: "Vision Clinic",
      weight: 75,
      age: 40,
      gender: "Male",
      area: "Nubian Village",
      governorate: "Aswan",
      caseDescription:
        "Karim is suffering from blurred vision and needs an eye examination.",
    },
    {
      id: 6,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Gynecology",
      nameofpatient: "Nour",
      location: "Hurghada",
      address: "20 Boulevard, Hurghada, Egypt",
      organization: "Women's Health Center",
      weight: 55,
      age: 25,
      gender: "Female",
      area: "Sakkala",
      governorate: "Cairo",
      caseDescription:
        "Nour is seeking consultation regarding reproductive health and family planning.",
    },
    {
      id: 7,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Neurology",
      nameofpatient: "Tarek",
      location: "Sharm El Sheikh",
      address: "30 Road, Sharm El Sheikh, Egypt",
      organization: "Neurological Clinic",
      weight: 85,
      age: 60,
      gender: "Male",
      area: "Naama Bay",
      governorate: "Aswan",
      caseDescription:
        "Tarek has been experiencing frequent headaches and dizziness, requiring neurological assessment.",
    },
    {
      id: 8,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Psychiatry",
      nameofpatient: "Sara",
      location: "Marsa Alam",
      address: "40 Avenue, Marsa Alam, Egypt",
      organization: "Mental Clinic",
      weight: 70,
      age: 35,
      gender: "Female",
      area: "Port Ghalib",
      governorate: "Luxor",
      caseDescription:
        "Sara is seeking therapy for anxiety and depression, requiring psychiatric evaluation.",
    },
    {
      id: 9,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Urology",
      nameofpatient: "Khaled",
      location: "Suez",
      address: "50 Street, Suez, Egypt",
      organization: "Urological Clinic",
      weight: 75,
      age: 50,
      gender: "Male",
      area: "Port Tawfiq",
      governorate: "Suez",
      caseDescription:
        "Khaled is experiencing urinary problems and needs urological examination and treatment.",
    },
    {
      id: 10,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Endocrinology",
      nameofpatient: "Yasmine",
      location: "Fayoum",
      address: "60 Lane, Fayoum, Egypt",
      organization: "Metabolic Clinic",
      weight: 65,
      age: 30,
      gender: "Female",
      area: "Fayoum",
      governorate: "Fayoum",
      caseDescription:
        "Yasmine has been diagnosed with diabetes and needs endocrinological management.",
    },
    {
      id: 11,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Oncology",
      nameofpatient: "Aisha",
      location: "Giza",
      address: "789 Avenue, Giza, Egypt",
      organization: "Cancer Institute",
      weight: 55,
      age: 40,
      gender: "Female",
      area: "Dokki",
      governorate: "Giza",
      caseDescription:
        "Aisha has recently been diagnosed with breast cancer and needs oncological evaluation and treatment.",
    },
    {
      id: 12,
      category: "Pro Bono Doctor",
      medicalSpeciality: "Rheumatology",
      nameofpatient: "Mohamed",
      location: "Alexandria",
      address: "456 Road, Alexandria, Egypt",
      organization: "Arthritis Clinic",
      weight: 80,
      age: 60,
      gender: "Male",
      area: "Miami",
      governorate: "Cairo",
      caseDescription:
        "Mohamed suffers from severe joint stiffness and pain, suggestive of rheumatological conditions such as arthritis.",
    },
    {
      id: 13,
      category:"Pro Bono Teacher",
      subject: "English",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "123 Main Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=123+Main+Street+Governorate+1+Area+2",
    },
    {
      id: 14,
      category:"Pro Bono Teacher",
      subject: "Chemistry",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "456 Elm Street, Governorate 2, Area 1",
      googleMap: "https://www.google.com/maps?q=456+Elm+Street+Governorate+2+Area+1",
    },
    {
      id: 15,
      category:"Pro Bono Teacher",
      subject: "Math",
      area: "Area 2",
      governorate: "Governorate 3",
      noOfStudents: 5,
      address: "789 Oak Street, Governorate 3, Area 2",
      googleMap: "https://www.google.com/maps?q=789+Oak+Street+Governorate+3+Area+2",
    },
    {
      id: 16,
      subject: "English",
      area: "Area 3",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "321 Maple Street, Governorate 1, Area 3",
      googleMap: "https://www.google.com/maps?q=321+Maple+Street+Governorate+1+Area+3",
    },
    {
      id: 17,
      category:"Pro Bono Teacher",
      subject:"History",
      area: "Area 1",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "555 Pine Street, Governorate 1, Area 1",
      googleMap: "https://www.google.com/maps?q=555+Pine+Street+Governorate+1+Area+1",
    },
    {
      id: 18,
      category:"Pro Bono Teacher",
      subject:"History",
      area: "Area 2",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "777 Cedar Street, Governorate 2, Area 2",
      googleMap: "https://www.google.com/maps?q=777+Cedar+Street+Governorate+2+Area+2",
    },
    {
      id: 19,
      category:"Pro Bono Teacher",
      subject:"Physics",
      area: "Area 1",
      governorate: "Governorate 3",
      noOfStudents: 5,
      address: "999 Walnut Street, Governorate 3, Area 1",
      googleMap: "https://www.google.com/maps?q=999+Walnut+Street+Governorate+3+Area+1",
    },
    {
      id: 20,
      category:"Pro Bono Teacher",
      subject:"Arabic",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "444 Birch Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=444+Birch+Street+Governorate+1+Area+2",
    },
    {
      id: 21,
      category:"Pro Bono Teacher",
      subject:"Arabic",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "666 Pine Street, Governorate 2, Area 1",
      googleMap: "https://www.google.com/maps?q=666+Pine+Street+Governorate+2+Area+1",
    },
    {
      id: 22,
      category:"Pro Bono Teacher",
      subject:"Arabic",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "888 Elm Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=888+Elm+Street+Governorate+1+Area+2",
    },
    {
      id: 23,
      category:"Pro Bono Teacher",
      subject:"Arabic",
      area: "Area 1",
      governorate: "Governorate 2",
      noOfStudents: 5,
      address: "1010 Oak Street, Governorate 2, Area 1",
      googleMap: "https://www.google.com/maps?q=1010+Oak+Street+Governorate+2+Area+1",
    },
    {
      id: 24,
      category:"Pro Bono Teacher",
      subject:"Biology",
      area: "Area 2",
      governorate: "Governorate 1",
      noOfStudents: 5,
      address: "1212 Maple Street, Governorate 1, Area 2",
      googleMap: "https://www.google.com/maps?q=1212+Maple+Street+Governorate+1+Area+2",
    }

    // Add more organizations here if needed
  ];

    // Function to shuffle array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

  function createCardHTML(card) {
    let cardHTML = `
        <div class="col-lg-4 mb-4">
          <div class="card toy-donation-requests text-center"> <!-- Updated class to 'toy-donation-requests' and added 'text-center' class -->
            <div class="card-body">`;

    if (card.category === "Pro Bono Doctor") {
      cardHTML += `
          <img src="../img/don/doctor.jpeg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
          <h5 class="card-title">${card.organization}</h5>
          <p class="card-text">Requested by: ${card.organization}</p>
          <p class="card-text">Area: ${card.area}</p>           
          <p class="card-text">Governorate: ${card.governorate}</p>
          <a href="./volunteerRequestsDetails.html?id=${
            card.id
          }&category=${encodeURIComponent(
        card.category
      )}&area=${encodeURIComponent(
        card.area
      )}&caseDescription=${encodeURIComponent(
        card.caseDescription
      )}&governorate=${encodeURIComponent(
        card.governorate
      )}&address=${encodeURIComponent(
        card.address
      )}&gender=${encodeURIComponent(card.gender)}&age=${encodeURIComponent(
        card.age
      )}&nameofpatient=${encodeURIComponent(
        card.nameofpatient
      )}&weight=${encodeURIComponent(
        card.weight
      )}&organization=${encodeURIComponent(
        card.organization
      )}" class="btn btn-primary btn-block">View Details</a>
          `;
    } else {
      cardHTML += `
          <img src="../img/don/teacher.jpg" class="card-img-top mx-auto mb-3" style="max-width: 190px; border: none; height: auto;" alt="Card Image"> <!-- Adjusted styling and added 'mx-auto' and 'mb-3' classes for centering and spacing -->
          <h5 class="card-title">${card.subject}</h5>
          <p class="card-text">Subject: ${card.subject}</p>
          <p class="card-text">Area: ${card.area}</p>           
          <p class="card-text">Governorate: ${card.governorate}</p>
          <a href="./volunteerRequestsDetails.html?id=${
            card.id
          }&category=${encodeURIComponent(
        card.category
      )}&subject=${encodeURIComponent(
        card.subject
      )}&noOfStudents=${encodeURIComponent(
        card.noOfStudents
      )}&address=${encodeURIComponent(
        card.address
      )}&googleMap=${encodeURIComponent(
        card.googleMap
      )}&area=${encodeURIComponent(card.area)}&governorate=${encodeURIComponent(
        card.governorate
      )}" class="btn btn-primary btn-block">View Details</a>
          `;
    }

    cardHTML += `
            </div>
          </div>
        </div>`;

    return cardHTML;
  }

  // Shuffle the data array
  const shuffledData = shuffleArray(data);

  function renderRandomCards() {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing cards

    shuffledData.forEach((card) => {
      const cardHTML = createCardHTML(card);
      container.innerHTML += cardHTML;
    });
  }

  // Initial rendering of randomly shuffled cards
  renderRandomCards();


  document.getElementById("pageSelect").addEventListener("change", function () {
    var selectedPage = this.value;
    if (selectedPage) {
      window.location.href = selectedPage;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});


$(document).ready(function() {
  $('.navbar-nav .nav-item:nth-child(4)').addClass('active');

  $('.navbar-nav .nav-item .nav-link').click(function() {
    $('.navbar-nav .nav-item').removeClass('active');

    $(this).closest('.nav-item').addClass('active');
  });
});