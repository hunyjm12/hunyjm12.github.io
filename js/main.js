// JavaScript for Jiaming Yao's Academic Homepage

document.addEventListener('DOMContentLoaded', () => {
    // The site uses a permanent dark theme (no light-mode toggle).

    // 2. Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Avatar Auto-detector (tries loading avatar.jpg if uploaded)
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        const customAvatar = new Image();
        customAvatar.src = 'avatar.jpg';
        customAvatar.onload = () => {
            profileImg.src = 'avatar.jpg';
        };
    }

    // 4. Toast Notification Function
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    let toastTimeout;

    function showToast(message) {
        if (!toast || !toastMsg) return;
        toastMsg.textContent = message;
        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('translate-y-0', 'opacity-100');
            toast.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    }

    // 5. Copy Email Button
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const email = 'yjmphysics@outlook.com';
            navigator.clipboard.writeText(email).then(() => {
                showToast('Email address copied to clipboard!');
            }).catch(() => {
                showToast('Email: yjmphysics@outlook.com');
            });
        });
    }

    // 6. Copy BibTeX Citation
    const copyBibtexBtn = document.getElementById('copy-bibtex-btn');
    if (copyBibtexBtn) {
        const bibtex = `@mastersthesis{Yao2022ALCS,
  author       = {Yao, Jiaming},
  title        = {The Optical and Infrared Properties of Dusty Star-forming Galaxies in ALCS},
  school       = {Faculty of Science, University of Copenhagen / Cosmic Dawn Center},
  year         = {2022},
  month        = {May},
  type         = {Master's thesis (60 ECTS)},
  note         = {Supervised by Prof. Francesco Maria Valentino and Prof. Georgios Magdis}
}`;

        copyBibtexBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(bibtex).then(() => {
                showToast('BibTeX citation copied to clipboard!');
            }).catch(() => {
                showToast('Failed to copy BibTeX.');
            });
        });
    }

    // 7. Active Scrollspy for Nav Links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});
