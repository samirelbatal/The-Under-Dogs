// Function to get URL query parameters

const data = [
  {
    id: 1,
    name: "John Smith",
    gender: "Male",
    governorate: "Cairo",
    area: "Garden City",
    usertype: "Regular Donor",
    address: "3, Near IT Park, GT Road, Lahore 440000",
    telephone: "+20 300599959",
    email: "john.smith@example.com",
  },
  {
    id: 2,
    name: "Alice Johnson",
    gender: "Female",
    governorate: "Alexandria",
    area: "Raml Station",
    usertype: "Regular Donor",
    address: "5th Floor, Building 15, El-Nozha St, Roushdy, Alexandria",
    telephone: "+20 3123456783",
    email: "alice.johnson@example.com",
  },
  {
    id: 3,
    name: "Mohamed Hassan",
    gender: "Male",
    governorate: "Giza",
    area: "Mohandessin",
    usertype: "Regular Donor",
    address: "2 El Hegaz St., Mohandessin, Giza",
    telephone: "+20 298765432",
    email: "mohamed.hassan@example.com",
  },
  {
    id: 4,
    name: "Sarah Ahmed",
    gender: "Female",
    governorate: "Giza",
    area: "Dokki",
    usertype: "Teacher",
    address: "16 Ismail Mohamed St., Dokki, Giza",
    telephone: "+20 211223344",
    email: "sarah.ahmed@example.com",
  },
  {
    id: 5,
    name: "Ahmed Ali",
    gender: "Male",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Doctor",
    address: "32 Abdel Moneim Riyad Square, Mohandessin, Giza",
    telephone: "+20 255556666",
    email: "ahmed.ali@example.com",
  },
  {
    id: 6,
    name: "Fatima Mohamed",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Teacher",
    address: "27 Ahmed Heshmat St., Zamalek, Cairo",
    telephone: "+20 277778888",
    email: "fatima.mohamed@example.com",
  },
  {
    id: 7,
    name: "Khaled Mansour",
    gender: "Male",
    governorate: "Giza",
    area: "Orman",
    usertype: "Teacher",
    address: "20 El-Khalifa El-Maamoun St., Giza",
    telephone: "+20 299990000",
    email: "khaled.mansour@example.com",
  },
  {
    id: 8,
    name: "Laila Ibrahim",
    gender: "Female",
    governorate: "Cairo",
    area: "Heliopolis",
    usertype: "Doctor",
    address: "Building #6, Block #17, Nasr City, Cairo",
    telephone: "+20 211112222",
    email: "laila.ibrahim@example.com",
  },
  {
    id: 9,
    name: "Youssef Adel",
    gender: "Male",
    governorate: "Giza",
    area: "Sheikh Zayed",
    usertype: "Doctor",
    address: "Building 1, 4th floor, Sodic East, Sheikh Zayed, Giza",
    telephone: "+20 233334444",
    email: "youssef.adel@example.com",
  },
  {
    id: 10,
    name: "Nadia Fathy",
    gender: "Female",
    governorate: "Alexandria",
    area: "Smouha",
    usertype: "Teacher",
    address: "11 El Nasr St., Cleopatra, Alexandria",
    telephone: "+20 377776666",
    email: "nadia.fathy@example.com",
  },
  {
    id: 11,
    name: "Amr Mahmoud",
    gender: "Male",
    governorate: "Alexandria",
    area: "Roushdy",
    usertype: "Teacher",
    address: "15 Ahmed Shawky St., Roushdy, Alexandria",
    telephone: "+20 399998888",
    email: "amr.mahmoud@example.com",
  },
  {
    id: 12,
    name: "Mariam Samir",
    gender: "Female",
    governorate: "Giza",
    area: "Zamalek",
    usertype: "Regular Donor",
    address: "23 Abu El Feda St., Zamalek, Cairo",
    telephone: "+20 288887777",
    email: "mariam.samir@example.com",
  },
  {
    id: 13,
    name: "Hassan Ibrahim",
    gender: "Male",
    governorate: "Cairo",
    area: "Maadi",
    usertype: "Regular Donor",
    address: "10th Street, Maadi, Cairo",
    telephone: "+20 277776655",
    email: "hassan.ibrahim@example.com",
  },
  {
    id: 14,
    name: "Aya Amer",
    gender: "Female",
    governorate: "Alexandria",
    area: "Stanley",
    usertype: "Teacher",
    address: "20 El Mansour St., Stanley, Alexandria",
    telephone: "+20 344455577",
    email: "aya.amer@example.com",
  },
  {
    id: 15,
    name: "Khaled Hassan",
    gender: "Male",
    governorate: "Giza",
    area: "6th of October City",
    usertype: "Doctor",
    address: "15th Street, 6th of October City, Giza",
    telephone: "+20 211114477",
    email: "khaled.hassan@example.com",
  },
  {
    id: 16,
    name: "Sara Mahmoud",
    gender: "Female",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Regular Donor",
    address: "14 Salah El-Din St., Zamalek, Cairo",
    telephone: "+20 277773322",
    email: "sara.mahmoud@example.com",
  },
  {
    id: 17,
    name: "Ahmed Ibrahim",
    gender: "Male",
    governorate: "Giza",
    area: "Imbaba",
    usertype: "Regular Donor",
    address: "30 Ahmed Orabi St., Imbaba, Giza",
    telephone: "+20 288882255",
    email: "ahmed.ibrahim@example.com",
  },
  {
    id: 18,
    name: "Yasmine Ali",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Teacher",
    address: "25 Ahmed Fathi St., Nasr City, Cairo",
    telephone: "+20 255553322",
    email: "yasmine.ali@example.com",
  },
  {
    id: 19,
    name: "Omar Mohamed",
    gender: "Male",
    governorate: "Giza",
    area: "Faisal",
    usertype: "Doctor",
    address: "12 Salah Salem St., Faisal, Giza",
    telephone: "+20 299988877",
    email: "omar.mohamed@example.com",
  },
  {
    id: 20,
    name: "Fatma Hassan",
    gender: "Female",
    governorate: "Alexandria",
    area: "Borg El Arab",
    usertype: "Regular Donor",
    address: "5 El Gish Road, Borg El Arab, Alexandria",
    telephone: "+20 366667788",
    email: "fatma.hassan@example.com",
  },
  {
    id: 21,
    name: "Mohamed Ali",
    gender: "Male",
    governorate: "Cairo",
    area: "Mohandessin",
    usertype: "Teacher",
    address: "8 Salah Salem St., Mohandessin, Cairo",
    telephone: "+20 277771122",
    email: "mohamed.ali@example.com",
  },
  {
    id: 22,
    name: "Nour Ahmed",
    gender: "Male",
    governorate: "Giza",
    area: "Agouza",
    usertype: "Doctor",
    address: "3 Ramses St., Agouza, Giza",
    telephone: "+20 211119988",
    email: "nour.ahmed@example.com",
  },
  {
    id: 23,
    name: "Samiya Adel",
    gender: "Female",
    governorate: "Alexandria",
    area: "Miami",
    usertype: "Regular Donor",
    address: "22 El Horreya Road, Miami, Alexandria",
    telephone: "+20 377779988",
    email: "samiya.adel@example.com",
  },
  {
    id: 24,
    name: "Amr Ibrahim",
    gender: "Male",
    governorate: "Cairo",
    area: "Maadi",
    usertype: "Teacher",
    address: "15 Tahrir St., Maadi, Cairo",
    telephone: "+20 277774433",
    email: "amr.ibrahim@example.com",
  },
  {
    id: 25,
    name: "Dina Mahmoud",
    gender: "Female",
    governorate: "Giza",
    area: "Mohandessin",
    usertype: "Doctor",
    address: "18 Al Ahram St., Mohandessin, Giza",
    telephone: "+20 299993322",
    email: "dina.mahmoud@example.com",
  },
  {
    id: 26,
    name: "Khaled Samir",
    gender: "Male",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Regular Donor",
    address: "7 Al Nady St., Nasr City, Cairo",
    telephone: "+20 255559988",
    email: "khaled.samir@example.com",
  },
  {
    id: 27,
    name: "Nada Hassan",
    gender: "Male",
    governorate: "Alexandria",
    area: "Stanley",
    usertype: "Teacher",
    address: "10 El Geish Road, Stanley, Alexandria",
    telephone: "+20 344456677",
    email: "nada.hassan@example.com",
  },
  {
    id: 28,
    name: "Youssef Ali",
    gender: "Male",
    governorate: "Giza",
    area: "Dokki",
    usertype: "Doctor",
    address: "5 El Batal Ahmed Abdel Aziz St., Dokki, Giza",
    telephone: "+20 277772211",
    email: "youssef.ali@example.com",
  },
  {
    id: 29,
    name: "Hana Mahmoud",
    gender: "Female",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Regular Donor",
    address: "20 Al Mansour Mohamed St., Zamalek, Cairo",
    telephone: "+20 288884433",
    email: "hana.mahmoud@example.com",
  },
  {
    id: 30,
    name: "Tarek Amer",
    gender: "Male",
    governorate: "Alexandria",
    area: "Smouha",
    usertype: "Regular Donor",
    address: "3 El Nasr St., Smouha, Alexandria",
    telephone: "+20 377778899",
    email: "tarek.amer@example.com",
  },
  {
    id: 31,
    name: "Yara Ahmed",
    gender: "Female",
    governorate: "Giza",
    area: "Haram",
    usertype: "Regular Donor",
    address: "10 El Haram St., Haram, Giza",
    telephone: "+20 277772233",
    email: "yara.ahmed@example.com",
  },
  {
    id: 32,
    name: "Ali Hassan",
    gender: "Male",
    governorate: "Cairo",
    area: "Heliopolis",
    usertype: "Teacher",
    address: "15 Salah Salem St., Heliopolis, Cairo",
    telephone: "+20 255550011",
    email: "ali.hassan@example.com",
  },
  {
    id: 33,
    name: "Mariam Ibrahim",
    gender: "Female",
    governorate: "Alexandria",
    area: "Bolkly",
    usertype: "Doctor",
    address: "25 El Gish St., Bolkly, Alexandria",
    telephone: "+20 366663322",
    email: "mariam.ibrahim@example.com",
  },
  {
    id: 34,
    name: "Mohamed Samir",
    gender: "Male",
    governorate: "Giza",
    area: "Agouza",
    usertype: "Regular Donor",
    address: "7 Al Ahram St., Agouza, Giza",
    telephone: "+20 288881122",
    email: "mohamed.samir@example.com",
  },
  {
    id: 35,
    name: "Noura Mahmoud",
    gender: "Female",
    governorate: "Cairo",
    area: "Maadi",
    usertype: "Teacher",
    address: "18 Ahmed Orabi St., Maadi, Cairo",
    telephone: "+20 277773311",
    email: "noura.mahmoud@example.com",
  },
  {
    id: 36,
    name: "Ahmed Abdelaziz",
    gender: "Male",
    governorate: "Giza",
    area: "Imbaba",
    usertype: "Doctor",
    address: "11 Ramses St., Imbaba, Giza",
    telephone: "+20 299988866",
    email: "ahmed.abdelaziz@example.com",
  },
  {
    id: 37,
    name: "Dina Ali",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Regular Donor",
    address: "22 Salah Salem St., Nasr City, Cairo",
    telephone: "+20 255556699",
    email: "dina.ali@example.com",
  },
  {
    id: 38,
    name: "Khaled Mohamed",
    gender: "Male",
    governorate: "Alexandria",
    area: "Miami",
    usertype: "Teacher",
    address: "9 El Horreya Road, Miami, Alexandria",
    telephone: "+20 377774433",
    email: "khaled.mohamed@example.com",
  },
  {
    id: 39,
    name: "Nadia Samir",
    gender: "Female",
    governorate: "Giza",
    area: "Faisal",
    usertype: "Doctor",
    address: "20 Ramses St., Faisal, Giza",
    telephone: "+20 211112211",
    email: "nadia.samir@example.com",
  },
  {
    id: 40,
    name: "Ali Ibrahim",
    gender: "Male",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Regular Donor",
    address: "12 Salah Salem St., Zamalek, Cairo",
    telephone: "+20 288884411",
    email: "ali.ibrahim@example.com",
  },
  {
    id: 41,
    name: "Hoda Mahmoud",
    gender: "Female",
    governorate: "Alexandria",
    area: "Stanley",
    usertype: "Teacher",
    address: "18 El Geish Road, Stanley, Alexandria",
    telephone: "+20 344455588",
    email: "hoda.mahmoud@example.com",
  },
  {
    id: 42,
    name: "Omar Samir",
    gender: "Male",
    governorate: "Giza",
    area: "Dokki",
    usertype: "Regular Donor",
    address: "9 El Batal Ahmed Abdel Aziz St., Dokki, Giza",
    telephone: "+20 277771199",
    email: "omar.samir@example.com",
  },
  {
    id: 43,
    name: "Sara Ibrahim",
    gender: "Female",
    governorate: "Cairo",
    area: "Maadi",
    usertype: "Doctor",
    address: "14 Tahrir St., Maadi, Cairo",
    telephone: "+20 277774422",
    email: "sara.ibrahim@example.com",
  },
  {
    id: 44,
    name: "Ahmed Hassan",
    gender: "Male",
    governorate: "Giza",
    area: "Mohandessin",
    usertype: "Regular Donor",
    address: "5 Al Ahram St., Mohandessin, Giza",
    telephone: "+20 299992211",
    email: "ahmed.hassan@example.com",
  },
  {
    id: 45,
    name: "Nadia Ali",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Teacher",
    address: "11 Salah Salem St., Nasr City, Cairo",
    telephone: "+20 255559977",
    email: "nadia.ali@example.com",
  },
  {
    id: 46,
    name: "Mohamed Samir",
    gender: "Male",
    governorate: "Alexandria",
    area: "Miami",
    usertype: "Doctor",
    address: "8 El Horreya Road, Miami, Alexandria",
    telephone: "+20 377772244",
    email: "mohamed.samir@example.com",
  },
  {
    id: 47,
    name: "Yasmine Mahmoud",
    gender: "Female",
    governorate: "Giza",
    area: "Imbaba",
    usertype: "Regular Donor",
    address: "25 Ramses St., Imbaba, Giza",
    telephone: "+20 288883322",
    email: "yasmine.mahmoud@example.com",
  },
  {
    id: 48,
    name: "Khaled Ali",
    gender: "Male",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Teacher",
    address: "17 Salah Salem St., Zamalek, Cairo",
    telephone: "+20 288887766",
    email: "khaled.ali@example.com",
  },
  {
    id: 49,
    name: "Nour Hassan",
    gender: "Female",
    governorate: "Alexandria",
    area: "Bolkly",
    usertype: "Doctor",
    address: "28 El Gish St., Bolkly, Alexandria",
    telephone: "+20 366662211",
    email: "nour.hassan@example.com",
  },
  {
    id: 50,
    name: "Amr Ibrahim",
    gender: "Male",
    governorate: "Giza",
    area: "Haram",
    usertype: "Regular Donor",
    address: "15 El Haram St., Haram, Giza",
    telephone: "+20 277771166",
    email: "amr.ibrahim@example.com",
  },
  {
    id: 51,
    name: "Fatma Ahmed",
    gender: "Female",
    governorate: "Cairo",
    area: "Heliopolis",
    usertype: "Teacher",
    address: "20 Salah Salem St., Heliopolis, Cairo",
    telephone: "+20 255558899",
    email: "fatma.ahmed@example.com",
  },
  {
    id: 52,
    name: "Ali Mahmoud",
    gender: "Male",
    governorate: "Alexandria",
    area: "Borg El Arab",
    usertype: "Doctor",
    address: "15 El Gish Road, Borg El Arab, Alexandria",
    telephone: "+20 366663311",
    email: "ali.mahmoud@example.com",
  },
  {
    id: 53,
    name: "Sara Samir",
    gender: "Female",
    governorate: "Giza",
    area: "Agouza",
    usertype: "Regular Donor",
    address: "9 Al Ahram St., Agouza, Giza",
    telephone: "+20 288882211",
    email: "sara.samir@example.com",
  },
  {
    id: 54,
    name: "Youssef Mohamed",
    gender: "Male",
    governorate: "Cairo",
    area: "Maadi",
    usertype: "Teacher",
    address: "12 Ahmed Orabi St., Maadi, Cairo",
    telephone: "+20 277773300",
    email: "youssef.mohamed@example.com",
  },
  {
    id: 55,
    name: "Alia Ahmed",
    gender: "Female",
    governorate: "Alexandria",
    area: "Miami",
    usertype: "Doctor",
    address: "5 El Horreya Road, Miami, Alexandria",
    telephone: "+20 377774422",
    email: "nadia.samir@example.com",
  },
  {
    id: 56,
    name: "Ahmed Hassan",
    gender: "Male",
    governorate: "Giza",
    area: "Dokki",
    usertype: "Regular Donor",
    address: "12 El Batal Ahmed Abdel Aziz St., Dokki, Giza",
    telephone: "+20 277771122",
    email: "ahmed.hassan@example.com",
  },
  {
    id: 57,
    name: "Dina Ibrahim",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Teacher",
    address: "9 Salah Salem St., Nasr City, Cairo",
    telephone: "+20 255556688",
    email: "dina.ibrahim@example.com",
  },
  {
    id: 58,
    name: "Khaled Ali",
    gender: "Male",
    governorate: "Alexandria",
    area: "Stanley",
    usertype: "Doctor",
    address: "20 El Geish Road, Stanley, Alexandria",
    telephone: "+20 344455577",
    email: "khaled.ali@example.com",
  },
  {
    id: 59,
    name: "Nour Mohamed",
    gender: "Female",
    governorate: "Giza",
    area: "Mohandessin",
    usertype: "Regular Donor",
    address: "8 Al Ahram St., Mohandessin, Giza",
    telephone: "+20 299992233",
    email: "nour.mohamed@example.com",
  },
  {
    id: 60,
    name: "Amira Hassan",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Teacher",
    address: "7 Salah Salem St., Nasr City, Cairo",
    telephone: "+20 277773322",
    email: "amira.hassan@example.com",
  },
  {
    id: 61,
    name: "Omar Ibrahim",
    gender: "Male",
    governorate: "Alexandria",
    area: "Miami",
    usertype: "Doctor",
    address: "10 El Horreya Road, Miami, Alexandria",
    telephone: "+20 377772233",
    email: "omar.ibrahim@example.com",
  },
  {
    id: 62,
    name: "Sara Samir",
    gender: "Female",
    governorate: "Giza",
    area: "Imbaba",
    usertype: "Regular Donor",
    address: "18 Ramses St., Imbaba, Giza",
    telephone: "+20 288883311",
    email: "sara.samir@example.com",
  },
  {
    id: 63,
    name: "Youssef Ahmed",
    gender: "Male",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Teacher",
    address: "25 Salah Salem St., Zamalek, Cairo",
    telephone: "+20 288887711",
    email: "youssef.ahmed@example.com",
  },
  {
    id: 64,
    name: "Nadia Mahmoud",
    gender: "Female",
    governorate: "Alexandria",
    area: "Stanley",
    usertype: "Doctor",
    address: "15 El Geish Road, Stanley, Alexandria",
    telephone: "+20 344455566",
    email: "nadia.mahmoud@example.com",
  },
  {
    id: 65,
    name: "Khaled Ali",
    gender: "Male",
    governorate: "Giza",
    area: "Dokki",
    usertype: "Regular Donor",
    address: "10 El Batal Ahmed Abdel Aziz St., Dokki, Giza",
    telephone: "+20 277771166",
    email: "khaled.ali@example.com",
  },
  {
    id: 66,
    name: "Dina Ibrahim",
    gender: "Female",
    governorate: "Cairo",
    area: "Nasr City",
    usertype: "Teacher",
    address: "14 Salah Salem St., Nasr City, Cairo",
    telephone: "+20 255556677",
    email: "dina.ibrahim@example.com",
  },
  {
    id: 67,
    name: "Khaled Ali",
    gender: "Male",
    governorate: "Alexandria",
    area: "Miami",
    usertype: "Doctor",
    address: "12 El Horreya Road, Miami, Alexandria",
    telephone: "+20 377772255",
    email: "khaled.ali@example.com",
  },
  {
    id: 68,
    name: "Nour Mohamed",
    gender: "Male",
    governorate: "Giza",
    area: "Imbaba",
    usertype: "Regular Donor",
    address: "22 Ramses St., Imbaba, Giza",
    telephone: "+20 288883322",
    email: "nour.mohamed@example.com",
  },
  {
    id: 69,
    name: "Amira Hassan",
    gender: "Female",
    governorate: "Cairo",
    area: "Zamalek",
    usertype: "Teacher",
    address: "22 Salah Salem St., Zamalek, Cairo",
    telephone: "+20 288887733",
    email: "amira.hassan@example.com",
  },
  {
    id: 70,
    name: "Omar Ibrahim",
    gender: "Male",
    governorate: "Alexandria",
    area: "Stanley",
    usertype: "Doctor",
    address: "9 El Geish Road, Stanley, Alexandria",
    telephone: "+20 344455599",
    email: "omar.ibrahim@example.com",
  },
  {
    id: 71,
    name: "Sara Samir",
    gender: "Female",
    governorate: "Giza",
    area: "Haram",
    usertype: "Regular Donor",
    address: "30 El Haram St., Haram, Giza",
    telephone: "+20 277771177",
    email: "sara.samir@example.com",
  },
  {
    id: 72,
    name: "Youssef Ahmed",
    gender: "Male",
    governorate: "Cairo",
    area: "Heliopolis",
    usertype: "Teacher",
    address: "30 Salah Salem St., Heliopolis, Cairo",
    telephone: "+20 255558833",
    email: "youssef.ahmed@example.com",
  },
];

