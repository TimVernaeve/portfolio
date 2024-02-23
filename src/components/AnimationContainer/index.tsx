'use client'

import { useMediaQuery } from '@mantine/hooks'
import { type Variants, motion } from 'framer-motion'

import {
  bounceAnimation,
  fadeInLeft,
  fadeInRight,
  fadeInBottom,
  fadeInTop,
  imageMotion,
  textMotion,
  hrMotion
} from '@/helpers/animations'

interface BaseProps {
  children?: React.ReactNode
  initial?: 'up' | 'hidden' | 'rest' | ''
  animate?: 'down' | 'visible'
  whileInView?: 'visible'
  whileHover?: 'hover' | ''
  variants?:
  | 'bounce'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'image'
  | 'text'
  | 'hr'
  className?: string
  mobile?: boolean
}

type ContainerAsDiv = BaseProps &
Omit<
React.HTMLProps<HTMLDivElement>,
keyof BaseProps & {
  as?: 'div'
}
>

type ContainerAsSpan = BaseProps &
Omit<
React.HTMLProps<HTMLSpanElement>,
keyof BaseProps & {
  as: 'span'
}
>

type ContainerAsHr = BaseProps &
Omit<
React.HTMLProps<HTMLHRElement>,
keyof BaseProps & {
  as: 'hr'
}
>

type AnimationContainerProps = ContainerAsDiv | ContainerAsSpan | ContainerAsHr

const AnimationContainer = ({
  children,
  initial,
  animate,
  variants,
  className,
  whileInView,
  whileHover,
  mobile = false,
  ...props
}: AnimationContainerProps) => {
  const isMobile = useMediaQuery('(max-width: 640px)')

  let variantsValue

  switch (variants) {
    case 'top':
      variantsValue = fadeInTop
      break
    case 'bottom':
      variantsValue = fadeInBottom
      break
    case 'left':
      variantsValue = fadeInLeft
      break
    case 'right':
      variantsValue = fadeInRight
      break
    case 'bounce':
      variantsValue = bounceAnimation
      break
    case 'image':
      variantsValue = imageMotion
      break
    case 'text':
      variantsValue = textMotion
      break
    case 'hr':
      variantsValue = hrMotion
      break
  }

  const { as } = props

  const checkedInitial = mobile ? (isMobile ? '' : initial) : initial
  const checkedAnimate = mobile ? (isMobile ? '' : animate) : animate
  const checkedWhileInView = mobile
    ? isMobile
      ? 'visible'
      : whileInView
    : whileInView
  const checkedWhileHover = mobile ? (isMobile ? '' : whileHover) : whileHover

  if (as === 'hr') {
    return (
      <motion.hr
        initial={checkedInitial}
        animate={checkedAnimate}
        whileInView={checkedWhileInView}
        variants={variantsValue as Variants}
        className={className}
      />
    )
  }

  if (as === 'span') {
    return (
      <motion.span
        initial={checkedInitial}
        animate={checkedAnimate}
        whileInView={checkedWhileInView}
        whileHover={checkedWhileHover}
        variants={variantsValue as Variants}
        className={className}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <motion.div
      initial={checkedInitial}
      animate={checkedAnimate}
      whileInView={checkedWhileInView}
      whileHover={checkedWhileHover}
      variants={variantsValue as Variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimationContainer
