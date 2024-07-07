const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

let current = 0;
function autoplay() {
  setTimeout(() => {
    current++;
    if (current >= items.length) current = 0;
    updateCarousel();
    autoplay();
  }, 3000);
}

function updateCarousel() {
   items.forEach((item, index) => {
     item.classList.remove('active');
     if (index === current) item.classList.add('active');
   });
   indicators.forEach((indicator, index) => {
     indicator.classList.remove('active');
     if (index === current) indicator.classList.add('active');
   });
}

autoplay();

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Form submitted!');
});

         // Function to toggle visibility of details sections
         function toggleDetails(id) {
          const details = document.getElementById(id);
          if (details.style.display === 'none') {
              details.style.display = 'block';
          } else {
              details.style.display = 'none';
          }
      }

      const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('click', function() {
    // Get the rating value
    const rating = this.value;
    console.log('Rated:', rating);

    // You can send this rating to your backend or perform other actions
  });
});
