// slider swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: true, 
    autoplay:true,
	autoplayTimeout:3000,
    navigation: {
                nextEl: '.swiper-slide-next',
                prevEl: '.swiper-slide-prev',
            },
		breakpoints: {  
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			  },
			  // when window width is >= 480px
			  480: {
				slidesPerView: 3,
				spaceBetween: 30
			  },
			  // when window width is >= 640px
			  640: {
				slidesPerView: 4,
				spaceBetween: 40
			  }
			  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 

//scroll js change header 
const nav = document.querySelector('#topheader');
const fixedNavbarHandler = () => {
	if(window.pageYOffset > 200){
		nav.classList.add('fixcung');
		nav.classList.remove('topheader');
		document.querySelector('.logo img').src = 'images/logo1.png'
		document.querySelector(".iconbar").style = "color: #333;";
	}
	else{
		nav.classList.remove('fixcung');
		nav.classList.add('topheader');
		document.querySelector('.logo img').src = 'images/logo5.png'
		document.querySelector(".iconbar").style = "color: white;";
	}
		//window.pageYOffset > 200 ? nav.classList.add('fixcung') : nav.classList.remove('fixcung');
		
}
window.addEventListener('scroll', fixedNavbarHandler);

//owlCarousel js 
$('#owl-one').owlCarousel({
loop:true,
margin:20,
autoplay:true,
autoplayTimeout:5000,
responsiveClass: true,
autoHeight: true,
smartSpeed: 800,
responsive: {
    0: {
      items: 2
    },
	576: {
		items: 2
	},
    768: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
$('#owl-two').owlCarousel({
	loop:true,
	margin:20,
	autoplay:true,
	autoplayTimeout:5000,
	responsiveClass: true,
	autoHeight: true,
	smartSpeed: 800,
	responsive: {
		0: {
		  items: 2
		},
		576: {
			items: 2
		},
		768: {
		  items: 3
		},
	
		1024: {
		  items: 5
		},
	
		1366: {
		  items: 5
		}
	  }
	});

const iconbar = document.querySelector(".iconbar");
iconbar.addEventListener("click", function() {
	var navbar = document.querySelector('.navbar');
	console.log(navbar);
	navbar.classList.toggle("hienlen");
  });


  //js page loading
  $(window).on('load', function(event) {
	$('body').removeClass('preloading');
	   // $('.load').delay(1000).fadeOut('fast');
	$('.loader').delay(1000).fadeOut('fast');
 });

 //js change padding div
 var a = document.querySelectorAll(".menu li a");
 for (var i = 0, length = a.length; i < length; i++) {
   a[i].onclick = function() {
	 var b = document.querySelector(".menu li.active");
	 if (b) b.classList.remove("active");
	 this.parentNode.classList.add('active');
	 var c = document.querySelector(".wraptotal").children;
   		for (j = 0; j < c.length; j++) {
			//if (j == 3 || j == 4 || j == 0) {
				c[j].classList.remove("paddingplus");
				c[j].classList.add("paddingplus");
				console.log('c[j]: ', c[j]);
			
			// if (j == 1 || j == 2) {
			// 	c[j].classList.add("paddingplustwo");
			// 	console.log('c[j]: ', c[j]);
			// } 
		}
	 //for (var j = 0; j < c.length; j++) {
		 //console.log(c[j]);
		// c[j].childNodes.classList.add("paddingplus");
	 //}
	console.log(c);
	//   listcontent.classList.add("paddingplus");
   };
 }

//  for (var i = 0, length = a.length; i < length; i++) {
// 	a[i].onclick = function() {
	  
// 	};
//   }
// const addpadding = document.querySelectorAll(".menu li");
// console.log(addpadding);
// addpadding.addEventListener("click", function() {
// 	var paddingplus = document.querySelector(".rong");
// 	paddingplus.classList.add("paddingplus");
// });
  
