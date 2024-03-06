import {describe, test, expect} from "vitest";
import {exampleFunction} from "src/example";
import {mock, MockProxy} from "vitest-mock-extended";
import {NS, Server} from "../NetscriptDefinitions";

const serverExample: Server = {
  hostname: "example server",
  moneyAvailable: 1,
  hackDifficulty: 1,
  backdoorInstalled: true,
  numOpenPortsRequired: 0,
  cpuCores: 1,
  baseDifficulty: 1,
  ftpPortOpen: false,
  ip: "127.0.0.1",
  hasAdminRights: true,
  maxRam: 4,
  httpPortOpen: false,
  isConnectedTo: false,
  moneyMax: 1,
  minDifficulty: 1,
  serverGrowth: 1,
  openPortCount: 1,
  ramUsed: 1,
  organizationName: '',
  purchasedByPlayer: false,
  requiredHackingSkill: 1,
  smtpPortOpen: false,
  sqlPortOpen: false,
  sshPortOpen: false
};

describe("Example Function Test", () => {
  test("Test Return Value", () => {
    expect(exampleFunction()).toStrictEqual("example string")
  })

  test("NS test", () => {
    const ns = mock<NS>();
    ns.getServer.mockImplementation(() => serverExample);

    expect(ns.getServer()).toStrictEqual(serverExample);
    expect(ns.getServer().hostname).toStrictEqual("example server");
  })
})