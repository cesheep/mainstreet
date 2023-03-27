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





//----- Web3
let web3auth = null;
let provider = null;

      (async function init() {
        $(".btn-logged-in").hide();
        $("#sign-tx").hide();
       
       const clientId = "BAj-WE23h2CnHlQ19TQwacBWGAF1cvx9kEhSK3hNqg78hwAYkzD-Se843cfcn-WDqdMbYc1Io2OJM3xIhDhVau0"; // get your clientId from https://dashboard.web3auth.io

        const web3auth = new Web3Auth({
          clientId, 
          web3AuthNetwork: "mainnet", // mainnet, aqua, celeste, cyan or testnet
          chainConfig: {
            chainNamespace: "eip155",
            chainId: "0x1",
            rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });
       
       
       
        await web3auth.initModal();
        if (web3auth.provider) {
          $(".btn-logged-in").show();
          $(".btn-logged-out").hide();
          if (web3auth.connectedAdapterName === "openlogin") {
            $("#sign-tx").show();
          }
        } else {
          $(".btn-logged-out").show();
          $(".btn-logged-in").hide();
        }
      })();

      $("#login").click(async function (event) {
        try {
    const web3authProvider = await web3auth.connect();
          $(".btn-logged-in").show();
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#get-user-info").click(async function (event) {
        try {
          const user = await web3auth.getUserInfo();
          console.log(user);
        } catch (error) {
          console.error(error.message);
        }
      });

      $("#logout").click(async function (event) {
        try {
          await web3auth.logout();
          $(".btn-logged-in").hide();
          $(".btn-logged-out").show();
        } catch (error) {
          console.error(error.message);
        }
      });
