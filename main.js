<!-- Adding web3.js-->
<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>

<!-- Finsweet Cookie Consent -->
<script async src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" fs-cc-mode="opt-in"></script>
<script src="https://cdn.jsdelivr.net/npm/@finsweet/cms-library@1/cms-library.js"></script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-THZ32T8');</script>
<!-- End Google Tag Manager -->

<script>
mainstContract = "0x8FC1A944c149762B6b578A06c0de2ABd6b7d2B89" ;
mmContract = "0xa36c806c13851F8B27780753563fdDAA6566f996";
bananaContract= "0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9";
GNANAContract= "0x8F97B2E6559084CFaBA140e2AB4Da9aAF23FE7F8";
bBagAd = "0xeE983b1c116114d638697ed3037DB37A6b981F25";
window.userAddress = null;
window.userAddress = null;
window.tokenInfo = null;
window.maxSupply = null;
window.totalSupply = null;
window.mmBalance = null;
const SERVER_URL ="https://bsc-dataseed1.binance.org:443";
window.web3 = new Web3(window.ethereum);

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
            
            if (window.web3) {
                const selectedAccount = await window.ethereum.request({method: "eth_requestAccounts",}).then((accounts) => accounts[0])
                window.userAddress = selectedAccount;
                document.getElementById('address').innerHTML = selectedAccount;
                document.getElementById('btn-login').style.display = 'none';
                document.getElementById('walletButton').style.display = 'block';
                window.localStorage.setItem("userAddress", selectedAccount);
                checkLogged();
                checkBSC();
                getMainstData();
                getMonkeysData();
            }else{
                alert('Please Install Metamask')
            }
}

function logOut() {
      window.userAddress = null;
      window.localStorage.removeItem("userAddress");
      document.getElementById('walletButton').style.display = 'none';
      document.getElementById('btn-login').style.display = 'block';
      checkLogged();
    }

async function checkLogged(){
        window.web3 = new Web3(window.ethereum);
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('walletButton').style.display = 'block';
        getMainstData();
        getMonkeysData();
        getBanana();
        getGnana();
        document.getElementById("address").innerText = window.userAddress;
        
    }

//Mainst Data
async function getMainstData(){
  const mainstjsonString = JSON.stringify(mainstABI);
  const mainstABIParse = JSON.parse(mainstjsonString);
  const txn =  new web3.eth.Contract(mainstABIParse,mainstContract);
  const tokenInfo =  await txn.methods.balanceOf(userAddress).call({from: window.userAddress});
  hodl = tokenInfo;
  window.localStorage.setItem("hodl", tokenInfo);
  document.getElementById('MainstBalance').innerHTML = tokenInfo.slice(0,-9);
}

//MM Data
async function getMonkeysData() {
  const mmjsonString = JSON.stringify(mmABI);
  const mmABIParse = JSON.parse(mmjsonString);
  const contract =  new web3.eth.Contract(mmABIParse,mmContract);
  const totalSupply =  await contract.methods.TOKEN_ID().call({from: window.userAddress});
  const mmBalance =  await contract.methods.balanceOf(window.userAddress).call({from: window.userAddress});
  document.getElementById('minted-counter').innerHTML = totalSupply;
  document.getElementById('mmHold').innerHTML = mmBalance;
  document.getElementById('mmPageMinted').innerHTML = totalSupply;
}

async function getBanana(){
      const bananaString = JSON.stringify(minABI);
      const minABIParse = JSON.parse(bananaString);
      const bananaTxn =  new web3.eth.Contract(minABIParse,bananaContract);
      const bananaBalance =  await bananaTxn.methods.balanceOf(bBagAd).call({from: window.userAddress});
      document.getElementById('banana').innerHTML = "BANANA IN BAG = "+bananaBalance.slice(0,-18);;
}
async function getGnana(){
      const gnanaString = JSON.stringify(minABI);
      const minABIParse = JSON.parse(gnanaString);
      const gnanaTxn =  new web3.eth.Contract(minABIParse,GNANAContract);
      const gnanaBalance =  await gnanaTxn.methods.balanceOf(bBagAd).call({from: window.userAddress});
      document.getElementById('gnana').innerHTML = " GNANA IN BAG = "+gnanaBalance.slice(0,-18);;
}


window.userAddress = window.localStorage.getItem("userAddress");

window.onload = async () =>{
  window.web3 = new Web3(window.ethereum);
  checkLogged();
  window.userAddress = window.localStorage.getItem("userAddress");
// Load in Localstore key
//Whenclicked---------------------------------------
var anchors = document.getElementsByTagName('*');
    for(var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.onclick = function() {
        code = this.getAttribute('whenClicked');
        eval(code); 
    }
} //EndClicked--------------------------------------
}//EndWindowOnLoad-----------------------------------


window.onUnload = async() =>{
    logOut();
}

</script>
