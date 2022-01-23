const erc20 = artifacts.require("./ERC20.sol");
const supplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20, 
                    10000,
                    "TotalSem Token",
                    10,
                    "TotalSem");
    deployer.deploy(supplyChain);
}