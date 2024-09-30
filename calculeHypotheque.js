var inputPrice = document.getElementById("price");
var outputP = document.getElementById("outputPrice");

outputP.innerHTML = inputPrice.value;
	
inputPrice.oninput = function(){
	outputP.innerHTML = '$' + this.value;
}

inputPrice.addEventListener("mousemove", function(){
	var x = (inputPrice.value - inputPrice.min)/ (inputPrice.max - inputPrice.min)*100;
	var color = 'linear-gradient(90deg, rgb(255,95,21)' + x + '%, rgb(214,214,214)' + x + '%)';
	inputPrice.style.background = color;
})


/*--------------------------------------*/	
var inputDownPay = document.getElementById("down-payment");
var outputDownPay = document.getElementById("outputDPay");

outputDownPay.innerHTML = inputDownPay.value;

inputDownPay.oninput = function(){
	outputDownPay.innerHTML = '$' + this.value;
}
inputDownPay.addEventListener("mousemove",function(){
	var x = (inputDownPay.value - inputDownPay.min)/ (inputDownPay.max - inputDownPay.min)*100;
	var color = 'linear-gradient(90deg, rgb(255,95,21)' + x + '%, rgb(214,214,214)' + x + '%)';
	inputDownPay.style.background = color;
})

/*---------------------------------------*/
var inputInterest = document.getElementById("interest-rate");
var outputInterestRate = document.getElementById("outputInterest");

outputInterestRate.innerHTML = inputInterest.value;

inputInterest.oninput = function(){
	outputInterestRate.innerHTML = this.value + '%';
}

inputInterest.addEventListener("mousemove",function(){
	var x = (inputInterest.value - inputInterest.min)/ (inputInterest.max - inputInterest.min)*100;
	var color = 'linear-gradient(90deg, rgb(255,95,21)' + x + '%, rgb(214,214,214)' + x + '%)';
	inputInterest.style.background = color;
})

/*----------------------------------------*/
var inputAmortisation = document.getElementById("amortization-period");
var outputAmortisation = document.getElementById("outputAmort");

outputAmortisation.innerHTML = inputAmortisation.value;

inputAmortisation.oninput = function(){
	outputAmortisation.innerHTML = this.value + ' years';
}

inputAmortisation.addEventListener("mousemove",function(){
	var x = (inputAmortisation.value - inputAmortisation.min)/ (inputAmortisation.max - inputAmortisation.min)*100;
	var color = 'linear-gradient(90deg, rgb(255,95,21)' + x + '%, rgb(214,214,214)' + x + '%)';
	inputAmortisation.style.background = color;
	
})

	function calculer(event) {
		event.preventDefault();
		var inputPrice = document.getElementById("price");  
		var inputInterest = document.getElementById("interest-rate"); 
		var inputAmortisation = document.getElementById("amortization-period");
		
		inputPrice.value -= document.getElementById("down-payment").value;
		

		var perMonth = document.getElementById("pMonth");


		var monthlyInterest = inputInterest.value / 100 / 12;


		var numberOfPayments = inputAmortisation.value * 12;

	
		var monthlyPayment = (inputPrice.value * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) 
							 / (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);


		perMonth.innerHTML = "$" + monthlyPayment.toFixed(2);
	}


/*------------------------------------------------------------
// KEPT THESE FUNCTIONS FOR LEARNING PURPOSES, THEY DO THE SAME THING AS THE VARIABLES

function updatePrice(slider)
{
	var output = document.getElementById('outputPrice');
	
	output.value = '$' + slider.value;

}

function updateDownPayment(slider)
{
	var output = document.getElementById('outputDPay');
	
	output.value = '$' + slider.value;

}

function updateInterest(slider)
{
	var output = document.getElementById('outputInterest');
	
	output.value = slider.value +'%';

}

function updateAmort(slider)
{
	var output = document.getElementById('outputAmort');
	
	output.value =  slider.value + ' years';

}
*/