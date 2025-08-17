// Birthday Celebration Script
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎂 Birthday celebration loaded!');
    
    // Create audio element for boom sound
    const boomAudio = new Audio('boom.mp3');
    boomAudio.volume = 0.7; // Set volume to 70%
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.birthday-image');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Add scroll event listener to play boom sound at top
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if scrolled to top (within 50px threshold)
        if (scrollTop <= 50 && lastScrollTop > 50) {
            playBoomSound();
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Function to play boom sound
    function playBoomSound() {
        try {
            boomAudio.currentTime = 0; // Reset audio to beginning
            boomAudio.play().then(() => {
                console.log('🔊 Boom sound played!');
            }).catch(error => {
                console.log('Audio play failed:', error);
            });
        } catch (error) {
            console.log('Error playing audio:', error);
        }
    }
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'ArrowDown') {
            e.preventDefault();
            window.scrollBy(0, 100);
        } else if (e.code === 'ArrowUp') {
            e.preventDefault();
            window.scrollBy(0, -100);
        } else if (e.code === 'Home') {
            e.preventDefault();
            window.scrollTo(0, 0);
            // Play boom sound when using Home key to go to top
            setTimeout(playBoomSound, 100);
        } else if (e.code === 'End') {
            e.preventDefault();
            window.scrollTo(0, document.body.scrollHeight);
        }
    });
    
    // Add touch/swipe support for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - scroll down
                window.scrollBy(0, 200);
            } else {
                // Swipe down - scroll up
                window.scrollBy(0, -200);
            }
        }
    }
    
    // Add smooth scroll to top button
    createScrollToTopButton();
});

// Create scroll to top button
function createScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '🎂';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #333;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        transform: scale(0.8);
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'scale(1)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'scale(0.8)';
        }
    });
    
    // Scroll to top on click and play boom sound
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Play boom sound after scrolling to top
        setTimeout(() => {
            const boomAudio = new Audio('boom.mp3');
            boomAudio.volume = 0.7;
            boomAudio.play().then(() => {
                console.log('🔊 Boom sound played from button!');
            }).catch(error => {
                console.log('Audio play failed:', error);
            });
        }, 500); // Wait for scroll animation to complete
    });
    
    // Hover effects
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
        scrollButton.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
        scrollButton.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    });
}

// Add simple interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to the birthday image
    const birthdayImage = document.querySelector('.birthday-image');
    if (birthdayImage) {
        birthdayImage.addEventListener('click', () => {
            // Create a simple scale effect
            birthdayImage.style.transform = 'scale(1.1)';
            setTimeout(() => {
                birthdayImage.style.transform = 'scale(1)';
            }, 200);
        });
    }
    
    // Add simple hover effect to title
    const title = document.querySelector('.birthday-title');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.transform = 'scale(1.05)';
        });
        
        title.addEventListener('mouseleave', () => {
            title.style.transform = 'scale(1)';
        });
    }
});
