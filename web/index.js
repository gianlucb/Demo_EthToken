web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"decimalUnits","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
MyToken = web3.eth.contract(abi);
contractInstance = MyToken.at('0x345ca3e014aaf5dca488057592ee47305d9b3e10');
accounts = web3.eth.accounts;
web3.eth.defaultAccount = web3.eth.accounts[0];

function TransferToken(value) {
 valueToTransfer = $("#value").val();
 try {
   contractInstance.transfer(accounts[1], valueToTransfer, function(r) {  
   $("#account-1").html(contractInstance.balanceOf(accounts[0]).toString());
   $("#account-2").html(contractInstance.balanceOf(accounts[1]).toString());
  });
 
 } catch (err) {
     console.log(err);
 }
}

$(document).ready(function() {
 
 for (var i = 1; i < 3; i++) {
  let name = accounts[i-1];
  $("#account-"+i+"-name").html(accounts[i-1]);
  let val = contractInstance.balanceOf.call(name).toString()
  $("#account-"+i).html(val);
 }
});