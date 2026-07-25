const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },  
  {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 37600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52594,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52594,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      }
    
    
];

// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.navigation');

// hamburger.addEventListener('click', () => {
//     navMenu.classList.toggle('open');
// });

// scripts/filtered-temples.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navigation = document.querySelector('.navigation');

  hamburger.addEventListener('click', () => {
      navigation.classList.toggle('open'); // Toggle the 'open' class
  });
});



// Function to display temples
function displayTemples(temples) {
  const templeContainer = document.getElementById("templeCards");
  templeContainer.innerHTML = ""; // Clear previous results

  temples.forEach(temple => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");

      templeCard.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName} loading="lazy">
      `;

      templeContainer.appendChild(templeCard);
  });
}

// Initial display of all temples
displayTemples(temples);

// Filter function
function filterTemples(criteria) {
let filteredTemples = temples;

if (criteria === 'old') {
  filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
} else if (criteria === 'new') {
  filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
} else if (criteria === 'large') {
  filteredTemples = temples.filter(temple => temple.area > 90000);
} else if (criteria === 'small') {
  filteredTemples = temples.filter(temple => temple.area < 10000);
}

displayTemples(filteredTemples);
}

// Event listeners for filtering
document.querySelectorAll('.filter').forEach(item => {
item.addEventListener('click', event => {
  const filter = event.target.getAttribute('data-filter');
  filterTemples(filter);
});
});

// Footer JavaScript for current year and last modified date
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;