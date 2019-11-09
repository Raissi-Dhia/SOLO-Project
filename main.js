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
$('.EX11').hide() ;
$('.EX22').hide() ;
$('#meme').hide();

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
var result = 0

function calcul(weight , height){
weight = parseInt(weight)
height = parseInt(height)
result += weight / Math.pow(height , 2)

return result ; 
}

$("#input-left").click(function(){
	if ($('#weight').val() === ''){
		alert('put your weight !!')
	}else if($('#height').val() === ''){
		alert('put your height !!')
	}else if($('#fullName').val() === ''){
		alert('put your fullName!!')
	}else{
	var res = calcul($('#weight').val() , $('#height').val()) ;
	if (res > 100){
	$('.container').remove()
	$('#meme').show()
	}
	$('.champ1').remove();
	$('.EX11').show() ;
	$('.EX22').show();
	}
})



$("#input-right").click(function(){
// if ($('#weight').val() === ''){
// 		alert('put your weight !!')
// 	}else if($('#height').val() === ''){
// 		alert('put your height !!')
// 	}else if($('#fullName').val() === ''){
// 		alert('put your fullName!!')
// 	}else{
// 	var res = calcul($('#weight').val() , $('#height').val()) ;

	$('.champ2').remove();
	$('.EX1').show() ;
	$('.EX2').show();
//}
})



})



$('input-right').click(function(){
// if (result > 50){
	// $('.container').remove()
 // 	$('#meme').show()
// }
// $('.champ2').remove();
// 	$('.EX1').show() ;
// 	$('.EX2').show();

})
/*$("#input-left").click(function(){
// if (result > 50){
//$('.container').remove()
//$('#meme').show()
// }
	$('.champ1').remove();
	$('.EX11').show() ;
	$('.EX22').show();
})*/


