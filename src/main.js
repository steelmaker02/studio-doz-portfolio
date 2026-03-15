const CATEGORIES = ['Alle', 'Menschen', 'Natur', 'Tiere', 'Stadt'];

const IMAGES = [
  { id: 1, category: 'Menschen', src: './images/1.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'Dominikanische Republik', date: 'Januar 2025' },
  { id: 2, category: 'Menschen', src: './images/2.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Kiew', date: 'April  2022' },
  { id: 3, category: 'Menschen', src: './images/3.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Odessa', date: 'Dezember  2019' },
  { id: 4, category: 'Menschen', src: './images/4.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'München', date: 'Dezember 2025' },
  { id: 5, category: 'Menschen', src: './images/5.jpg', className: 'col-span-2 md:col-span-1 row-span-2', location: 'Hamburg', date: 'Oktober 2025' },
  { id: 6, category: 'Menschen', src: './images/6.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'Berlin', date: 'November 2025' },
  { id: 7, category: 'Menschen', src: './images/7.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Australien', date: 'Oktober 2021' },
  { id: 8, category: 'Menschen', src: './images/8.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Kiew', date: 'September 2020' },
  { id: 9, category: 'Menschen', src: './images/9.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Harz', date: 'Oktober 2022' },
  { id: 10, category: 'Menschen', src: './images/10.jpg', className: 'col-span-1 md:col-span-1 row-span-2', location: 'Türkei', date: 'März 2020' },
  { id: 11, category: 'Natur', src: './images/11.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'Saudi-Arabien', date: 'März 2023' },
  { id: 12, category: 'Natur', src: './images/12.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'China', date: 'Oktober 2024' },
  { id: 13, category: 'Natur', src: './images/13.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Rumänien', date: ' August 2019' },
  { id: 14, category: 'Natur', src: './images/14.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Kalifornien', date: 'September 2025' },
  { id: 15, category: 'Natur', src: './images/15.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Türkei', date: 'Oktober 2021' },
  { id: 16, category: 'Natur', src: './images/16.jpg', className: 'col-span-2 md:col-span-1 row-span-2', location: 'Deutschland', date: 'November 2025' },
  { id: 17, category: 'Natur', src: './images/17.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'USA', date: 'Januar 2026' },
  { id: 18, category: 'Natur', src: './images/18.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Kanada', date: 'August 2021' },
  { id: 19, category: 'Natur', src: './images/19.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Hanoi', date: 'Oktober 2024' },
  { id: 20, category: 'Natur', src: './images/20.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Niederlande', date: 'Juni 2021' },
  { id: 21, category: 'Tiere', src: './images/21.jpg', className: 'col-span-1 md:col-span-1 row-span-2', location: 'Japan', date: 'November 2019' },
  { id: 22, category: 'Tiere', src: './images/22.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'Afrika', date: 'Dezember 2023' },
  { id: 23, category: 'Tiere', src: './images/23.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'USA', date: 'März 2026' },
  { id: 24, category: 'Tiere', src: './images/24.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Berlin', date: 'Dezember 2025' },
  { id: 25, category: 'Tiere', src: './images/25.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Dezember 2025', date: 'Dezember 2025' },
  { id: 26, category: 'Tiere', src: './images/26.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Kenia', date: 'Juli 2025' },
  { id: 27, category: 'Tiere', src: './images/27.jpg', className: 'col-span-2 md:col-span-1 row-span-2', location: 'USA', date: 'März 2017' },
  { id: 28, category: 'Tiere', src: './images/28.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'England', date: 'Januar 2023' },
  { id: 29, category: 'Tiere', src: './images/29.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Schweiz', date: 'Dezember 2021' },
  { id: 30, category: 'Tiere', src: './images/30.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Norwegen', date: 'Mai 2025' },
  { id: 31, category: 'Stadt', src: './images/31.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Barcelona', date: 'April 2022' },
  { id: 32, category: 'Stadt', src: './images/32.jpg', className: 'col-span-1 md:col-span-1 row-span-2', location: 'Tiflis', date: 'März 2020' },
  { id: 33, category: 'Stadt', src: './images/33.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'London', date: 'Januar 2019' },
  { id: 34, category: 'Stadt', src: './images/34.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'Valencia', date: 'November 2025' },
  { id: 35, category: 'Stadt', src: './images/35.jpg', className: 'col-span-2 md:col-span-2 row-span-1', location: 'Sofia', date: 'Januar 2024' },
  { id: 36, category: 'Stadt', src: './images/36.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Shanghai', date: 'Oktober 2025' },
  { id: 37, category: 'Stadt', src: './images/37.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Ontario', date: 'September 2017' },
  { id: 38, category: 'Stadt', src: './images/38.jpg', className: 'col-span-2 md:col-span-1 row-span-2', location: 'Singapur', date: 'August 2025' },
  { id: 39, category: 'Stadt', src: './images/39.jpg', className: 'col-span-2 md:col-span-2 row-span-2', location: 'Hongkong', date: 'Februar 2026' },
  { id: 40, category: 'Stadt', src: './images/40.jpg', className: 'col-span-1 md:col-span-1 row-span-1', location: 'Kopenhagen', date: 'September 2018' },
];

let activeCategory = 'Alle';

document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  const startInterfaceAnimations = () => {
    const logoBtn = document.getElementById('logo-btn');
    const mainNav = document.querySelector('header nav');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    const animateIn = (el, delay) => {
      if (!el) return;
      setTimeout(() => {
        el.classList.remove('opacity-0', '-translate-y-6');
        setTimeout(() => {
          el.classList.remove('transition-all', 'duration-[1200ms]', 'ease-[cubic-bezier(0.22,1,0.36,1)]');
          el.classList.add('transition-opacity', 'duration-200');
        }, 1200);
      }, delay);
    };

    animateIn(logoBtn, 50);
    animateIn(mainNav, 200);
    animateIn(mobileBtn, 200);

    if (heroTitle) {
      setTimeout(() => {
        heroTitle.classList.remove('opacity-0', 'translate-y-12');
      }, 400);
    }

    if (heroSubtitle) {
      setTimeout(() => {
        heroSubtitle.classList.remove('opacity-0');
      }, 2000);
    }
  };

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const heroTitle = document.getElementById('hero-title');

    if (heroTitle) heroTitle.style.display = 'none';

    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('opacity-0');

        setTimeout(() => {
          preloader.style.display = 'none';

          if (heroTitle) {
            heroTitle.style.display = 'block';
          }

          startInterfaceAnimations(); 

        }, 700);
      } else {
        startInterfaceAnimations();
      }
    }, 2000);
  });

  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  const scrollBottomBtn = document.getElementById('scroll-bottom-btn');
  const floatingNav = document.getElementById('floating-nav');
  const footer = document.querySelector('footer');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY > 50) {
      header.classList.add('bg-[#F7F7F7]/90', 'backdrop-blur-md', 'border-b', 'border-[#050505]/10');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-[#F7F7F7]/90', 'backdrop-blur-md', 'border-b', 'border-[#050505]/10');
      header.classList.add('bg-transparent');
    }

    if (scrollTopBtn) {
      if (scrollY > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-5');
      } else {
        scrollTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-5');
      }
    }

    if (scrollBottomBtn) {
      if (scrollY + windowHeight >= documentHeight - 100) {
        scrollBottomBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-5');
      } else {
        scrollBottomBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-5');
      }
    }

    if (footer && floatingNav) {
      const footerRect = footer.getBoundingClientRect();
      const overlap = windowHeight - footerRect.top;

      if (overlap > 0) {
        floatingNav.style.transform = `translateY(-${overlap}px)`;
      } else {
        floatingNav.style.transform = 'translateY(0)';
      }
    }
  });

  const logoBtn = document.getElementById('logo-btn');
  if (logoBtn) {
    logoBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (scrollBottomBtn) {
    scrollBottomBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    });
  }

  const galleryMenuBtn = document.getElementById('gallery-menu-btn');
  const galleryDropdown = document.getElementById('gallery-dropdown');
  let isGalleryOpen = false;

  galleryMenuBtn.addEventListener('click', () => {
    isGalleryOpen = !isGalleryOpen;
    if (isGalleryOpen) {
      galleryDropdown.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
    } else {
      galleryDropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
    }
  });

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'text-left px-4 py-3 hover:bg-[#050505] hover:text-[#F7F7F7] transition-colors text-xs uppercase tracking-[0.15em] cursor-pointer';
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      setCategory(cat);
      isGalleryOpen = false;
      galleryDropdown.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });
    galleryDropdown.appendChild(btn);
  });

  const categoryNav = document.getElementById('category-nav');
  function renderCategoryNav() {
    categoryNav.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const btn = document.createElement('button');
      const isActive = activeCategory === cat;
      btn.className = `cursor-pointer px-4 md:px-0 py-2 md:py-2 text-[10px] md:text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 border md:border-0 md:border-b-2 ${isActive
        ? 'bg-[#050505] md:bg-transparent text-[#F7F7F7] md:text-[#050505] border-[#050505] font-bold opacity-100'
        : 'bg-transparent text-[#050505] border-[#050505]/20 md:border-transparent font-medium opacity-60 hover:opacity-100'
        }`;
      btn.textContent = cat;
      btn.addEventListener('click', () => setCategory(cat));
      categoryNav.appendChild(btn);
    });
  }

  const galleryGrid = document.getElementById('gallery-grid');

  function renderGallery() {
    let filteredImages = [];
    if (activeCategory === 'Alle') {
      const categoryCounts = {};
      filteredImages = IMAGES.filter(img => {
        const count = categoryCounts[img.category] || 0;
        if (count < 5) {
          categoryCounts[img.category] = count + 1;
          return true;
        }
        return false;
      });
    } else {
      filteredImages = IMAGES.filter(img => img.category === activeCategory);
    }

    galleryGrid.innerHTML = '';
    filteredImages.forEach(img => {
      const div = document.createElement('div');
      div.className = `relative group bg-[#EAEAEA] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:z-10 hover:shadow-2xl cursor-pointer ${img.className} opacity-0 scale-95`;

      div.innerHTML = `
        <img
          src="${img.src}" 
          alt="Fotografie: ${img.category} in ${img.location}" 
          loading="lazy" 
          decoding="async"
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-[#050505]/20 to-transparent flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span class="text-[#FAFAFA] text-[10px] md:text-xs uppercase tracking-widest font-semibold drop-shadow-md">
            ${img.location} — ${img.date}
          </span>
        </div>
      `;

      div.addEventListener('click', () => {
        if (typeof openLightbox === 'function') openLightbox(img);
      });

      galleryGrid.appendChild(div);

      requestAnimationFrame(() => {
        setTimeout(() => {
          div.classList.remove('opacity-0', 'scale-95');
          div.classList.add('opacity-100', 'scale-100');
        }, 50);
      });
    });
  }

  function setCategory(cat) {
    activeCategory = cat;
    renderCategoryNav();
    renderGallery();
  }

  renderCategoryNav();
  renderGallery();

  function setupModal(openBtnId, closeBtnId, modalId, contentId) {
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.getElementById(closeBtnId);
    const modal = document.getElementById(modalId);
    const content = document.getElementById(contentId);

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
        if (modalId === 'mobile-menu-modal') {
          modal.classList.remove('-translate-y-5');
        }
        if (content) {
          content.classList.remove('opacity-0', 'translate-y-5');
        }
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        if (modalId === 'mobile-menu-modal') {
          modal.classList.add('-translate-y-5');
        }
        if (content) {
          content.classList.add('opacity-0', 'translate-y-5');
        }
      });
    }
  }

  setupModal('info-btn', 'close-info-btn', 'info-modal', 'info-content');
  setupModal('contact-btn', 'close-contact-btn', 'contact-modal', 'contact-form');
  setupModal('datenschutz-btn', 'close-datenschutz-btn', 'datenschutz-modal', 'datenschutz-content');
  setupModal('impressum-btn', 'close-impressum-btn', 'impressum-modal', 'impressum-content');
  setupModal('mobile-menu-btn', 'close-mobile-menu-btn', 'mobile-menu-modal', null);

  document.getElementById('mobile-galerie-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu-modal').classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('mobile-info-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu-modal').classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
    document.getElementById('info-modal').classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('info-content').classList.remove('opacity-0', 'translate-y-5');
  });
  document.getElementById('mobile-contact-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu-modal').classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
    document.getElementById('contact-modal').classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('contact-form').classList.remove('opacity-0', 'translate-y-5');
  });
  document.getElementById('mobile-logo-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu-modal').classList.add('opacity-0', 'pointer-events-none', '-translate-y-5');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contact-modal').classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('contact-form').classList.add('opacity-0', 'translate-y-5');
  });

  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');

  window.openLightbox = function (img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = `Fotografie: ${img.category} in ${img.location}`;
    lightboxCaption.textContent = `${img.location} — ${img.date}`;

    lightboxModal.classList.remove('opacity-0', 'pointer-events-none');

    requestAnimationFrame(() => {
      setTimeout(() => {
        lightboxImg.classList.remove('scale-95');
        lightboxImg.classList.add('scale-100');
        lightboxCaption.classList.remove('opacity-0', 'translate-y-2');
      }, 50);
    });
  };

  function closeLightbox() {
    lightboxModal.classList.add('opacity-0', 'pointer-events-none');
    lightboxImg.classList.remove('scale-100');
    lightboxImg.classList.add('scale-95');
    lightboxCaption.classList.add('opacity-0', 'translate-y-2');

    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  }

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target.tagName !== 'IMG') {
        closeLightbox();
      }
    });
  }
});
