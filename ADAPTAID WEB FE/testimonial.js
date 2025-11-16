    class Testimonial {
      constructor(name, role, message, image) {
        this.name = name;
        this.role = role;
        this.message = message;
        this.image = image;
      }

      createCard() {
        const card = document.createElement('div');
        card.className = 'service-card';

        const img = document.createElement('img');
        img.src = this.image;
        img.alt = this.name;
        img.style.width = '100px';
        img.style.borderRadius = '50%';

        const name = document.createElement('h3');
        name.textContent = this.name;

        const role = document.createElement('p');
        role.innerHTML = `<b>${this.role}</b>`;

        const msg = document.createElement('p');
        msg.textContent = `"${this.message}"`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(role);
        card.appendChild(msg);

        return card;
      }
    }

    const testimonials = [
      new Testimonial(
        "Ravi Kumar",
        "Prosthetic User",
        "Adaptaid changed my life. Their advanced bionic arm feels completely natural.",
        "https://randomuser.me/api/portraits/men/32.jpg"
      ),
      new Testimonial(
        "Dr. Neha Sharma",
        "Orthopedic Surgeon",
        "The collaboration between Adaptaid and hospitals is revolutionary for patient recovery.",
        "https://randomuser.me/api/portraits/women/44.jpg"
      ),
      new Testimonial(
        "Helping Hands NGO",
        "Partner Organization",
        "We’ve seen countless lives improved through Adaptaid’s prosthetic innovations.",
        "https://randomuser.me/api/portraits/men/45.jpg"
      )
    ];

    const container = document.getElementById('testimonial-container');
    testimonials.forEach(t => container.appendChild(t.createCard()));

