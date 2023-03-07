//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=18";

function stablish(){
 document.getElementById('amount-two').value = "1";
}
 stablish();

//GeckoMainst
async function MainstCall(){

 var usdMainst = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd} } = usdMainst;
 mainstDisplay = BigNumber(usd).toFixed(); 
 
 var usdMktCap = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_market_cap} } = usdMktCap;
 mktDisplay = JSON.parse(usd_market_cap).toFixed(2);
 
 var usdVol = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_24h_vol} } = usdVol;
 volDisplay = JSON.parse(usd_24h_vol).toFixed(2);
 
  document.getElementById('usdMainst').innerHTML = "$"+mainstDisplay;
  document.getElementById('usdMktCap').innerHTML = "$"+mktDisplay;
  document.getElementById('usdVol').innerHTML = "$"+volDisplay;
}
//Calculator
const amountEl_two = document.getElementById('amount-two');
const amountEl_one = document.getElementById('amount-one');
// Fetch exchange rates and update the dome
function calculate() {
      amountEl_two.value = (amountEl_one.value * MainstDisplay).toFixed(2);
    }

 // Event Listeners
amountEl_two.addEventListener('input', calculate);
amountEl_one.addEventListener('input', calculate);
calculate();



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
 }