// Filter and Search Functionality
document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filter = document.getElementById("filter").value;
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

document.getElementById("filter").addEventListener("change", function () {
  document.getElementById("search").dispatchEvent(new Event("input"));
});

// Order Page Details
if (window.location.pathname.includes("order.html")) {
  const params = new URLSearchParams(window.location.search);
  const model = params.get("model");

  const cardDetails = {
    SP100: { name: "SwiftPay 100", price: "$99.99", business: "Restaurant" },
    HPP200: { name: "HealthPay Pro", price: "$149.99", business: "Healthcare" },
    PR300: {
      name: "ProReader 300",
      price: "$199.99",
      business: "Professional Services",
    },
    RP400: { name: "RetailPay 400", price: "$129.99", business: "Retail" },
    QP500: { name: "QuickPay 500", price: "$89.99", business: "Restaurant" },
  };

  // Dynamic Year Update in Footer
  const footerYear = document.getElementById('year');
  footerYear.textContent = new Date().getFullYear();

  // Card Details
  const details = cardDetails[model];
  if (details) {
    document.getElementById("order-details").innerHTML = `
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