// Add more entries here until 30

function getInfoById(id) {
  return data.find((entry) => entry.id === parseInt(id));
}

// Retrieve query parameters
const id = getQueryParam("id");
const info = getInfoById(id);

if (info) {
  document.getElementById("label1-1").innerText = info.name;
  document.getElementById("label1-2").innerText = info.gender;
  document.getElementById("label1-3").innerText = info.telephone;
  document.getElementById("label1-4").innerText = info.email;
  document.getElementById("label1-5").innerText = info.address;
  document.getElementById("label1").innerText = "Name:";
  document.getElementById("label2").innerText = "Gender:";
  document.getElementById("label3").innerText = "Mobile Number:";
  document.getElementById("label4").innerText = "Email:";
  document.getElementById("label5").innerText = "Address:";
} else {
  console.error("No information found for the provided ID.");
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const name = getQueryParam("name");
const address = getQueryParam("address");
const area = getQueryParam("area");
const governorate = getQueryParam("governorate");
const type = getQueryParam("type");
const email = getQueryParam("email");
const telephone = getQueryParam("telephone");
const googleMap = getQueryParam("googleMap");

document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after 2 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
  }, 1000); // 2000 milliseconds = 2 seconds
});

$(document).ready(function () {
  $(".navbar-nav .nav-item:nth-child(3)").addClass("active");

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
