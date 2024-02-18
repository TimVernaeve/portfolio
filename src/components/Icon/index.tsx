import React from 'react'

const icons = [
  'arrow-down',
  'linkedin',
  'github',
  'internet'
] as const

export type Icons = typeof icons[number]

interface IconProps {
  name: Icons
  className?: string
}

const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={className}>
      <use href={`/img/icons.svg#${name}`} />
    </svg>
  )
}

export default Icon
