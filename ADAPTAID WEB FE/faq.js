document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("faq-list");

  // Embedded JSON data
  const faqs = [
    {
      "question": "What is Adaptaid?",
      "answer": "Adaptaid is a collaborative platform connecting NGOs, hospitals, patients, and manufacturers to provide advanced prosthetic solutions."
    },
    {
      "question": "Who can benefit from Adaptaid?",
      "answer": "Anyone in need of prosthetic or assistive devices, as well as organizations that support such initiatives."
    },
    {
      "question": "How do I register as a partner?",
      "answer": "You can join as a hospital, NGO, or manufacturer by signing up on our Partners page."
    },
    {
      "question": "Does Adaptaid provide free prosthetics?",
      "answer": "Adaptaid connects patients with NGOs and manufacturers offering support programs, including free and subsidized prosthetics."
    },
    {
      "question": "Can I donate to support this initiative?",
      "answer": "Yes! You can reach out to our NGO partners listed on the Partners page to contribute directly."
    }
  ];

  // Display FAQs
  faqs.forEach(faq => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `
      <h3>${faq.question}</h3>
      <p>${faq.answer}</p>
    `;
    container.appendChild(item);

    // Toggle answer visibility
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
