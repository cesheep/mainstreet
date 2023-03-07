
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=18"

//GeckoMainst
async function MainstCall(){
  const response = await fetch(geckoMainst);
  const data =  await response.json();
  const {usdMainst, usdMktCap, usdVol, usd24} = data;
  mainstPrice = BigNumber(usd).toFixed();
  document.getElementById('usdMainst').innerHTML = mainstPrice;
  document.getElementById('usdMktCap').innerHTML = usdMktCap;
  document.getElementById('usdVol').innerHTML = usdVol;
  document.getElementById('usd24').innerHTML = usd24;
}



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
}
