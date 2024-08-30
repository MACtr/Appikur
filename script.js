document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('section');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Add hover effect to social media icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });

    // Add magic sparkle effect
    const createSparkle = (x, y) => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        const size = Math.random() * 20 + 5;
        const duration = Math.random() * 1 + 0.5;
        
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkle.style.animationDuration = `${duration}s`;

        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    };

    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) {
            createSparkle(e.clientX, e.clientY);
        }
    });

    // Add floating icons
    const icons = ['🚀', '💫', '🌟', '🌠', '🌌', '🔮', '👽', '🛸'];
    const createFloatingIcon = () => {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = `${Math.random() * window.innerWidth}px`;
        icon.style.top = `${Math.random() * window.innerHeight}px`;
        icon.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(icon);

        setTimeout(() => {
            icon.remove();
        }, 10000);
    };

    setInterval(createFloatingIcon, 1000);

    // Surprise popup
    const surprisePopup = document.getElementById('surprise-popup');
    const closeButton = document.getElementById('close-surprise');

    const showSurprise = () => {
        surprisePopup.classList.remove('hidden');
    };

    closeButton.addEventListener('click', () => {
        surprisePopup.classList.add('hidden');
    });

    // Show surprise randomly
    setInterval(() => {
        if (Math.random() < 0.1 && surprisePopup.classList.contains('hidden')) {
            showSurprise();
        }
    }, 30000);

    // Flying saucer
    const flyingSaucer = document.getElementById('flying-saucer');
    
    const showFlyingSaucer = () => {
        flyingSaucer.classList.remove('hidden');
        setTimeout(() => {
            flyingSaucer.classList.add('hidden');
        }, 10000);
    };

    setInterval(() => {
        if (Math.random() < 0.05) {
            showFlyingSaucer();
        }
    }, 60000);

    // Fortune cookie
    const fortuneCookie = document.getElementById('fortune-cookie');
    const fortuneMessage = document.getElementById('fortune-message');
    const closeFortune = document.getElementById('close-fortune');

    const fortunes = [
        "Büyük bir keşif yapacaksın!",
        "Yakında ilham verici biriyle tanışacaksın.",
        "Hayallerini gerçekleştirmek için cesur ol!",
        "Yeni bir yetenek keşfedeceksin.",
        "Bugün, geleceğini şekillendirecek bir karar vereceksin."
    ];

    const showFortune = () => {
        fortuneMessage.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
        fortuneCookie.classList.remove('hidden');
    };

    closeFortune.addEventListener('click', () => {
        fortuneCookie.classList.add('hidden');
    });

    setInterval(() => {
        if (Math.random() < 0.05 && fortuneCookie.classList.contains('hidden')) {
            showFortune();
        }
    }, 45000);

    // Easter egg: Konami Code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                alert('Gizli kodu buldunuz! Evrenin sırları sizinle olsun!');
                document.body.style.animation = 'colorChange 5s infinite alternate';
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    // Logo click surprise
    const logo = document.getElementById('logo');
    logo.addEventListener('click', () => {
        logo.style.animation = 'spin 1s linear';
        setTimeout(() => {
            logo.style.animation = '';
        }, 1000);
    });

    // Gravity effect on hover
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.05)';
            section.style.transition = 'transform 0.3s ease';
        });
        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
        });
    });
});