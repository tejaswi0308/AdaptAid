document.addEventListener("DOMContentLoaded", () => {
  // Embedded JSON data
  const partnersData = [
    {
      name: "HealWell Foundation",
      type: "NGO",
      location: "Delhi, India",
      contact: "https://healwell.org"
    },
    {
      name: "ProstheTech Labs",
      type: "Manufacturer",
      location: "Bangalore, India",
      contact: "https://prosthetech.com"
    },
    {
      name: "CarePlus Hospital",
      type: "Hospital",
      location: "Mumbai, India",
      contact: "https://careplushospital.in"
    },
    {
      name: "HopeHands Trust",
      type: "NGO",
      location: "Chennai, India",
      contact: "https://hopehands.org"
    },
    {
      name: "NeuroMotion Labs",
      type: "Manufacturer",
      location: "Pune, India",
      contact: "https://neuromotionlabs.com"
    }
  ];

  const grid = document.getElementById("partnerGrid");
  const filter = document.getElementById("typeFilter");

  // Function to display partners
  function displayPartners(filterType) {
    grid.innerHTML = "";
    const filtered = filterType === "all" ? partnersData : partnersData.filter(p => p.type === filterType);
    filtered.forEach(p => {
      const card = document.createElement("div");
      card.className = "partner-card";
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p><strong>Type:</strong> ${p.type}</p>
        <p><strong>Location:</strong> ${p.location}</p>
        <p><a href="${p.contact}" target="_blank">Visit Website</a></p>
      `;
      grid.appendChild(card);
    });
  }

  // Initial display
  displayPartners("all");

  // Handle filter change
  filter.addEventListener("change", e => {
    displayPartners(e.target.value);
  });
});
