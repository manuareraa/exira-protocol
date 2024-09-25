import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Exira", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("Exira");

    const initialOwner = (await ethers.getSigners())[0].address;

    const instance = await upgrades.deployProxy(ContractFactory, [initialOwner]);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("Exira");
  });
});
