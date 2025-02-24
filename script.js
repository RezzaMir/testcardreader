// Dynamic Year Update in Footer (It must be on top of the script.js, if you relocate it to the bottom, it won't show up.)
document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.getElementById("year");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  } else {
    console.log("Element with ID 'year' not found");
  }

  // Order Page Details
  if (window.location.pathname.includes("order.html")) {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");

    const cardDetails = {
      SP100: {
        name: "SwiftPay 100",
        price: "$99.99",
        business: "Restaurant",
        image: "card1.jpg",
      },
      HPP200: {
        name: "HealthPay Pro",
        price: "$149.99",
        business: "Healthcare",
        image: "card2.jpg",
      },
      PR300: {
        name: "ProReader 300",
        price: "$199.99",
        business: "Professional Services",
        image: "card3.jpg",
      },
      RP400: {
        name: "RetailPay 400",
        price: "$129.99",
        business: "Retail",
        image: "card4.jpg",
      },
      QP500: {
        name: "QuickPay 500",
        price: "$89.99",
        business: "Restaurant",
        image: "card5.jpg",
      },
    };

    // Display the card details on the order page
    const details = cardDetails[model];
    if (details) {
      document.getElementById("order-details").innerHTML = `
        <img src="${details.image}" alt="${details.name}" class="card-image">
        <h3>${details.name}</h3>
        <p>Model: ${model}</p>
        <p>Business: ${details.business}</p>
        <p>Price: ${details.price}</p>
      `;
    }
    document
      .getElementById("order-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        alert(`Order request sent for ${details.name} to ${email}`);
      });
  }

  // Filter and Search Functionality
  const searchInput = document.getElementById("search");
  const filterSelect = document.getElementById("filter");

  if (searchInput && filterSelect) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase();
      const filter = filterSelect.value;
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const business = card.getAttribute("data-business");
        const name = card.querySelector("h3").textContent.toLowerCase();
        if (
          (filter === "all" || business === filter) &&
          name.includes(searchTerm)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });

    filterSelect.addEventListener("change", function () {
      searchInput.dispatchEvent(new Event("input"));
    });
  }
});
