
// JavaScript functionality for the website

// Handle logo click on home page
function handleLogoClick() {
    console.log('Maps logo clicked!');
    // Add any additional navigation logic here if needed
    // For example: window.location.href = 'maps.html';
}

// Handle map clicks on SMP page
function handleMapClick(mapName) {
    const mapUrls = {
        'Overworld': 'http://n9.tokodukun.com:25610/#world:-385:0:203:677:0:0:0:0:perspective',
        'Nether': 'http://n9.tokodukun.com:25610/#world_nether:0:0:0:1500:0:0:0:0:perspective',
        'End': 'http://n9.tokodukun.com:25610/#world_the_end:0:0:0:1500:0:0:0:0:perspective'
    };
    
    console.log(`${mapName} map clicked!`);
    
    // Open the map URL in a new tab
    const url = mapUrls[mapName] || 'https://example.com';
    window.open(url, '_blank');
}

// Smooth scroll to skills section
function scrollToSkills() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation classes when elements come into view
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
    
    // Observe elements that should animate in
    const animatedElements = document.querySelectorAll('.skill-card, .map-card, .about-section, .cta-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add responsive menu toggle (if needed in the future)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activated!
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        
        console.log('🎉 Easter egg activated! Colors inverted for 3 seconds!');
        konamiCode = [];
    }
});
