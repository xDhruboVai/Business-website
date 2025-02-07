// JavaScript to add the scroll effect
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
};

// JavaScript for hamburger menu
function toggleMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
}

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');

function goToSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0; // Reset to first slide if last slide is reached
  } else if (index < 0) {
    currentSlide = slides.length - 1; // Go to last slide if trying to go before the first one
  } else {
    currentSlide = index;
  }

  // Move the slider to the new slide
  document.querySelector('.hero-slider').style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update the indicators
  indicators.forEach((indicator, i) => {
    if (i === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Auto-slide every 5 seconds
setInterval(() => {
  goToSlide(currentSlide + 1); // Move to the next slide
}, 5000);

// Indicator click event
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => goToSlide(index));
});

// Initial slide
goToSlide(0);

// Features section
// Get the Featured Products container
const featuredProductsSection = document.querySelector('#featured-products');
const productCards = document.querySelectorAll('.product-card');

window.addEventListener('scroll', function() {
    // Get the position of the Featured Products section relative to the viewport
    const sectionTop = featuredProductsSection.getBoundingClientRect().top;
    
    // Check if the section is in view
    if (sectionTop < window.innerHeight && sectionTop >= 0) {
        const scrollPos = window.scrollY;

        productCards.forEach((card, index) => {
            const shiftAmount = (scrollPos * (index + 1)) / 150; // Adjust for smoother effect
            card.style.transform = `translateX(${shiftAmount}px)`; // Apply the horizontal shift
        });
    } else {
        // Reset the position of product cards when they are not in view
        productCards.forEach(card => {
            card.style.transform = 'translateX(0)';
        });
    }
});

//Categories
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', function() {
      // Get the selected category
      const category = this.getAttribute('data-category');
  
      // Hide all product grids
      const allCategories = document.querySelectorAll('.category-products');
      allCategories.forEach(cat => {
        cat.classList.remove('fade-in');
        cat.classList.add('fade-out');
      });
  
      // Show the selected category and apply fade-in effect
      const selectedCategory = document.getElementById(category);
      selectedCategory.classList.remove('fade-out');
      selectedCategory.classList.add('fade-in');
    });
  });
  
  // Set the default category to Fashion
  document.getElementById('fashion').classList.add('fade-in');

  function showCategory(category) {
    // Hide all category products
    const allCategories = document.querySelectorAll('.category-products');
    allCategories.forEach((cat) => {
        cat.classList.remove('fade-in');
        cat.classList.add('fade-out');
    });

    // Show the selected category
    const selectedCategory = document.getElementById(category);
    selectedCategory.classList.remove('fade-out');
    selectedCategory.classList.add('fade-in');
}


// Function to show the selected category with a smooth transition
function changeCategory(category) {
    document.querySelectorAll(".category-grid").forEach(grid => {
        grid.style.opacity = "0"; // Fade out
        setTimeout(() => {
            grid.style.display = "none"; // Hide after fade-out
        }, 300); // Wait for fade-out animation
    });

    const selectedGrid = document.getElementById(category);
    setTimeout(() => {
        selectedGrid.style.display = "grid";
        selectedGrid.style.opacity = "0"; // Ensure it starts hidden
        setTimeout(() => {
            selectedGrid.style.opacity = "1"; // Fade in
        }, 50); // Small delay to trigger fade-in
    }, 300); // Delay for smooth transition
}

// Default category (Fashion)
document.addEventListener("DOMContentLoaded", () => {
    changeCategory("fashion");
});


// Function to scroll to category and highlight
function scrollToCategory(category) {
    // Remove "selected" class from all category links in navbar
    const links = document.querySelectorAll('.nav-links .dropdown-content a');
    links.forEach(link => link.classList.remove('selected'));

    // Add "selected" class to the clicked category link in the navbar
    const selectedLink = document.querySelector(`.nav-links .dropdown-content a[href="#${category}"]`);
    if (selectedLink) {
        selectedLink.classList.add('selected');
    }

    // Remove "selected" class from all category buttons in the section
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Add "selected" class to the clicked category button in the section
    const selectedButton = document.querySelector(`.category-button[onclick="scrollToCategory('${category}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }

    // Scroll to the corresponding category section
    const element = document.getElementById(category);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 50, // Adjust scroll position if needed
            behavior: "smooth"
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector(".login-btn");
    const popupOverlay = document.querySelector(".popup-overlay");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");
    const toggleSignup = document.querySelector(".toggle-signup");
    const toggleLogin = document.querySelector(".toggle-login");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const popupTitle = document.getElementById("popup-title");

    // Open Popup
    loginBtn.addEventListener("click", () => {
        popupOverlay.classList.add("active");
        popupBox.classList.add("active");
    });

    // Close Popup
    closeBtn.addEventListener("click", () => {
        popupOverlay.classList.remove("active");
        popupBox.classList.remove("active");
    });

    // Toggle to Signup
    toggleSignup.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        popupTitle.textContent = "Sign Up";
    });

    // Toggle to Login
    toggleLogin.addEventListener("click", () => {
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        popupTitle.textContent = "Login";
    });

    // Close popup when clicking outside the box
    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove("active");
            popupBox.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.querySelector(".cart");
    const cartOverlay = document.querySelector(".cart-overlay");
    const cartBox = document.querySelector(".cart-box");
    const closeCart = document.querySelector(".close-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartCount = document.querySelector(".cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];

    // Open Cart Popup
    cartIcon.addEventListener("click", () => {
        cartOverlay.classList.add("active");
        cartBox.classList.add("active");
    });

    // Close Cart Popup
    closeCart.addEventListener("click", () => {
        cartOverlay.classList.remove("active");
        cartBox.classList.remove("active");
    });

    // Add to Cart Function
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    // Remove from Cart
    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCart();
    }

    // Update Cart UI
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}
                <button class="remove-item" data-name="${item.name}">Remove</button>
            `;
            cartItemsContainer.appendChild(li);
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = itemCount;

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", () => {
                removeFromCart(button.getAttribute("data-name"));
            });
        });
    }

    // Close popup when clicking outside the box
    cartOverlay.addEventListener("click", (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove("active");
            cartBox.classList.remove("active");
        }
    });
});

// Initialize cart array
let cart = [];

// Function to add items to the cart
function addToCart(productName, price) {
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity++; // Increase quantity if item already exists
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Update cart UI
    updateCartCount();
    updateCartUI();
}

// Function to update cart count
function updateCartCount() {
    let cartCount = document.querySelector('.cart-count');
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems; // Update cart count in UI
}

// Function to update cart UI (Show cart items and total)
function updateCartUI() {
    let cartContainer = document.querySelector('.cart-items');
    let totalContainer = document.querySelector('.cart-total');
    
    cartContainer.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price} (x${item.quantity})</p>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Update total price in UI
    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to show cart on click
document.querySelector('.cart-icon').addEventListener('click', function() {
    updateCartUI(); // Refresh total when opening cart
    document.querySelector('.cart-popup').style.display = 'block';
});
