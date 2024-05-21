// import Typewriter from '../node_modules/typewriter-effect/dist/core';
// function that calls a callback whenever an element enters viewport
let respondToVisibility = function (element, callback) {
  var options = {
    root: document.documentElement
  }

  var observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      callback(entry.intersectionRatio > 0);
    });
  }, options);

  observer.observe(element);
}

/**
 * This function is used to simulate typing effect on a given element.
 * It clears the existing HTML content of the element and initializes a new TypeWriter instance.
 *
 * @param {HTMLElement} element - The HTML element on which the typing effect will be applied.
 * @returns {void}
 *
 * @example
 * // Example usage:
 * let element = document.getElementById('myElement');
 * typeWrite(element);
 */
function typeWrite(element, text) {
  console.log(text);
  element.innerHTML = '';
  let typeWriter = new TypeIt(element, {
    strings: text,
    speed: 50,
  });

  typeWriter.go();
}

// get all the chat-cards-content
let chatCardsContent = document.querySelectorAll('.chat-card-content');

chatCardsContent.forEach((chatCardContent, index) => {
  let text = chatCardContent.innerHTML;
  chatCardContent.innerHTML = '';
  respondToVisibility(chatCardContent.parentElement, visible => {
    if (visible) {
      let timeout = setTimeout(() => {
        chatCardContent.parentElement.classList.remove('invisible');

        typeWrite(chatCardContent , text );
        clearTimeout(timeout);
      }, 4000 * index);
    }
  });


});