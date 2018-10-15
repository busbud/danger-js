import { Bitrise } from "./Bitrise"
import { BuddyBuild } from "./BuddyBuild"
import { Buildkite } from "./Buildkite"
import { Circle } from "./Circle"
import { Codeship } from "./Codeship"
import { Concourse } from "./Concourse"
import { DockerCloud } from "./DockerCloud"
import { Drone } from "./Drone"
import { FakeCI } from "./Fake"
import { Jenkins } from "./Jenkins"
import { Nevercode } from "./Nevercode"
import { Semaphore } from "./Semaphore"
import { Surf } from "./Surf"
import { TeamCity } from "./TeamCity"
import { Travis } from "./Travis"
import { VSTS } from "./VSTS"
import { Screwdriver } from "./Screwdriver"
declare const providers: (
  | typeof Bitrise
  | typeof BuddyBuild
  | typeof Buildkite
  | typeof Circle
  | typeof Codeship
  | typeof Concourse
  | typeof DockerCloud
  | typeof Drone
  | typeof FakeCI
  | typeof Jenkins
  | typeof Nevercode
  | typeof Semaphore
  | typeof Surf
  | typeof TeamCity
  | typeof Travis
  | typeof VSTS
  | typeof Screwdriver)[]
declare const realProviders: (
  | typeof BuddyBuild
  | typeof Buildkite
  | typeof Circle
  | typeof Codeship
  | typeof Concourse
  | typeof DockerCloud
  | typeof Drone
  | typeof Jenkins
  | typeof Nevercode
  | typeof Semaphore
  | typeof Surf
  | typeof TeamCity
  | typeof Travis
  | typeof VSTS
  | typeof Screwdriver)[]
export { providers, realProviders }
