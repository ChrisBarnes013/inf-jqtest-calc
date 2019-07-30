// self executing main function
(function($) {
  console.log('Welcome to the calculator app');

  //--------------- put your code below this line -------------
})(jQuery);

var numberone = [];
var numbertwo =[];
var opperand = [];
var total =null;


$(".btn-danger").on("click",function(){
	opperand.push($(this).attr("value"));
	 $('#output').val(opperand);
});


$(".btn-default").on("click",function(){
	if (opperand.length === 0) {
		numberone.push($(this).attr("value"));
		 $('#output').val(parseInt(numberone.join('')));
	}
	else {
		numbertwo.push($(this).attr("value"));
		 $('#output').val(parseInt(numbertwo.join('')));
	}
});

$(".clear").on("click",function(){
		numberone = [];
		numbertwo = [];
		opperand =[];
		$('#output').val(0);
	});

$(".btn-info").on("click",function(){
	if (opperand == '+') {
		var total = parseInt(numberone.join('')) + parseInt(numbertwo.join(''));
		 $('#output').val(total);	
		}
	else if 
			(opperand == '-') {
			var total = parseInt(numberone.join('')) - parseInt(numbertwo.join(''));
			 $('#output').val(total);	
		}
	else if (opperand == 'x') {
			var total = parseInt(numberone.join('')) * parseInt(numbertwo.join(''));
			 $('#output').val(total);	
		}
	else if (opperand == '/') {
			var total = parseInt(numberone.join('')) / parseInt(numbertwo.join(''));
			 $('#output').val(total);	
		}
	else 
		var total = parseInt(numberone.join(''))
		 $('#output').val(total);	

});




