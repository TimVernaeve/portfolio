import Image from 'next/image'
import Link from 'next/link'

import AnimationContainer from '@/components/AnimationContainer'

interface WorkCardProps {
  title: string
  image: string
  lineDisabled?: boolean
}

const Workcard = ({ title, image, lineDisabled }: WorkCardProps) => {
  return (
    <Link href={`/my-work/${title}`}>
      <AnimationContainer
        initial='rest'
        whileHover='hover'
        mobile
        className='flex flex-col box-border'
      >
        {!lineDisabled && (
          <AnimationContainer
            className='w-full border-t-2 border-neutral-400 box-border'
            variants='hr'
            initial='hidden'
            whileInView='visible'
            as='hr'
          />
        )}
        <div className='flex justify-between items-center sm:py-2 3xl:py-8 box-border'>
          <AnimationContainer
            as='span'
            variants='text'
            className='font-bold uppercase text-l sm:text-xxl'
          >
            {title}
          </AnimationContainer>
          <AnimationContainer variants='image' className='relative w-52 h-36'>
            <Image
              className='cover hidden md:block'
              fill
              src={image}
              alt={title}
              sizes='100% 100%'
            />
          </AnimationContainer>
        </div>
        <AnimationContainer
          className='w-full border-t-2 border-neutral-400 box-border'
          variants='hr'
          initial='hidden'
          whileInView='visible'
          as='hr'
        />
      </AnimationContainer>
    </Link>
  )
}

export default Workcard
