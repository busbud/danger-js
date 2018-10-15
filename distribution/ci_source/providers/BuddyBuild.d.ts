import { Env, CISource } from "../ci_source"
/**
 * ### CI Setup
 *
 * Buddybuild has an integration for Danger JS already built-in.
 *
 * ### Token Setup
 *
 * Login to buddybuild and select your app. Go to your *App Settings* and
 * in the *Build Settings* menu on the left, choose *Environment Variables*.
 *
 * #### GitHub
 * Add the `DANGER_GITHUB_API_TOKEN` to your build user's ENV.
 *
 */
export declare class BuddyBuild implements CISource {
  private readonly env
  constructor(env: Env)
  readonly name: string
  readonly isCI: boolean
  readonly isPR: boolean
  readonly pullRequestID: string
  readonly repoSlug: string
}
