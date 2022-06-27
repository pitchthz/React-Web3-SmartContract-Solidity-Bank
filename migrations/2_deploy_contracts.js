// const { artifacts } = require("truffle");
const Contracts = artifacts.require("Contracts");

module.exports = function (deployer) {
  deployer.deploy(Contracts);
};
