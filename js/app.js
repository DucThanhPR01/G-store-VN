var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    loop: true, 
    spaceBetween: 25,
    autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
    navigation: {
                nextEl: '.swiper-slide-next',
                prevEl: '.swiper-slide-prev',
            },
	
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); 


const nav = document.querySelector('#topheader');
const fixedNavbarHandler = () =>{
	if(window.pageYOffset > 200){
		nav.classList.add('fixcung');
		nav.classList.remove('topheader');
		document.querySelector('.logo img').src = 'images/logo1.png'
	}
	else{
		nav.classList.remove('fixcung');
		nav.classList.add('topheader');
		document.querySelector('.logo img').src = 'images/logo5.png'
	}
		//window.pageYOffset > 200 ? nav.classList.add('fixcung') : nav.classList.remove('fixcung');
		
}
window.addEventListener('scroll', fixedNavbarHandler);
	
new WOW().init(); 


var owl = $('.owl-carousel');
owl.owlCarousel({
items:4,
loop:true,
margin:20,
autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
navigation: {
	nextEl: '.swiper-slide-next',
	prevEl: '.swiper-slide-prev',
}
});
$('.play').on('click',function(){
owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
owl.trigger('stop.owl.autoplay')
})

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
  