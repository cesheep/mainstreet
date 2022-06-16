//--------------------------------------COINFLIP VARS

var Heads = '';
var Tails = '';
var result = ''; //Heads = 0, Tails = 1
var bnbON = '';
var mainstON = '';
var resetInput = '';


//Chain Selector
async function bnbSelect(){
  document.getElementById('betFor').innerHTML = "BET $BNB TO WIN $BNB";
  document.getElementById('selectionDisplay').innerHTML = "Please select a side";
  document.getElementById('PayOut').innerHTML = "Payout = x0.00";
  resetInput = document.getElementById("inputBet").placeholder = "$1000 in $BNB";
  resetInput = document.getElementById("inputBet").value = '';
  bnbON = 1;
  mainstON = 0;
  Heads ='';
  Tails ='';
  window.x=0;

}
async function mainstSelect (){
  document.getElementById('betFor').innerHTML = "BET $MAINST TO WIN $MAINST";
  document.getElementById('selectionDisplay').innerHTML = "Please select a side";
  resetInput = document.getElementById("inputBet").placeholder = "$1000 in $MAINST";
  document.getElementById('PayOut').innerHTML = "Payout = x0.00";
  resetInput = document.getElementById("inputBet").value = '';
  mainstON =1;
  bnbON = 0;
  Heads ='';
  Tails ='';
  window.x=0;
}

//Coinflip
async function selectionHeads(){
    Tails = 0;
    Heads = 1;
    document.getElementById('PayOut').innerHTML = "Payout = x1.90";
    document.getElementById('selectionDisplay').innerHTML = "Selection: Heads";
  }
  async function selectionTails(){
    document.getElementById('PayOut').innerHTML = "Payout = x1.90";
    document.getElementById('selectionDisplay').innerHTML = "Selection: Tails";
    Heads = 0;
    Tails = 1;
  }
  
  async function selectSide(){
    if (Heads == 1){
      document.getElementById('selecting').innerHTML = "Heads"
      Tails = 0;
      result = 0;
    }
    if(Tails == 1){
      Heads = 0;
      document.getElementById('selecting').innerHTML = "Tails";
      result = 1;
    }
  
  }
  
  async function fillOverlay(){
    
  document.getElementById('betting').innerHTML = window.x;//Sets the ammount
    
  if(bnbON==1){//Sets Currency
    document.getElementById('paying').innerHTML = "$BNB";
  }else{
    document.getElementById('paying').innerHTML = "$MAINST";
  }
  }
  
  
  async function checkDataBet(){
    if(bnbON > 0 || mainstON >0){//Checks Coin
      if(Tails > 0 || Heads > 0){//Checks Selection
        selectSide();
        var Bet = document.getElementById('inputBet').value;
        if( window.x > 0 && Bet !== ''){//Check Requiered
          document.getElementById('confirmOverlay').style.display = "flex";
          fillOverlay();
        }else{
          alert("Please Input an amount")
  
        }
      }else{//Else Selection
        alert("Please select a side");
        return;
      } 
    }else{//Else Coin
      alert("Please select a Token to play first.");
      return;
    }
  }
  