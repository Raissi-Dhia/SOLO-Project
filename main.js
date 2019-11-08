const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", function() {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", function()  {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", function() {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", function() {
  container.classList.remove("hover-right");
});


$('.champ1').hide() ;
$('.champ2').hide() ;
 $('h1').hide();
 $('a').hide();

// $( '#bt1' ).click(function() {
//  $('h1').hide();
//  $('a').hide();
//  $('.champ1').show() ;

// });


// $( '#bt2' ).click(function() {
//  $('h1').hide();
//  $('a').hide();
//  $('.champ2').show() ;

// });

// $('.champ1').hide() ;
// $('.button1').on('click', function(){
// 	$('.button1').hide();
// 	$('h1').hide();
// 	$('.champ1').show();
// })
