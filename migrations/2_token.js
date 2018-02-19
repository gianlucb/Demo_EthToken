var MyToken = artifacts.require("./MyToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyToken,1000,"MyDemoToken","MDT",0);
};
