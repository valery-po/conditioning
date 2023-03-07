const videoBtn = document.querySelector("#video-story-button");
const videoFile = document.querySelector("#video-story");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
//const videoIconBlock = document.querySelector(".promo-video__play-btn");


videoBtn.addEventListener("click", function() {
  
  videoBtn.style.display = "block";
 
  function toggleOverlay(event) {
    if(event.type === "mouseleave"){
      videoBtn.classList.add("hidden");
    }
  }
  
  
  function toggleEnter(event) {
    if(event.type === "mouseenter"){
      videoBtn.classList.remove("hidden");
    } 
  }
  
  if(videoFile.paused){
    videoFile.play();
    videoBtnIcon.src = "./img/Pause.svg";
    videoBtn.onmouseleave = toggleOverlay;
    videoBtn.onmouseenter = toggleEnter;
    
  }else {
    videoFile.pause();
    videoBtnIcon.src = "./img/play.svg";
     videoBtn.onmouseleave = toggleOverlay;
    videoBtn.onmouseenter = toggleEnter;
  }
 
})

$(".numbers__value").each(function() {
  $(this).attr("Counter", 0).animate({
    
    Counter:$(this).text()
  }, {
    duration: 16000,
    easing: 'swing',
    step: function(now){
      $(this).text(Math.ceil(now));
    }
  });
  
});


const text = document.querySelector(".text");

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};

const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 2.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		delay: idx * 0.02,
		repeat: 0,
	})
});


// Gallery start

$(function () {
  $(".category li a").mouseover(function () {
    $(this).addClass("active");
    $(".category li a").not(this).removeClass("active");

    let catname = $(this).attr("href");

    $(".products .product-img").removeClass("active");
    $(".products .product-img" + catname).addClass("active");
  });

  //anime js
  
  let tl = anime.timeline({
    easing: "easeInOutQuart",
  });

  tl.add({
    targets: ".logo",
    opacty: [0, 1],
    translateY: [-100, 0],
    duration: 1500,
  })
    .add(
      {
        targets: ".menu li",
        opacty: [0, 1],
        translateY: [-100, 0],
        duration: 2000,
        delay: anime.stagger(150),
      },
      "-=1000"
    )
    .add(
      {
        targets: ".wishlist li",
        opacty: [0, 1],
        translateY: [-100, 0],
        duration: 3000,
      },
      "-=2000"
    )
    .add(
      {
        targets: ".category li",
        opacity: [0, 1],
        translateX: [-200, 0],
        duration: 1500,
        delay: anime.stagger(200, { start: 2000 }),
      },
      "-=3000"
    )

    .add(
      {
        targets: ".products",
        opacity: [0, 1],
        scaleY: [1.1, 1],
        scaleX: [1.1, 1],
        duration: 1500,
        delay: anime.stagger(200, { start: 3500 }),
      },
      "-=4000"
    );
});


// Scroll to the section

const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}

$(function(){


  $(".mobile-nav__item").on("click", "a", function(event) {
          event.preventDefault();
          var id  = $(this).attr("href"),
              top = $(id).offset().top;
          $("body,html").animate({scrollTop: top}, 1500);
  });
    
      $(".mobile-nav__item").on("click", function () {
      
        $(".mobile-nav").removeClass("mobile-nav--active");
       $(".mobile-nav__list").removeClass("mobile-nav__list--active");
          $("#menu-toggle").removeClass("menu-icon-active");
    
    });
  });





