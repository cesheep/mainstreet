
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=18"

//GeckoMainst
async function MainstCall(){
  var MainstGecko = await $.getJSON(geckoMainst);
  var {"buymainstreet": {usd} } = MainstGecko;
  mainstPrice = BigNumber(usd).toFixed();
  document.getElementById('mainstGecko').innerHTML = mainstPrice;
}



//--------------------------------------ONLOAD
window.onload = async () =>{
 MainstCall();
}
