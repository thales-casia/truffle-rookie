const SeaBearToken = artifacts.require("SeaBearToken");

module.exports = function(deployer) {
  deployer.deploy(SeaBearToken);
}
