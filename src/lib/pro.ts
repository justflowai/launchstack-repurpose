// Pro status management
// Phase 1: localStorage (ships today, zero dependencies)
// Phase 2: Swap to Clerk user metadata + Stripe webhooks
// All consumer components import from here — swap internals, zero refactor

const PRO_KEY = "launchstack_pro"
const PRO_PLAN_KEY = "launchstack_plan"

export type PlanType = "free" | "pro" | "agency"

export function getProStatus(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(PRO_KEY) === "true"
}

export function getPlanType(): PlanType {
  if (typeof window === "undefined") return "free"
  return (localStorage.getItem(PRO_PLAN_KEY) as PlanType) || "free"
}

export function activatePro(plan: PlanType = "pro"): void {
  localStorage.setItem(PRO_KEY, "true")
  localStorage.setItem(PRO_PLAN_KEY, plan)
}

export function deactivatePro(): void {
  localStorage.removeItem(PRO_KEY)
  localStorage.removeItem(PRO_PLAN_KEY)
}

export function getDailyLimit(plan: PlanType): number {
  switch (plan) {
    case "agency":
      return 500
    case "pro":
      return 100
    default:
      return 3
  }
}

export function getPlanLabel(plan: PlanType): string {
  switch (plan) {
    case "agency":
      return "Agency"
    case "pro":
      return "Pro"
    default:
      return "Free"
  }
}
