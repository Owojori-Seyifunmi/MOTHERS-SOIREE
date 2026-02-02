// Smooth scrolling functions
function scrollToBooking() {
    const reserveSection = document.getElementById('reserve');
    if (reserveSection) {
        reserveSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
}

// Accordion functionality
function toggleAccordion(button) {
    const accordionItem = button.closest('.accordion-item');
    const allItems = document.querySelectorAll('.accordion-item');
    
    // Close all other accordion items
    allItems.forEach(item => {
        if (item !== accordionItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current item
    accordionItem.classList.toggle('active');
}

// Booking form submission
function handleBookingSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dietary: document.getElementById('dietary').value
    };
    
    // In production, this would send data to a payment processor
    console.log('Booking submitted:', formData);
    
    // Show success message
    document.getElementById('booking-form-card').classList.add('hidden');
    document.getElementById('booking-success').classList.remove('hidden');
    
    // Re-initialize Lucide icons for the success screen
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Scroll to top of booking section
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Add animation observer for fade-up elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animate-fade-up elements that aren't in the hero
    const heroSection = document.getElementById('hero');
    const animatedElements = document.querySelectorAll('.animate-fade-up');
    
    animatedElements.forEach(element => {
        // Don't observe hero elements as they animate on page load
        if (!heroSection.contains(element)) {
            observer.observe(element);
        }
    });
});

// Handle form input styling on focus
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});