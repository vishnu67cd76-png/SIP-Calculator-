function CalucalteSip(){
	
	const monthly=
	parseFloat(document.getElementById('monthly').value)
	const years=
	parseFloat(document.getElementById('years').value)
	const rate=
	parseFloat(document.getElementById('rate').value)
	const yearlyIncrease=
	parseFloat(document.getElementById('increase').value)||0
	
	
	if(!monthly || !years || !rate){
		alert('Please fill all fields correctly!')
		return;
	}
	const months=years*12
	const monthlyRate=rate/12/100
	
	let futureValue=0
	let invested=0
	let currentMonthly=monthly
	
	for(let year=1;year<=years;year++){
		for(let month=1;month<=12;month++){
			futureValue+=currentMonthly*Math.pow(1+monthlyRate,months-((year-1)*12+month-1))
			invested+=currentMonthly
		}
		currentMonthly*=(1+yearlyIncrease/100)
	}
	const gain=futureValue-invested
	
	document.getElementById('result').innerHTML=`
	<p><strong>Total invested:</strong>${invested.toLocaleString(undefined,{maximumFractionDigits:0})}</p>
	<p><strong>Estimated returns:</strong>${gain.toLocaleString(undefined,{maximumFractionDigits:0})}</p>
	<p><strong>Total value:</strong>${futureValue.toLocaleString(undefined,{maximumFractionDigits:0})}<p/>
	<p class="disclaimer"><strong>Mathematically accurate...</strong></p>
	<p class="disclaimer2"><strong>Practically in real life around 98-99% depending on market movement</strong></p>
	<p class="disclaimer3"><strong>This calcultor is for educational purposes only. Past performance doesn't guarantee future results. consult a financial advisor for investment decisions</strong></p>
`}
