let cart = {};
let total = 0;

function scrollToBooking() {
  document.getElementById('services').scrollIntoView({
    behavior: 'smooth'
  });
}

function addToCart(serviceId, serviceName, price) {
  if (cart[serviceId]) {
    cart[serviceId].quantity += 1;
  } else {
    cart[serviceId] = {
      name: serviceName,
      price: price,
      quantity: 1
    };
  }
  updateCartDisplay();
}

function removeFromCart(serviceId) {
  if (cart[serviceId]) {
    if (cart[serviceId].quantity > 1) {
      cart[serviceId].quantity -= 1;
    } else {
      delete cart[serviceId];
    }
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cartItems');
  const totalAmount = document.getElementById('totalAmount');

  if (Object.keys(cart).length === 0) {
    cartItems.innerHTML = '<div style="text-align: center; color: #666; margin-top: 2rem;">No items added yet</div>';
    total = 0;
  } else {
    let cartHTML = '';
    total = 0;

    for (const [serviceId, item] of Object.entries(cart)) {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      cartHTML += `
                        <div class="cart-item">
                            <div>
                                <strong>${item.name}</strong><br>
                                <small>Qty: ${item.quantity} × ₹${item.price}</small>
                            </div>
                            <div>₹${itemTotal}</div>
                        </div>
                    `;
    }

    cartItems.innerHTML = cartHTML;
  }

  totalAmount.textContent = total;
}

function bookService() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (!fullName || !email || !phone) {
    alert('Please fill in all required fields');
    return;
  }

  if (Object.keys(cart).length === 0) {
    alert('Please add at least one service to your cart');
    return;
  }

  // Show confirmation message
  const confirmationMessage = document.getElementById('confirmationMessage');
  confirmationMessage.style.display = 'block';

  // Reset form
  document.getElementById('fullName').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';

  // Reset cart
  cart = {};
  updateCartDisplay();

  // Hide confirmation message after 5 seconds
  setTimeout(() => {
    confirmationMessage.style.display = 'none';
  }, 5000);
}

function subscribeNewsletter() {
  const name = document.getElementById('newsletterName').value;
  const email = document.getElementById('newsletterEmail').value;

  if (!name || !email) {
    alert('Please fill in all fields');
    return;
  }

  alert('Thank you for subscribing to our newsletter!');
  document.getElementById('newsletterName').value = '';
  document.getElementById('newsletterEmail').value = '';
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'white';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.background = 'transparent';
    navbar.style.backdropFilter = 'none';
  }
});