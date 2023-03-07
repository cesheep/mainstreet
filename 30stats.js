
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=18";

//GeckoMainst
async function MainstCall(){

 var usdMainst = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd} } = usdMainst;
 mainstDisplay = BigNumber(usd).toFixed(); 
 
 var usdMktCap = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_market_cap} } = usdMktCap;
 mktDisplay = JSON.parse(usdMktCap);
 
 var usdVol = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_24h_vol} } = usdVol;
 volDisplay = JSON.parse(usdVol);
 
 var usd24 = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_24h_change} } = usd24;
 display24 = JSON.parse(usd24);

  document.getElementById('usdMainst').innerHTML = mainstDisplay;
  document.getElementById('usdMktCap').innerHTML = mktDisplay;
  document.getElementById('usdVol').innerHTML = volDisplay;
  document.getElementById('usd24').innerHTML = display24;
 
 console.log(usdMainst);
  console.log(usdMktCap);
  console.log(usdVol);
  console.log(usd24);
 
 
}



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
}
