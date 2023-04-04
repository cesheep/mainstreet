//Mainst Coingecko Request
const geckoMainst= "https://api.coingecko.com/api/v3/simple/price?ids=buymainstreet&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=18";
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

async function ethNet(){
   document.getElementById('netWorkText').innerHTML = "Ethereum";
}

async function polyNet(){
   document.getElementById('netWorkText').innerHTML = "Polygon";
}

async function bscNet(){
   document.getElementById('netWorkText').innerHTML = "Binance";
}
async function allNet(){
   document.getElementById('netWorkText').innerHTML = "All Networks";
}

async function hotCat(){
   document.getElementById('categoryText').innerHTML = "Hot";
}
async function featCat(){
   document.getElementById('categoryText').innerHTML = "Featured";
}
async function defiCat(){
   document.getElementById('categoryText').innerHTML = "DeFi";
}
async function nftCat(){
   document.getElementById('categoryText').innerHTML = "NFT";
}
async function gamCat(){
   document.getElementById('categoryText').innerHTML = "Gaming";
}
async function mktCat(){
   document.getElementById('categoryText').innerHTML = "Marketplace";
}
async function expCat(){
   document.getElementById('categoryText').innerHTML = "Explorer";
}

//--------------------------------------ONLOAD
window.onload = async () =>{
MainstCall();
 
    var anchors = document.getElementsByTagName('*');
     for(var i = 0; i < anchors.length; i++) {
      var anchor = anchors[i];
      anchor.onclick = function() {
        code = this.getAttribute('whenClicked');
        eval(code);
     }
   }
 
 
 }
