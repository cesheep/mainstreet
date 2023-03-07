
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=18";

//GeckoMainst
async function MainstCall(){
  const response = await fetch(geckoMainst[usd,usd_market_cap,usd_24h_vol,usd_24h_change]);
  const data =  await response.json();
  var {usdMainst, usdMktCap, usdVol, usd24} = data;
  //var {"buymainstreet": {usd} } = data.usd;
  //var usdMktCap = data.usd_market_cap;
  //var usdVol = data.usd_24h_vol;
  //var usd24 = data.usd_24h_change;
  //mainstPrice = BigNumber(usdMainst).toFixed();
  document.getElementById('usdMainst').innerHTML = usdMainst;
  document.getElementById('usdMktCap').innerHTML = usdMktCap;
  document.getElementById('usdVol').innerHTML = usdVol;
  document.getElementById('usd24').innerHTML = usd24;
}



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
}