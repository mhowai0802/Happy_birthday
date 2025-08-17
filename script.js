// Durian and Carol Interaction Script
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const backBtn = document.getElementById('backBtn');
    const carolSection = document.getElementById('carolSection');
    const durianFullscreen = document.querySelector('.durian-fullscreen');
    const carolImage = document.querySelector('.carol-image');

    // Handle screen size changes
    function handleScreenSize() {
        const isMobile = window.innerWidth <= 768;
        const isLandscape = window.innerHeight < window.innerWidth;
        
        // Adjust play button size for mobile
        if (isMobile) {
            playBtn.style.fontSize = isLandscape ? '3rem' : '3.5rem';
        } else {
            playBtn.style.fontSize = '4rem';
        }
        
        // Adjust Carol section for landscape mode
        if (isLandscape && window.innerHeight < 500) {
            carolSection.style.padding = '15px';
        } else {
            carolSection.style.padding = '20px';
        }
        
        // Adjust back button position for different screen sizes
        if (window.innerWidth <= 480) {
            backBtn.style.bottom = '15px';
        } else if (window.innerWidth <= 768) {
            backBtn.style.bottom = '20px';
        } else {
            backBtn.style.bottom = '30px';
        }
    }

    // Initial screen size handling
    handleScreenSize();

    // Listen for screen size changes
    window.addEventListener('resize', handleScreenSize);
    window.addEventListener('orientationchange', () => {
        // Wait for orientation change to complete
        setTimeout(handleScreenSize, 100);
    });

    // Play button click - show Carol
    playBtn.addEventListener('click', () => {
        // Hide durian section
        durianFullscreen.style.display = 'none';
        
        // Show Carol section
        carolSection.classList.remove('hidden');
        
        // Add entrance animation
        carolSection.style.opacity = '0';
        setTimeout(() => {
            carolSection.style.opacity = '1';
        }, 10);
        
        console.log('👧 Carol appeared!');
    });

    // Back button click - return to durian
    backBtn.addEventListener('click', () => {
        // Hide Carol section
        carolSection.classList.add('hidden');
        
        // Show durian section
        durianFullscreen.style.display = 'flex';
        
        console.log('🥭 Back to durian!');
    });

    // Add some fun interactions for the play button
    playBtn.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) { // Only on desktop
            playBtn.style.transform = 'scale(1.2)';
            playBtn.style.textShadow = '3px 3px 12px rgba(0, 0, 0, 0.9)';
        }
    });

    playBtn.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) { // Only on desktop
            playBtn.style.transform = 'scale(1)';
            playBtn.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.7)';
        }
    });

    // Touch events for mobile
    playBtn.addEventListener('touchstart', () => {
        playBtn.style.transform = 'scale(0.9)';
    });

    playBtn.addEventListener('touchend', () => {
        playBtn.style.transform = 'scale(1)';
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter' || e.code === 'Space') {
            if (carolSection.classList.contains('hidden')) {
                playBtn.click();
            } else {
                backBtn.click();
            }
        }
        
        // Escape key to go back
        if (e.code === 'Escape' && !carolSection.classList.contains('hidden')) {
            backBtn.click();
        }
    });

    // Ensure proper image loading
    const durianImage = document.querySelector('.durian-image');
    durianImage.addEventListener('load', () => {
        console.log('🥭 Durian image loaded successfully!');
    });

    durianImage.addEventListener('error', () => {
        console.error('❌ Failed to load durian image');
        // Fallback to a placeholder or text
        durianImage.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.innerHTML = '<h1 style="color: white; font-size: 3rem;">🥭 Durian</h1>';
        fallback.style.cssText = 'display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;';
        durianFullscreen.appendChild(fallback);
    });

    // Handle Carol image loading
    carolImage.addEventListener('load', () => {
        console.log('👧 Carol image loaded successfully!');
    });

    carolImage.addEventListener('error', () => {
        console.error('❌ Failed to load Carol image');
        // Fallback to a placeholder
        carolImage.style.display = 'none';
        const fallback = document.createElement('div');
        fallback.innerHTML = '<h1 style="color: #FF6B6B; font-size: 3rem;">👧 Carol</h1><p style="color: #666; font-size: 1.2rem; margin-top: 20px;">Image not found</p>';
        fallback.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%; text-align: center;';
        carolSection.appendChild(fallback);
    });

    // Add smooth transitions for better UX
    carolSection.style.transition = 'opacity 0.5s ease, transform 0.3s ease';
    
    // Add entrance effect for Carol
    playBtn.addEventListener('click', () => {
        carolSection.style.transform = 'scale(0.9)';
        setTimeout(() => {
            carolSection.style.transform = 'scale(1)';
        }, 100);
    });

    console.log('🥭 Durian and Carol interaction system loaded!');
    console.log(`📱 Screen size: ${window.innerWidth}x${window.innerHeight}`);
});
