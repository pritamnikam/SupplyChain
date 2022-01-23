const erc20 = artifacts.required("./ERC20.sol");
const supplyChain = artifacts.required("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20, 
                    10000,
                    "TotalSem Token",
                    10,
                    "TotalSem");
    deployer.deploy(supplyChain);
}