/* ============================================
   Olas General Merchant & Store — App Logic
   ============================================ */

// ── Product Catalog — Real Nigerian Brands ───
const PRODUCTS = [
  // Rice — Nigerian staples
  { id: 'rice-mamagold', name: 'Mama Gold Rice', category: 'rice', brand: 'Mama Gold', desc: 'Premium Mama Gold long grain parboiled rice — Nigeria\'s favourite.', price: 'From ₦2,800', bg: 'bg-rice', badge: 'Popular', image: 'assets/products/rice.jpg' },
  { id: 'rice-royal', name: 'Royal Stallion Rice', category: 'rice', brand: 'Royal Stallion', desc: 'Royal Stallion Thai parboiled rice — fluffy and aromatic.', price: 'From ₦3,200', bg: 'bg-rice', badge: 'Premium', image: 'assets/rice-essentials.jpg' },
  { id: 'rice-short', name: 'Short Grain Rice', category: 'rice', brand: 'Local', desc: 'Quality short grain rice — perfect for everyday Nigerian meals.', price: 'From ₦2,500', bg: 'bg-rice', image: 'assets/products/rice.jpg' },
  { id: 'rice-long', name: 'Long Grain Rice', category: 'rice', brand: 'Local', desc: 'Fine long grain rice — ideal for jollof and fried rice.', price: 'From ₦2,600', bg: 'bg-rice', image: 'assets/rice-essentials.jpg' },
  { id: 'rice-ofada', name: 'Ofada Rice', category: 'rice', brand: 'Local', desc: 'Authentic Nigerian Ofada rice — local and unpolished.', price: 'From ₦3,500', bg: 'bg-rice', badge: 'Local', image: 'assets/products/rice.jpg' },

  // Dangote Products
  { id: 'dangote-flour', name: 'Dangote Flour', category: 'flour', brand: 'Dangote', desc: 'Dangote wheat flour 2kg & 5kg — Nigeria\'s No.1 baking flour.', price: 'From ₦1,200', bg: 'bg-flour', badge: 'Best Seller', logo: 'assets/brands/dangote.svg', image: 'assets/products/flour.jpg' },
  { id: 'dangote-sugar', name: 'Dangote Sugar', category: 'flour', brand: 'Dangote', desc: 'Dangote granulated sugar — 1kg, 2kg, 5kg & 50kg bags available.', price: 'From ₦1,400', bg: 'bg-flour', badge: 'Dangote', logo: 'assets/brands/dangote.svg', image: 'assets/products/flour.jpg' },
  { id: 'dangote-pasta', name: 'Dangote Pasta', category: 'flour', brand: 'Dangote', desc: 'Dangote spaghetti & macaroni — trusted quality pasta.', price: 'From ₦450', bg: 'bg-flour', logo: 'assets/brands/dangote.svg', image: 'assets/products/flour.jpg' },
  { id: 'dangote-semovita', name: 'Dangote Semovita', category: 'flour', brand: 'Dangote', desc: 'Dangote semovita — smooth, easy-to-prepare swallow.', price: 'From ₦550', bg: 'bg-flour', logo: 'assets/brands/dangote.svg', image: 'assets/products/flour.jpg' },
  { id: 'dangote-salt', name: 'Dangote Salt', category: 'flour', brand: 'Dangote', desc: 'Dangote iodized table salt — essential for every kitchen.', price: 'From ₦200', bg: 'bg-flour', logo: 'assets/brands/dangote.svg', image: 'assets/products/flour.jpg' },

  // Other Flour brands
  { id: 'flour-honeywell', name: 'Honeywell Flour', category: 'flour', brand: 'Honeywell', desc: 'Honeywell superfine wheat flour — perfect for bread & pastries.', price: 'From ₦1,150', bg: 'bg-flour', logo: 'assets/brands/honeywell.svg', image: 'assets/products/flour.jpg' },
  { id: 'flour-bua', name: 'BUA Flour', category: 'flour', brand: 'BUA', desc: 'BUA premium wheat flour — smooth texture, excellent results.', price: 'From ₦1,100', bg: 'bg-flour', logo: 'assets/brands/bua.svg', image: 'assets/products/flour.jpg' },
  { id: 'flour-golden', name: 'Golden Penny Flour', category: 'flour', brand: 'Golden Penny', desc: 'Golden Penny flour & semovita — Nigeria\'s household staple.', price: 'From ₦1,180', bg: 'bg-flour', logo: 'assets/brands/golden-penny.svg', image: 'assets/products/flour.jpg' },
  { id: 'golden-semovita', name: 'Golden Penny Semovita', category: 'flour', brand: 'Golden Penny', desc: 'Golden Penny semovita 1kg & 2kg packs.', price: 'From ₦550', bg: 'bg-flour', logo: 'assets/brands/golden-penny.svg', image: 'assets/products/flour.jpg' },

  // NBC — Nigerian Bottling Company Drinks
  { id: 'nbc-cocacola', name: 'Coca-Cola (NBC)', category: 'drinks', brand: 'NBC', desc: 'Nigerian Bottling Company Coca-Cola — 35cl, 50cl, 1L PET & cans.', price: 'From ₦150', bg: 'bg-drinks', badge: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/soda.jpg' },
  { id: 'nbc-fanta', name: 'Fanta Orange (NBC)', category: 'drinks', brand: 'NBC', desc: 'NBC Fanta Orange — refreshing citrus taste, all sizes.', price: 'From ₦150', bg: 'bg-drinks', badge: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/orange.jpg' },
  { id: 'nbc-sprite', name: 'Sprite (NBC)', category: 'drinks', brand: 'NBC', desc: 'NBC Sprite lemon-lime — crisp, clean and refreshing.', price: 'From ₦150', bg: 'bg-drinks', badge: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/lemon.jpg' },
  { id: 'nbc-schweppes', name: 'Schweppes (NBC)', category: 'drinks', brand: 'NBC', desc: 'NBC Schweppes bitter lemon & tonic — premium mixers.', price: 'From ₦200', bg: 'bg-drinks', badge: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/lemon.jpg' },
  { id: 'nbc-fivealive', name: 'Five Alive (NBC)', category: 'drinks', brand: 'NBC', desc: 'NBC Five Alive fruit juice — citrus burst & pulpy orange.', price: 'From ₦250', bg: 'bg-drinks', badge: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/orange.jpg' },
  { id: 'nbc-eva', name: 'Eva Water (NBC)', category: 'drinks', brand: 'NBC', desc: 'NBC Eva table water — 75cl & 1.5L bottles.', price: 'From ₦100', bg: 'bg-drinks', badge: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/water.jpg' },

  // Other Nigerian Drinks
  { id: 'drink-pepsi', name: 'Pepsi', category: 'drinks', brand: 'Pepsi', desc: 'Pepsi cola — bold taste, all pack sizes available.', price: 'From ₦150', bg: 'bg-drinks', image: 'assets/drinks/cola.jpg' },
  { id: 'drink-biggcola', name: 'Big Cola', category: 'drinks', brand: 'Big Cola', desc: 'Big Cola Nigeria — great value, refreshing cola taste.', price: 'From ₦120', bg: 'bg-drinks', image: 'assets/drinks/soda.jpg' },
  { id: 'drink-hollandia', name: 'Hollandia Yoghurt', category: 'drinks', brand: 'Hollandia', desc: 'Chi Hollandia yoghurt drink — creamy, healthy & delicious.', price: 'From ₦350', bg: 'bg-drinks', badge: 'Chi', image: 'assets/drinks/yoghurt.jpg' },
  { id: 'drink-peak', name: 'Peak Milk', category: 'drinks', brand: 'Peak', desc: 'Peak evaporated & powdered milk — Nigeria\'s leading dairy brand.', price: 'From ₦400', bg: 'bg-drinks', image: 'assets/drinks/yoghurt.jpg' },
  { id: 'drink-powerhorse', name: 'Power Horse Energy', category: 'drinks', brand: 'Power Horse', desc: 'Power Horse energy drink — popular Nigerian energy booster.', price: 'From ₦300', bg: 'bg-drinks', badge: 'Energy', image: 'assets/drinks/energy.jpg' },
  { id: 'drink-fearless', name: 'Fearless Energy Drink', category: 'drinks', brand: 'Fearless', desc: 'Fearless energy drink — bold flavour, extra power.', price: 'From ₦250', bg: 'bg-drinks', badge: 'Energy', image: 'assets/drinks/energy.jpg' },
  { id: 'drink-spirit', name: 'Spirit Drinks', category: 'drinks', brand: 'Various', desc: 'Premium spirit beverages — various Nigerian & imported brands.', price: 'From ₦500', bg: 'bg-drinks', image: 'assets/products/drinks.jpg' },
  { id: 'drink-monster', name: 'Monster Energy', category: 'drinks', brand: 'Monster', desc: 'Monster Energy drink — unleash the beast!', price: 'From ₦600', bg: 'bg-drinks', badge: 'Energy', image: 'assets/drinks/energy.jpg' },
  { id: 'drink-redbull', name: 'Red Bull', category: 'drinks', brand: 'Red Bull', desc: 'Red Bull energy drink — gives you wings.', price: 'From ₦700', bg: 'bg-drinks', badge: 'Energy', image: 'assets/drinks/energy.jpg' },

  // Gift Items
  { id: 'gift-rice-bag', name: 'Rice Gift Bag', category: 'gifts', brand: 'Custom', desc: 'Customised Mama Gold / Royal Stallion rice gift bag for events.', price: 'From ₦5,000', bg: 'bg-gifts', badge: 'Custom', image: 'assets/products/gifts.jpg' },
  { id: 'gift-dangote-pack', name: 'Dangote Gift Pack', category: 'gifts', brand: 'Dangote', desc: 'Dangote flour + sugar + pasta combo — beautifully packaged.', price: 'From ₦4,500', bg: 'bg-gifts', logo: 'assets/brands/dangote.svg', image: 'assets/products/gifts.jpg' },
  { id: 'gift-drink-hamper', name: 'NBC Drinks Hamper', category: 'gifts', brand: 'NBC', desc: 'NBC drinks hamper — Coca-Cola, Fanta, Sprite & more.', price: 'From ₦8,000', bg: 'bg-gifts', badge: 'Hamper', logo: 'assets/brands/nbc.svg', image: 'assets/products/gifts.jpg' },
  { id: 'gift-combo', name: 'Full Combo Gift Set', category: 'gifts', brand: 'Custom', desc: 'Rice + Dangote flour + NBC drinks — fully customised gift set.', price: 'From ₦12,000', bg: 'bg-gifts', badge: 'Premium', image: 'assets/products/gifts.jpg' },
];

// ── Drink Adverts — NBC & Nigerian Brands ───
const DRINK_ADS = [
  { id: 'ad-cocacola', name: 'Coca-Cola (NBC)', tagline: 'Nigerian Bottling Company — Taste the Feeling!', brand: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/soda.jpg', productId: 'nbc-cocacola' },
  { id: 'ad-fanta', name: 'Fanta Orange (NBC)', tagline: 'Wanta Fanta! — NBC Nigeria', brand: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/orange.jpg', productId: 'nbc-fanta' },
  { id: 'ad-sprite', name: 'Sprite (NBC)', tagline: 'Obey Your Thirst — NBC Sprite', brand: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/lemon.jpg', productId: 'nbc-sprite' },
  { id: 'ad-schweppes', name: 'Schweppes (NBC)', tagline: 'Schweppes — Quality Mixers from NBC', brand: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/lemon.jpg', productId: 'nbc-schweppes' },
  { id: 'ad-fivealive', name: 'Five Alive (NBC)', tagline: 'Real Fruit Juice — NBC Five Alive', brand: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/orange.jpg', productId: 'nbc-fivealive' },
  { id: 'ad-eva', name: 'Eva Water (NBC)', tagline: 'Pure Refreshment — NBC Eva Water', brand: 'NBC', logo: 'assets/brands/nbc.svg', image: 'assets/drinks/water.jpg', productId: 'nbc-eva' },
  { id: 'ad-pepsi', name: 'Pepsi', tagline: 'For the Love of It — Bold & Fresh', brand: 'Pepsi', image: 'assets/drinks/cola.jpg', productId: 'drink-pepsi' },
  { id: 'ad-biggcola', name: 'Big Cola', tagline: 'Big Taste, Big Value — Made for Nigeria', brand: 'Big Cola', image: 'assets/drinks/soda.jpg', productId: 'drink-biggcola' },
  { id: 'ad-hollandia', name: 'Hollandia Yoghurt', tagline: 'Creamy Chi Hollandia — Healthy & Delicious', brand: 'Hollandia', image: 'assets/drinks/yoghurt.jpg', productId: 'drink-hollandia' },
  { id: 'ad-powerhorse', name: 'Power Horse', tagline: 'Nigerian Energy — Power Horse Boost!', brand: 'Power Horse', image: 'assets/drinks/energy.jpg', productId: 'drink-powerhorse' },
  { id: 'ad-fearless', name: 'Fearless Energy', tagline: 'Be Fearless — Nigerian Energy Drink', brand: 'Fearless', image: 'assets/drinks/energy.jpg', productId: 'drink-fearless' },
  { id: 'ad-dangote', name: 'Dangote Sugar & Flour', tagline: 'Dangote — Building Nigeria, Feeding Homes', brand: 'Dangote', logo: 'assets/brands/dangote.svg', image: 'assets/products/flour.jpg', productId: 'dangote-flour' },
];

// ── State ────────────────────────────────────
let cart = loadCart();
let currentCategory = 'all';
let carouselIndex = 0;
let selectedProduct = null;

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('olasCart') || '[]');
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem('olasCart', JSON.stringify(cart));
}

// ── DOM Ready ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initHeader();
  initNav();
  initProducts();
  initOrderChecklist();
  initDrinksCarousel();
  initMarquee();
  initOrderForm();
  initModal();
  initScrollAnimations();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ── Page Loader ──────────────────────────────
function initLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  const hide = () => setTimeout(() => loader.classList.add('hidden'), 500);
  if (document.readyState === 'complete') hide();
  else window.addEventListener('load', hide);
}

// ── Header Scroll ────────────────────────────
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── Navigation ───────────────────────────────
function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = document.querySelectorAll('.nav-link');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => menu.classList.toggle('open'));

  links.forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const current = page === '' || page === '/' ? 'index.html' : page;
  links.forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    link.classList.toggle('active', href === current);
  });
}

// ── Product visual helper ────────────────────
function renderProductVisual(p) {
  if (p.image) {
    return `<img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><span class="product-fallback" style="display:none">${p.brand || '📦'}</span>`;
  }
  if (p.logo) {
    return `<img src="${p.logo}" alt="${p.brand}" class="product-brand-img" />`;
  }
  return `<span class="product-fallback">${p.brand || '📦'}</span>`;
}

// ── Products Grid ────────────────────────────
function initProducts() {
  const grid = document.getElementById('productsGrid');
  const tabs = document.getElementById('categoryTabs');
  if (!grid || !tabs) return;

  function renderProducts(category) {
    const filtered = category === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === category);

    grid.innerHTML = filtered.map((p, i) => `
      <div class="product-card" style="animation-delay: ${i * 0.05}s" data-id="${p.id}">
        <div class="product-visual ${p.bg}">
          ${p.badge && p.badge !== 'NBC' ? `<span class="product-badge">${p.badge}</span>` : ''}
          ${renderProductVisual(p)}
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-footer">
            <div class="product-price">${p.price} <span>/ pack</span></div>
            <button class="btn-order" data-id="${p.id}">Order</button>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.btn-order').forEach(btn => {
      btn.addEventListener('click', () => openOrderModal(btn.dataset.id));
    });
  }

  tabs.addEventListener('click', (e) => {
    if (!e.target.classList.contains('tab')) return;
    tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    renderProducts(currentCategory);
  });

  renderProducts('all');
}

function initOrderChecklist() {
  const orderList = document.getElementById('orderItemsList');
  if (!orderList) return;

  orderList.innerHTML = PRODUCTS.map(p => {
    const inCart = cart.find(c => c.id === p.id);
    return `
      <label class="order-item-check">
        <input type="checkbox" name="items" value="${p.name}" data-id="${p.id}" ${inCart ? 'checked' : ''} />
        <span>${p.brand ? `[${p.brand}] ` : ''}${p.name}${inCart ? ` (x${inCart.qty})` : ''}</span>
      </label>
    `;
  }).join('');
}

// ── Drinks Carousel ──────────────────────────
function initDrinksCarousel() {
  const track = document.getElementById('carouselTrack');
  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');
  if (!track || !prev || !next) return;

  track.innerHTML = DRINK_ADS.map(ad => `
    <div class="drink-ad-card" data-id="${ad.id}">
      <div class="drink-ad-visual">
        ${ad.image
          ? `<img src="${ad.image}" alt="${ad.name}" class="drink-ad-product-img" loading="lazy" />`
          : `<div class="drink-ad-placeholder">${ad.brand}</div>`
        }
      </div>
      <div class="drink-ad-body">
        <span class="drink-ad-brand">${ad.brand}</span>
        <h3>${ad.name}</h3>
        <p>${ad.tagline}</p>
        <button class="btn btn-primary order-drink-btn" data-id="${ad.productId}">Order Now</button>
      </div>
    </div>
  `).join('');

  function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 968) return 2;
    return 3;
  }

  function updateCarousel() {
    const card = track.querySelector('.drink-ad-card');
    if (!card) return;
    const cardWidth = card.offsetWidth + 24;
    const maxIndex = Math.max(0, DRINK_ADS.length - getVisibleCount());
    carouselIndex = Math.min(carouselIndex, maxIndex);
    track.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
  }

  prev.addEventListener('click', () => {
    carouselIndex = Math.max(0, carouselIndex - 1);
    updateCarousel();
  });

  next.addEventListener('click', () => {
    const maxIndex = Math.max(0, DRINK_ADS.length - getVisibleCount());
    carouselIndex = Math.min(maxIndex, carouselIndex + 1);
    updateCarousel();
  });

  track.querySelectorAll('.order-drink-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = PRODUCTS.find(p => p.id === btn.dataset.id);
      if (product) {
        openOrderModal(product.id);
      } else {
        window.location.href = 'order.html';
      }
    });
  });

  window.addEventListener('resize', updateCarousel);

  // Auto-advance
  setInterval(() => {
    const maxIndex = Math.max(0, DRINK_ADS.length - getVisibleCount());
    carouselIndex = carouselIndex >= maxIndex ? 0 : carouselIndex + 1;
    updateCarousel();
  }, 5000);
}

// ── Marquee ──────────────────────────────────
function initMarquee() {
  const marquee = document.getElementById('marqueeContent');
  if (!marquee) return;
  const items = DRINK_ADS.map(ad =>
    `<div class="marquee-item"><span>${ad.brand}</span> ${ad.name} — ${ad.tagline}</div>`
  ).join('');

  marquee.innerHTML = items + items;
}

// ── Order Form ───────────────────────────────
function initOrderForm() {
  const form = document.getElementById('orderForm');
  const whatsappBtn = document.getElementById('whatsappOrder');
  if (!form || !whatsappBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getOrderData();
    if (!data.items.length) {
      showToast('Please select at least one item!');
      return;
    }

    const subject = encodeURIComponent('Order from Olas General Merchant');
    const body = encodeURIComponent(formatOrderMessage(data));
    const email = 'azomolara10@gmail.com';
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    showToast('Order prepared! Your email app will open.');
  });

  whatsappBtn.addEventListener('click', () => {
    const data = getOrderData();
    if (!data.items.length) {
      showToast('Please select at least one item!');
      return;
    }
    const message = encodeURIComponent(formatOrderMessage(data));
    window.open(`https://wa.me/2348161780384?text=${message}`, '_blank');
  });
}

function getOrderData() {
  const name = document.getElementById('customerName').value;
  const phone = document.getElementById('customerPhone').value;
  const email = document.getElementById('customerEmail').value;
  const notes = document.getElementById('orderNotes').value;
  const items = [...document.querySelectorAll('#orderItemsList input:checked')]
    .map(cb => cb.value);

  cart.forEach(item => {
    if (!items.includes(item.name)) items.push(`${item.name} x${item.qty}`);
  });

  return { name, phone, email, notes, items };
}

function formatOrderMessage(data) {
  let msg = `🛒 *Order for Olas General Merchant*\n\n`;
  msg += `👤 Name: ${data.name}\n`;
  msg += `📞 Phone: ${data.phone}\n`;
  if (data.email) msg += `📧 Email: ${data.email}\n`;
  msg += `\n📦 *Items:*\n`;
  data.items.forEach(item => { msg += `  • ${item}\n`; });
  if (data.notes) msg += `\n📝 Notes: ${data.notes}\n`;
  msg += `\n📍 Pickup: No 10B Mukadam Junction, Ajegunle, Lagos`;
  return msg;
}

// ── Order Modal ──────────────────────────────
function initModal() {
  const modal = document.getElementById('orderModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');
  const form = document.getElementById('quickOrderForm');
  if (!modal || !backdrop || !closeBtn || !form) return;

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!selectedProduct) return;

    const qty = parseInt(document.getElementById('quickQty').value) || 1;
    const existing = cart.find(c => c.id === selectedProduct.id);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: selectedProduct.id, name: selectedProduct.name, qty });
    }

    saveCart();
    showToast(`${selectedProduct.name} x${qty} added — opening order page…`);
    closeModal();
    setTimeout(() => { window.location.href = 'order.html'; }, 700);
  });

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('quickQty');
      let val = parseInt(input.value) || 1;
      if (btn.dataset.action === 'plus') val = Math.min(99, val + 1);
      else val = Math.max(1, val - 1);
      input.value = val;
    });
  });
}

function openOrderModal(productId) {
  selectedProduct = PRODUCTS.find(p => p.id === productId);
  if (!selectedProduct) return;

  const modal = document.getElementById('orderModal');
  const productEl = document.getElementById('modalProduct');
  if (!modal || !productEl) {
    window.location.href = 'order.html';
    return;
  }

  productEl.innerHTML = `
    <div class="modal-product-visual">${renderProductVisual(selectedProduct)}</div>
    <h3>${selectedProduct.name}</h3>
    ${selectedProduct.brand ? `<p class="modal-brand">${selectedProduct.brand}</p>` : ''}
    <p style="color: var(--text-muted); margin-top: 8px;">${selectedProduct.price}</p>
  `;

  document.getElementById('quickQty').value = 1;
  modal.classList.add('open');
}

function closeModal() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.classList.remove('open');
  selectedProduct = null;
}

// ── Toast ────────────────────────────────────
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Scroll Animations ────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.feature-card, .contact-block, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
