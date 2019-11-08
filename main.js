$(document).ready(function(){
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
$('.EX1').hide() ;
$('.EX2').hide() ;
 // $('h1').hide();
 // $('a').hide();

$( '#bt1' ).click(function() {
 $('h1').remove();
 $('a').remove();
 $('.champ1').show() ;

});


$( '#bt2' ).click(function() {
 $('h1').remove();
 $('a').remove();
 $('.champ2').show() ;

});

// $('.champ1').hide() ;
// $('.button1').on('click', function(){
// 	$('.button1').hide();
// 	$('h1').hide();
// 	$('.champ1').show();
// })
var weight = $('#weight').val();
var height = $('#height').val();
var fullName = $('#fullName').val();
function calcul(weight, height){
	return weight / (Math.pow(height, 2))
}

$("#input-right").click(function(){
	// if (weight === ''){
	// 	 return alert('Make Sure You Fill The Blanks !!')
	// }else if(height === ''){
	// 	return alert('Make Sure You Fill The Blanks !!')
	// }else if(fullName === ''){
	// 	return alert('Make Sure You Fill The Blanks !!')
	// }else
	// return alert('yo yo ')
	$('.champ2').remove();
	$('.EX1').show() ;
	$('.EX2').show();
})
})