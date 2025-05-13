const toggleBtn = document.querySelector('.theme-toggle');
const hamburger = document.getElementById('hamburger');
const navCollapse = document.getElementById('nav-collapse');

// Toggle dark/light mode
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});

// Toggle mobile nav + right section
hamburger.addEventListener('click', () => {
  navCollapse.classList.toggle('active');
});

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
});

document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Optional: Add animation to barber cards when they come into view
    const barberCards = document.querySelectorAll('.barber-card');
    
    // Simple animation on page load
    barberCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
    
    // Optional: You could add more interactive features here
    // For example, modal popups with more barber details when clicking on a card
    
    barberCards.forEach(card => {
        card.addEventListener('click', function() {
            // Example: You could show more details about the barber
            console.log('Barber card clicked:', this.querySelector('.barber-name').textContent);
            
            // Uncomment to implement a modal or expanded view
            // showBarberDetails(this);
        });
    });
    
    // Example function for showing more barber details (not implemented)
    // function showBarberDetails(card) {
    //     // Create and show a modal with more information
    // }
});

// Initialize Google Map
function initMap() {
    // Check if google is defined
    if (typeof google === 'undefined') {
        console.error('Google Maps API not loaded. Please ensure the API is properly included in your HTML.');
        document.getElementById('map').innerHTML = `
            <div style="height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                <i class="fas fa-map-marker-alt" style="font-size: 3rem; color: #4b5563; margin-bottom: 1rem;"></i>
                <p style="color: #94a3b8; text-align: center;">Map loading failed. Google Maps API not loaded.</p>
            </div>
        `;
        return;
    }

    // Address from the screenshot
    const address = "518 Acme St unit 101, Denton, TX 76205, United States";
    
    // Create a geocoder to convert address to coordinates
    const geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            // Create map centered at the address
            const map = new google.maps.Map(document.getElementById('map'), {
                center: results[0].geometry.location,
                zoom: 15,
                styles: [
                    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                    {
                        featureType: "administrative.locality",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "poi",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{ color: "#263c3f" }],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#6b9a76" }],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [{ color: "#38414e" }],
                    },
                    {
                        featureType: "road",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#212a37" }],
                    },
                    {
                        featureType: "road",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#9ca5b3" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry",
                        stylers: [{ color: "#746855" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{ color: "#1f2835" }],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#f3d19c" }],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{ color: "#2f3948" }],
                    },
                    {
                        featureType: "transit.station",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#d59563" }],
                    },
                    {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{ color: "#17263c" }],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.fill",
                        stylers: [{ color: "#515c6d" }],
                    },
                    {
                        featureType: "water",
                        elementType: "labels.text.stroke",
                        stylers: [{ color: "#17263c" }],
                    },
                ]
            });
            
            // Add a marker at the address
            const marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                animation: google.maps.Animation.DROP
            });
            
            // Add info window
            const infoWindow = new google.maps.InfoWindow({
                content: `<div style="color: #333; padding: 5px;">
                            <strong>Our Location</strong><br>
                            ${address}
                          </div>`
            });
            
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
            
            // Set up directions button
            document.getElementById('directions-btn').addEventListener('click', function(e) {
                e.preventDefault();
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
            });
        } else {
            console.error('Geocode was not successful for the following reason: ' + status);
            // Fallback if geocoding fails
            document.getElementById('map').innerHTML = `
                <div style="height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <i class="fas fa-map-marker-alt" style="font-size: 3rem; color: #4b5563; margin-bottom: 1rem;"></i>
                    <p style="color: #94a3b8; text-align: center;">Map loading failed. Please check your API key.</p>
                </div>
            `;
        }
    });
}

window.initMap = initMap;

// Scroll to top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterFAQs(filter);
        });
    });
    
    function filterFAQs(category) {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // Search functionality
    const searchInput = document.getElementById('faq-search');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        searchFAQs(searchTerm);
    });
    
    function searchFAQs(term) {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const questionText = item.querySelector('h3').textContent.toLowerCase();
            const answerText = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            if (questionText.includes(term) || answerText.includes(term)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
        
        // Reset filter buttons when searching
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
    }
});

// DOM Elements
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const dateInput = document.getElementById('date');

// Scroll to top functionality
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Set min date to today for the date picker
function setMinDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

// Form validation
function validateForm() {
  let isValid = true;
  
  // Clear previous error messages
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(message => message.remove());
  
  const formControls = contactForm.querySelectorAll('.form-control');
  formControls.forEach(control => control.classList.remove('error'));
  
  // Validate name
  const nameInput = document.getElementById('name');
  if (!nameInput.value.trim()) {
    showError(nameInput, 'Name is required');
    isValid = false;
  }
  
  // Validate phone
  const phoneInput = document.getElementById('phone');
  if (!phoneInput.value.trim()) {
    showError(phoneInput, 'Phone number is required');
    isValid = false;
  } else if (!isValidPhone(phoneInput.value)) {
    showError(phoneInput, 'Please enter a valid phone number');
    isValid = false;
  }
  
  // Validate service
  const serviceInput = document.getElementById('service');
  if (!serviceInput.value) {
    showError(serviceInput, 'Please select a service');
    isValid = false;
  }
  
  // Validate date
  if (!dateInput.value) {
    showError(dateInput, 'Please select a date');
    isValid = false;
  }
  
  return isValid;
}

// Show error message
function showError(input, message) {
  input.classList.add('error');
  const formGroup = input.closest('.form-group');
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  formGroup.appendChild(errorElement);
}

// Validate phone number
function isValidPhone(phone) {
  // Basic phone validation - can be enhanced based on requirements
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Show success message
function showSuccessMessage() {
  // Remove existing success message if any
  const existingMessage = document.querySelector('.success-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  // Create and show new success message
  const successMessage = document.createElement('div');
  successMessage.className = 'success-message show';
  successMessage.textContent = 'Thank you for your submission! We will contact you soon.';
  
  // Insert before the form
  contactForm.parentNode.insertBefore(successMessage, contactForm);
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.classList.remove('show');
    setTimeout(() => {
      successMessage.remove();
    }, 300);
  }, 5000);
}

// Form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Get form values
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      service: document.getElementById('service').value,
      date: document.getElementById('date').value,
      message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message and reset form
    showSuccessMessage();
    contactForm.reset();
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setMinDate();
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Appointment button functionality
    const appointmentBtn = document.getElementById('appointmentBtn');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function() {
            // You could replace this with a modal or redirect to a booking page
            alert('Booking system will open here. This is a placeholder.');
            // Example of how you might redirect:
            // window.location.href = '/booking';
        });
    }

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        // Hide the button initially (when at the top)
        scrollTopBtn.style.display = 'none';
        
        // Show/hide the button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });
        
        // Scroll to top when clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Optional: Add animation to the hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Simple fade-in animation
        heroContent.style.opacity = '0';
        heroContent.style.transition = 'opacity 1s ease';
        
        // Delay slightly for better effect
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 300);
    }
});