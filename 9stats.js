
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=18"

//GeckoMainst
async function MainstCall(){
  var usdMainst = await $.getJSON(geckoMainst);
  var usdMktCap = await $.getJSON(geckoMainst);
  var usdVol = await $.getJSON(geckoMainst);
  var usd24 = await $.getJSON(geckoMainst);
  var {"buymainstreet": {usd} } = usdMainst;
  var {"buymainstreet": {usd_market_cap} } = usdMktCap;
  var {"buymainstreet": {usd_24h_vol} } = usdVol;
  var {"buymainstreet": {usd_24h_change} } = usd24;
  mainstPrice = BigNumber(usd).toFixed();
  document.getElementById('usdMainst').innerHTML = mainstPrice;
  document.getElementById('usdMktCap').innerHTML = JSON.stringify(usdMktCap);
  document.getElementById('usdVol').innerHTML = JSON.stringify(usdVol);
  document.getElementById('usd24').innerHTML = JSON.stringify(usd24);
}



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
}
