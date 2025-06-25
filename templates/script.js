//<!-- JavaScript for smooth scrolling and form submission -->

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - (document.querySelector('.navbar')?.offsetHeight || 0); // Adjust for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // JavaScript for hero section typing animation
        document.addEventListener('DOMContentLoaded', () => {
            const imLine = document.getElementById('hero-line-im');
            const nyikoLine = document.getElementById('hero-line-nyiko');
            const mkansiLine = document.getElementById('hero-line-mkansi');

            // Function to simulate typing effect
            function typeText(element, text, color, charSpeed = 70, finalDelay = 1000) {
                return new Promise(resolve => {
                    let i = 0;
                    // Ensure the element is visible and has height/line-height before typing
                    element.classList.add('active'); // Applies visibility, height, line-height
                    element.textContent = ''; // Clear content before typing
                    element.style.color = color;
                    element.classList.add('typing-active-caret'); // Show blinking caret

                    const typingInterval = setInterval(() => {
                        if (i < text.length) {
                            element.textContent += text.charAt(i);
                            i++;
                        } else {
                            clearInterval(typingInterval);
                            element.classList.remove('typing-active-caret'); // Hide caret
                            setTimeout(() => resolve(), finalDelay); // Resolve after a short delay
                        }
                    }, charSpeed);
                });
            }

            // Function to simulate erasing effect
            function eraseText(element, charSpeed = 30, finalDelay = 500) {
                return new Promise(resolve => {
                    let text = element.textContent;
                    let i = text.length; // Start from end of text for erasing
                    element.classList.add('erasing-active-caret'); // Show blinking caret

                    const erasingInterval = setInterval(() => {
                        if (i >= 0) {
                            element.textContent = text.substring(0, i);
                            i--;
                        } else {
                            clearInterval(erasingInterval);
                            element.classList.remove('erasing-active-caret'); // Hide caret
                            element.classList.remove('active'); // Hide element after erasing (removes visibility, height, line-height)
                            element.textContent = ''; // Ensure truly empty
                            setTimeout(() => resolve(), finalDelay); // Resolve after a short delay
                        }
                    }, charSpeed);
                });
            }

 

async function startHeroAnimation() {
  while (true) {
    // Infinite loop for the full sequence
    // Ensure all elements are hidden and empty at the start of each cycle
    imLine.classList.remove('active');
    imLine.textContent = '';
    nyikoLine.classList.remove('active');
    nyikoLine.textContent = '';
    mkansiLine.classList.remove('active');
    mkansiLine.textContent = '';

    // Phase 1: "I'm Nyiko Mkansi"
    await typeText(imLine, "I'm", '#fffff', 70, 500);
    await new Promise(r => setTimeout(r, 200));
    await typeText(nyikoLine, "Nyiko", '#8BC34A', 70, 500);
    await new Promise(r => setTimeout(r, 200));
    await typeText(mkansiLine, "Mkansi", '#ffff', 70, 1000);
    await new Promise(r => setTimeout(r, 1500)); // Longer pause after full name

    // Erase Phase 1
    await eraseText(mkansiLine, 30, 100);
    await eraseText(nyikoLine, 30, 100);
    await eraseText(imLine, 30, 500); // Longer delay after "I'm" erased
    await new Promise(r => setTimeout(r, 500)); // Small pause between phrases

    // Phase 2: "Software Developer"
    // Use nyikoLine and mkansiLine for this phrase
    // Ensure imLine is fully hidden and cleared
    imLine.classList.remove('active');
    imLine.textContent = '';
    await typeText(nyikoLine, "Software", '#FFFFFF', 70, 500); // Software on the second line
    await new Promise(r => setTimeout(r, 200));
    await typeText(mkansiLine, "Developer", '#4CAF50', 70, 1000); // Developer on the third line
    await new Promise(r => setTimeout(r, 1500)); // Longer pause after "Developer"

    // Erase Phase 2
    await eraseText(mkansiLine, 30, 100);
    await eraseText(nyikoLine, 30, 500); // Longer delay after "Software" erased
    await new Promise(r => setTimeout(r, 1000)); // Longer pause before next full cycle starts
  }
}
startHeroAnimation(); // Initiate the hero section animation

        });


        // JavaScript for Hamburger Menu Toggle
        document.addEventListener('DOMContentLoaded', () => {
            const hamburgerButton = document.getElementById('hamburger-menu');
            const navLinksMenu = document.getElementById('nav-links-menu');

            if (hamburgerButton && navLinksMenu) {
                hamburgerButton.addEventListener('click', () => {
                    navLinksMenu.classList.toggle('nav-open');
                    hamburgerButton.classList.toggle('open'); // Toggle 'open' class for icon animation
                });

                // Close menu when a navigation link is clicked (for single-page scroll)
                navLinksMenu.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        if (navLinksMenu.classList.contains('nav-open')) {
                            navLinksMenu.classList.remove('nav-open');
                            hamburgerButton.classList.remove('open'); // Ensure icon reverts to hamburger
                        }
                    });
                });
            }
        });


        // Handle contact form submission (client-side only for this example)
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formStatus = document.getElementById('formStatus');
            formStatus.style.display = 'block';
            formStatus.style.color = '#3b82f6'; // Tailwind blue-500
            formStatus.textContent = 'Sending your message...';

            // In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest, which would then send the email.
            // For example:
            /*
            const formData = new FormData(this);
            fetch('/send-email', { // Replace with your actual backend endpoint
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formStatus.textContent = 'Message sent successfully!';
                    formStatus.style.color = '#10B981'; // Tailwind green-500
                    this.reset(); // Clear the form
                } else {
                    formStatus.textContent = 'Failed to send message. Please try again.';
                    formStatus.style.color = '#EF4444'; // Tailwind red-500
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formStatus.textContent = 'An error occurred. Please try again later.';
                formStatus.style.color = '#EF4444'; // Tailwind red-500
            });
            */

            // Simulate a successful sending for demonstration
            setTimeout(() => {
                formStatus.textContent = 'Message sent successfully! (Note: This is a demo. Actual email sending requires a backend.)';
                formStatus.style.color = '#10B981'; // Tailwind green-500
                this.reset(); // Clear the form
            }, 2000);
        });