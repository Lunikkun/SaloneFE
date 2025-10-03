import type { Issue } from './Issue'

export interface ErrorRegistration {
  success: boolean
  error: {
    issues: Issue[]
    name: string
  }
}
