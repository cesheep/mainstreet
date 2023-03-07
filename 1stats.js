
//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=18"

//GeckoMainst
  var MainstGecko = await $.getJSON(geckoMainst);
  var {"0x8fc1a944c149762b6b578a06c0de2abd6b7d2b89": {usd} } = MainstGecko;
  mainstPrice = BigNumber(usd).toFixed();

