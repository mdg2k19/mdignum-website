(function () {
  'use strict';
  class Component {
    printError(error) {
      if (typeof error !== 'string' || error.length === 0) {
        return console.log('you did not give arguments');
      }
      return console.log(error);
    }
    toggleСlass(node, className) {
      return node.classList.toggle(className);
    }
  }
  class Menu extends Component {
    constructor(settings) {
      super();
      this.menuNode = settings.menuNode;
    }

    toggleMenuState(className) {
      if (typeof className !== 'string' || className.length === 0) {
        return super.printError('you did not give the class name for the toggleState function');
      }
      return super.toggleСlass(this.menuNode, className);
    }
  }
  let jsMenuNode = document.querySelector('body');

  let demoMenu = new Menu({
    menuNode: jsMenuNode
  });

  function callMenuToggle() {
    demoMenu.toggleMenuState('js-menu_activated');
  }

  let menuButtons = document.querySelectorAll('.js-menu__toggle');
  Array.from(menuButtons).forEach(button => {
    button.addEventListener('click', callMenuToggle);
  })

  let menuLinks = document.querySelectorAll('.link.menu__link');
  Array.from(menuLinks).forEach(link => {
    link.addEventListener('click', callMenuToggle);
  })
})();

$(document).ready(function () {
  // grab an element
  var myElement = document.querySelector("header");
  // construct an instance of Headroom, passing the element
  var headroom = new Headroom(myElement, {
    "offset": 120,
    "tolerance": 5,
    "classes": {
      "initial": "or",
      "pinned": "pinned",
      "unpinned": "unpinned"
    }
  });
  // initialise
  headroom.init();

  $(".explore").click(function () {

    
    var height = window.innerHeight;

    $('html, body').animate({
      scrollTop: ($('#platform').offset().top)
    }, 700);
  });

  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 700);
    }
  });

  // TIMER

  // const second = 1000,
  //   minute = second * 60,
  //   hour = minute * 60,
  //   day = hour * 24;

  // let countDown = new Date('Oct 25, 2017 06:00:00').getTime(),
  //   x = setInterval(function() {

  //     let now = new Date().getTime(),
  //         distance = countDown - now;

  //     document.getElementById('days').innerHTML = Math.floor(distance / (day)),
  //       document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
  //       document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
  //       document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

  //     //do something later when date is reached
  //     //if (distance < 0) {
  //     //  clearInterval(x);
  //     //  'MESSAGE!;
  //     //}

  // }, second);


  // CLOSE MODAL

  function closeModal() {
    $(".modal").removeClass("show");
    $("#modal-01").removeAttr("style");
    $("#modal-02").hide();
    $("#modal-02").removeAttr("style");
    $(".signup-modal").removeClass("show");
    $(".signup-modal").removeAttr("style");
  }

  $(".close").click(function () {
    closeModal();
  });

  $("#done").click(function () {
    closeModal();
  });

  // SHOW MODAL

  $(".join-presale").click(function () {
    $(".modal").addClass("show");
  });
  $(".top-presale").click(function () {
    $(".modal").addClass("show");
  });

  // SHOW MODAL 02

  $("#next").click(function () {
    $("#modal-01").css("display", "none");
    $("#modal-02").css("display", "flex");
  });


  // CHECK FOR CHECKBOXES

  var $next = $('#next');
  $checkbox = $('input[type=checkbox]');

  $next.prop('disabled', true);

  $checkbox.on('click', function () {
    if ($("input:checkbox:checked").length > 1) {
      $next.removeAttr('disabled');
      $next.removeClass('disabled');
    } else {
      $next.prop('disabled', true);
      $next.addClass('disabled');
    }
  });

  // SHOW MODAL 03
  $(".subscribe-modal").click(function () {
    $(".signup-modal").addClass("show");
  });

  $(".arch-image").click(function () {
    $("#scale").addСlass("click-scale");
  });

});

// LightBox 
