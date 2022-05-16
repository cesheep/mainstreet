  
<script>    		
	Moralis.initialize("DTRG2uHrEe1PEUZXZURgew7GYkDPh1CqOtcr4cQr");
	Moralis.serverURL = "https://hxdku3fi3cqv.usemoralis.com:2053/server";
	const appId = "DTRG2uHrEe1PEUZXZURgew7GYkDPh1CqOtcr4cQr";
	const serverUrl = "https://hxdku3fi3cqv.usemoralis.com:2053/server";
	Moralis.start({ serverUrl, appId });
	const mmContract ="0xa36c806c13851F8B27780753563fdDAA6566f996";
	const mainstContract = "0x8FC1A944c149762B6b578A06c0de2ABd6b7d2B89";
	const currentUser = Moralis.User.current();
    const bscchain = "bsc"
	async function web3On(){
        await Moralis.enableWeb3();}
    async function mmMonkeys(){
                Moralis.User.currentAsync().then(function(user){var account = user.get('ethAddress');
                $.getJSON('https://api.bscscan.com/api?module=contract&action=getabi&address=0xa36c806c13851F8B27780753563fdDAA6566f996&apikey=MJ5FZC1EAHHCJ8SDU6JFF1RUS62FJ418PA',function (data){
                web3On();
                
                  let contractABI = "";
                  contractABI = JSON.parse(data.result);
                        Moralis.User.currentAsync().then(function(user){var account = user.get('ethAddress')});
                                                  
        
                                   //Reads MMHOldings
                                  const holdREAD = {address: mmContract,function_name: "balanceOf",chain: "bsc",abi: contractABI,params:{owner: account}};
                                  const mmBalance = Moralis.Web3API.native.runContractFunction(holdREAD).then(function(mmHoldings){
                                  document.getElementById('mmHold').innerHTML = mmHoldings;
                                  });
          
                                  //Reads Total Supply
                                  const supplyREAD = {address: mmContract,function_name: "MAX_SUPPLY",chain: "bsc",abi: contractABI,};
                                  const mmSupply = Moralis.Web3API.native.runContractFunction(supplyREAD).then(function(mmTotal){
                                      document.getElementById('total-counter').innerHTML = mmTotal;
                                  });
          
                                  //Reads OnGoing Mint
                                  const mintedREAD = {address: mmContract,function_name: "TOKEN_ID",chain: "bsc",abi: contractABI,};
                                  const mmOngoing = Moralis.Web3API.native.runContractFunction(mintedREAD).then(function(mmMinted){
                                      document.getElementById('minted-counter').innerHTML = mmMinted;
                                  });
                                  //End Money Monkeys   
                })//ENDJSON
                });

    }
//MAINSTDATAFETCH
    async function fMainst(){
        Moralis.User.currentAsync().then(function(user){var account = user.get('ethAddress');
        $.getJSON('https://api.bscscan.com/api?module=contract&action=getabi&address=0x8fc1a944c149762b6b578a06c0de2abd6b7d2b89&apikey=MJ5FZC1EAHHCJ8SDU6JFF1RUS62FJ418PA',function (data){
          let MainstreetABI = "";                          			    
          MainstreetABI = JSON.parse(data.result);
           //Reads $Mainstreet Holdings
              const balanceREAD = {address: mainstContract,function_name: "balanceOf",chain: "bsc",abi: MainstreetABI,params:{account: account}};
              const mainstBalance = Moralis.Web3API.native.runContractFunction(balanceREAD).then(function(MainstHoldings){
                    const fixNumbers = MainstHoldings.substring(0, MainstHoldings.length -9);
                  document.getElementById('MainstBalance').innerHTML = fixNumbers;
                  });
        })//EndJSON 
    });          
    } 

 window.onload = async function() {  
        mmMonkeys();
        fMainst();       
//Whenclicked---------------------------------------
          var anchors = document.getElementsByTagName('*');
          for(var i = 0; i < anchors.length; i++) {
              var anchor = anchors[i];
              anchor.onclick = function() {
                  code = this.getAttribute('whenClicked');
                  eval(code); 
              }  
          }//ChecksIfYourLogged
          if(currentUser){
            Moralis.User.currentAsync().then(function(user){
                let account = user.get('ethAddress');
                document.getElementById('address').innerHTML = account;
                document.getElementById('btn-login').style.display = 'none';
                document.getElementById('walletButton').style.display = 'block';
        }  
        )}
}
async function loginMetamask(){
    
    const user = await Moralis.Web3.authenticate({signingMessage:"Welcome to Mainstreet"});
    web3On();
        mmMonkeys();
        fMainst();            
            Moralis.User.currentAsync().then(function(user){
                let account = user.get('ethAddress');
                    if (user){
                        document.getElementById('address').innerHTML = account;
                        document.getElementById('btn-login').style.display = 'none';
                        document.getElementById('walletButton').style.display = 'block';
                        //document.getElementById('mmHold').innerHTML = mmHoldings;
                        //document.getElementById('total-counter').innerHTML = mmTotal;
                        //document.getElementById('minted-counter').innerHTML = mmMinted;   
                    }                      			
              })
          }         
async function logOut(){
    await Moralis.User.logOut();
        const currentUser = Moralis.User.currentAsync();
        document.getElementById('walletButton').style.display = 'none';
        document.getElementById('btn-login').style.display = 'block';
} 
          
async function mintMM(){
    web3On();
    $.getJSON('https://api.bscscan.com/api?module=contract&action=getabi&address=0xa36c806c13851F8B27780753563fdDAA6566f996&apikey=MJ5FZC1EAHHCJ8SDU6JFF1RUS62FJ418PA',  async function  (data) {  

        let contractABI = "";
            contractABI = JSON.parse(data.result);
              
            const contractOptions = {
                contractAddress: mmContract,
                functionName: 'mintNFT',
                abi: contractABI,
                params: { amount:1}
};	
                const allowance = await Moralis.executeFunction(contractOptions,1);
      			await allowance.wait();
                console.log(allowance); 
              });  
          }        	
</script>
