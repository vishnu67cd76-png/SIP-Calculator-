//function declared in the name of CalculateSip()//
function CalucalteSip(){
	//documet.getElementById finds each input box by its ID//
	//.value gets the number the user typed in//
	//parseFloat() converts the text input (like 10000) into a number(10000)//
	const monthly=
	parseFloat(document.getElementById('monthly').value)
	const years=
	parseFloat(document.getElementById('years').value)
	const rate=
	parseFloat(document.getElementById('rate').value)
	//so we have: //
	// monthly --> users monthly SIP amount//
	// years --> total investment period//
	// rate --> expected annual return rate(like 12%)//
	
	//checks wheather any fields is empty or invalid.//
	if(!monthly || !years || !rate){
		alert('Please enter valid positive numbers')
		return;
	}//if true,shows an alert and stops the function using return.//
	
	//converts years --> months (since SIP happens every month).//
	const months=years*12
	//converts annual interest rate(%) --> monthly rate (for example 12% annual --> 1% per month = 0.01).//
	const monthlyRate=rate/12/100
	
	//SIP future value formula//
	/*standard formula for calculating SIP is FV=P x (1+r)^n-1/r x (1+r)
	Fv= future value(What you will get at the end)
	P= Monthly investment amount
	r= Monthly return rate(eg: 0.01 for 1%)
	n= Total months
	*/
	//so it calculates how much your investment grows with compounding//
	const futureValue=monthly*((Math.pow(1+monthlyRate,months)-1)/monthlyRate)*(1+monthlyRate)
	//invested: total money you put in.(example: 10,000 x 120 months = 12,00,000)//
	const invested=monthly*months
	//gain: total profit(futureValue - invested)//
	const gain=futureValue-invested
	
	document.getElementById('result').innerHTML=`
	<p><strong>Total invested:</strong>${invested.toLocaleString()}</p>
	<p><strong>Estimated returns:</strong>${gain.toLocaleString()}</p>
	<p><strong>Total value:</strong>${futureValue.toLocaleString()}<p/>
	<p class="disclaimer"><strong>Mathematically accurate...</strong></p>
	<p class="disclaimer2"><strong>Practically in real life around 98-99% depending on market movement</strong></p>
	<p class="disclaimer3"><strong>This calcultor is for educational purposes only. Past performance doesn't guarantee future results. consult a financial advisor for investment decisions</strong></p>
	`
	//finds the <div id="result"> section in HTML//
	//.innerHTML replaces its content with formatted text.//
	//toLocaleString() automatically adds commas(like 1,00,000 instead of 100000)//
}
