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

async function checkBSC(){
// Init Web3 connected to ETH
window.web3 = new Web3(window.ethereum);
 // Check if MetaMask is installed
 // MetaMask injects the global API into window.ethereum
 if (window.ethereum) {
    try {
      // check if the chain to connect to is installed
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }], // chainId must be in hexadecimal numbers
      });
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask
      // if it is not, then install it into the user MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x61',
                rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
              },
            ],
          });
        } catch (addError) {
          console.error(addError);
        }
      }
      console.error(error);
    }
  } else {
    // if no window.ethereum then MetaMask is not installed
    alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
  }
}// End
async function loginMetamask(){
                ethereum.connect({method: 'eth_requestAccounts'});
                const selectedAccount = await window.ethereum.request({method: "eth_requestAccounts",}).then((accounts) => accounts[0])
                window.userAddress = selectedAccount;
                document.getElementById('address').innerHTML = selectedAccount.slice(0,6)+"......"+selectedAccount.slice(38,42);
                window.localStorage.setItem("userAddress", selectedAccount);
}

//--------------------------------------LOGOUT
/*function logOut() {
      window.userAddress = null;
      window.localStorage.removeItem("userAddress");
      document.getElementById('walletButton').style.display = 'none';
      document.getElementById('btn-login').style.display = 'block';
      document.getElementById('NotConnected').style.display = 'flex';
    }
*/
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
