//Money Monkeys MY NFT Display



//Get IDS using the address


//Get the BASEURI using the IDS.


//Do a cicle for using the number of IDS

///Every cicle fetch image and metadata and display it

mmContractURI = "0xAc760d623F0181FDa420271746b7AF39e88F934a";


mmContractWUri = "0xa36c806c13851F8B27780753563fdDAA6566f996";

//Create DIV for displaying the data (Loop) Filling this DIV

var mmHold
for(let i = 0; i < mmHold ; i++){
    const tokenId = await contract.methods.tokenOfOwnerByIndex(window.userAddress,i);
    const URI = await contract.methods.tokenURI(tokenId).call;

    if(URI.startsWith("ipfs://"))
    URI = `https://ipfs.io/ipf/${URI.split("ipfs://")[1]}`//Changes   ipfs for https
}

    const tokenMetadata = await fetch(URI).then((response) => response.json());
    console.log(tokenMetadata)


