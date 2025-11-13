/* ============================= */
/* CONTACT FORM HANDLER */
/* ============================= */

// Get the contact form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture user inputs
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const contactNumber = document.getElementById('contact-number').value;
    const email = document.getElementById('email').value;
    const requirements = document.getElementById('requirements').value;

    // Construct the email body
    const emailBody = `First Name: ${firstName}\nFamily Name: ${lastName}\nContact Number: ${contactNumber}\nEmail: ${email}\nDescription of Requirements: ${requirements}`;
    const emailLink = `mailto:emma@ehfitness.uk?subject=Contact%20Form%20Submission&body=${encodeURIComponent(emailBody)}`;

    // Redirect to email client
    window.location.href = emailLink;
  });
}

// Gallery Image Modal Viewer
const galleryImages = document.querySelectorAll('.gallery-grid img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <img src="${img.src}" alt="${img.alt}">
      </div>
      <span class="close-button">&times;</span>
    `;

    // Close Modal Event
    modal.addEventListener('click', (event) => {
      if (event.target === modal || event.target.classList.contains('close-button')) {
        modal.remove();
        document.body.style.overflow = '';
      }
    });

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    document.body.appendChild(modal);
  });
});
