"use client"

interface UsageBarProps {
  used: number
  limit: number
}

export function UsageBar({ used, limit }: UsageBarProps) {
  const percentage = Math.min((used / limit) * 100, 100)
  const isNearLimit = percentage >= 80

  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p className="text-sm text-white font-medium">
          {used}/{limit} today
        </p>
        <p className="text-xs text-brand-gray">Free tier</p>
      </div>
      <div className="w-24 h-2 bg-brand-dark rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${
            isNearLimit ? "bg-brand-amber" : "bg-brand-teal"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
