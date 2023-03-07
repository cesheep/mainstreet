
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=18";

//GeckoMainst
async function MainstCall(){

 var usdMainst = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd} } = usdMainst;
 mainstPrice = BigNumber(usdMainst).toFixed(); 
 
  var usdMktCap = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_market_cap} } = usdMktCap;
 
  var usdVol = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_24h_vol} } = usdVol;
 
  var usd24 = await $.getJSON(geckoMainst);
 var {"buymainstreet": {usd_24h_change} } = usd24;

  document.getElementById('usdMainst').innerHTML = usdMainst;
  document.getElementById('usdMktCap').innerHTML = usdMktCap;
  document.getElementById('usdVol').innerHTML = usdVol;
  document.getElementById('usd24').innerHTML = usd24;
}



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
}
