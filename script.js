// ========================================
// NMAP PRESENTATION - NAVIGATION SCRIPT
// ========================================

let currentSlide = 1;
const totalSlides = 25;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
    updateCounter();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeypress);
});

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    
    // Boundary check
    if (n > totalSlides) currentSlide = 1;
    if (n < 1) currentSlide = totalSlides;
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    
    // Show current slide
    const activeSlide = document.getElementById(`slide${currentSlide}`);
    if (activeSlide) {
        activeSlide.style.display = 'flex';
        activeSlide.classList.add('active');
    }
    
    updateCounter();
}

// Change slide
function changeSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// Update counter
function updateCounter() {
    document.getElementById('slideCounter').textContent = `${currentSlide} / ${totalSlides}`;
}

// Keyboard navigation
function handleKeypress(e) {
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
            e.preventDefault();
            changeSlide(1);
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            changeSlide(-1);
            break;
        case 'Home':
            e.preventDefault();
            currentSlide = 1;
            showSlide(currentSlide);
            break;
        case 'End':
            e.preventDefault();
            currentSlide = totalSlides;
            showSlide(currentSlide);
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
}

// Fullscreen toggle
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            changeSlide(1); // Swipe left - next
        } else {
            changeSlide(-1); // Swipe right - prev
        }
    }
}

// Go to specific slide
function goToSlide(slideNum) {
    if (slideNum >= 1 && slideNum <= totalSlides) {
        currentSlide = slideNum;
        showSlide(currentSlide);
    }
}

// Export functions for console access
window.goToSlide = goToSlide;
window.changeSlide = changeSlide;

/* ========================================
   CLIPBOARD & LINK FUNCTIONALITY
   ======================================== */

function copyToClipboard(element, text) {
    // Prevent event bubbling if clicked inside a nested element
    if (event) event.stopPropagation();

    navigator.clipboard.writeText(text).then(() => {
        element.classList.add('copied');
        
        // Find notification element or create one
        let notif = element.querySelector('.copy-notification');
        if (!notif) {
            notif = document.createElement('span');
            notif.className = 'copy-notification';
            notif.textContent = 'Copied!';
            element.appendChild(notif);
        }
        
        // Force reflow
        void notif.offsetWidth;
        notif.style.opacity = '1';
        notif.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            element.classList.remove('copied');
            notif.style.opacity = '0';
            notif.style.transform = 'translateY(10px)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
