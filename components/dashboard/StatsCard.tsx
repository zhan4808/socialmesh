'use client'

type StatProps = {
  stat: {
    title: string
    value: string | number
    change: string
    description: string
  }
}

export default function StatsCard({ stat }: StatProps) {
  const isPositive = stat.change.startsWith('+')
  
  return (
    <div className="overflow-hidden rounded-2xl bg-white/70 px-6 py-6 shadow-2xl backdrop-blur border border-white/30">
      <dt className="truncate text-sm font-medium text-gray-500">{stat.title}</dt>
      <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
      <dd className="mt-2 flex items-center text-sm">
        <span className={`mr-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {stat.change}
        </span>
        <span className="text-gray-500">{stat.description}</span>
      </dd>
    </div>
  )
} 