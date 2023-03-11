window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.querySelector(".navigation").classList.add("navigation-scrolled");
  } else {
    document.querySelector(".navigation").classList.remove("navigation-scrolled");
  }
}

function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const PitchedInContainer = document.querySelector('.PitchedIn-container');
  const AppleContainer = document.querySelector('.Apple-container');
  let pitchedInShown = false;
  let appleShown = false;

  let debounceTimer;
  const delay = 100; // adjust this value as needed
  
  window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (!pitchedInShown && isElementInViewport(PitchedInContainer)) {
        PitchedInContainer.classList.add('show');
        pitchedInShown = true;
      }
      if (!appleShown && isElementInViewport(AppleContainer)) {
        AppleContainer.classList.add('show');
        appleShown = true;
      }
    }, delay);
  });
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
      
    );
  }
  



