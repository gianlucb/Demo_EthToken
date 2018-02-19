# Demo Dapp - Simple Token on Ethereum

Simple application composed by a web page that transfers a simple custom Token.
The web application uses a JS library to interact with a local Ethereum node ([Ganache](http://truffleframework.com/ganache/))
 
## Structure

The solution is composed by:

- the **MyToken** token (*/contract/Mytoken.sol*)
- a web page and javascript file (*/web*)

There are some extra files needed for the deployment via *truffle*

## Compile, Deploy, Test

The solution is based on [Truffle](http://truffleframework.com/) suite and configured to attach to a running [Ganache](http://truffleframework.com/ganache/) instance (local emulator of an Ethereum BlockChain)

- Download and execute [Ganache](http://truffleframework.com/ganache/)
- `truffle compile`
- `truffle migrate`

After the deployment task (called `migrate`) the address of the deployed contract (Token) is displayed. Copy this address and paste it at line **4** of */web/index.js*:

~~~javascript
contractInstance = MyToken.at('ADDRESS_OF_DEPLOYED_CONTRACT');
~~~

This is required as the javascript must know which is the corret contract (Token) to call.

## Use it

Open *index.html* in a web browser and insert the amount of Tokens to exchange between Account 1 and Account 2. 

Each transfer is a chain Transaction!
