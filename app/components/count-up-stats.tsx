
'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface Stat {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

const stats: Stat[] = [
  { value: 2500, label: 'Average Savings', prefix: '$' },
  { value: 1200, label: 'Clients Helped', suffix: '+' },
  { value: 24, label: 'Hour Turnaround', suffix: 'hrs' },
  { value: 95, label: 'Satisfaction Rate', suffix: '%' }
]

export default function CountUpStats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl md:text-4xl font-bold font-poppins text-bb-gold mb-2">
            {inView && (
              <CountUpNumber 
                end={stat.value} 
                prefix={stat.prefix} 
                suffix={stat.suffix}
              />
            )}
          </div>
          <div className="text-sm md:text-base text-blue-200">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function CountUpNumber({ end, prefix = '', suffix = '' }: { end: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [end])

  return <span className="animate-count-up">{prefix}{count.toLocaleString()}{suffix}</span>
}
