const erc20 = artifacts.require("ERC20");
const supplyChain = artifacts.require("SupplyChain");

module.exports = function(deployer) {
    deployer.deploy(erc20, 
                    10000,
                    "TotalSem Token",
                    10,
                    "TotalSem");
    deployer.deploy(supplyChain);
}