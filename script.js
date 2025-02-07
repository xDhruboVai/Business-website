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


// Function to show the selected category
function changeCategory(category) {
    document.querySelectorAll(".category-grid").forEach(grid => {
        grid.style.display = "none";
    });
    document.getElementById(category).style.display = "grid";
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



  