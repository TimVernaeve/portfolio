import AnimationContainer from '@/components/AnimationContainer'
import HeroText from '@/components/HeroText'
import Icon from '@/components/Icon'
import Nav from '@/components/Nav'
import { isMobile } from '@/helpers/isMobile'

const Landing = () => {
  return (
    <section className='flex flex-col min-h-full justify-between p-8 box-border'>
      <p>{isMobile().toString()}</p>
      <Nav />
      <HeroText />
      <AnimationContainer
        className='w-full text-m flex items-center justify-start'
        initial='hidden'
        animate='visible'
        variants='bottom'
      >
        <div className='w-fit sm:w-full flex flex-col-reverse sm:flex-row gap-8 sm:gap-0 items-start justify-between'>
          <div className='flex gap-4'>
            <AnimationContainer
              className='relative w-8 h-8'
              initial='up'
              animate='down'
              variants='bounce'
            >
              <Icon name='arrow-down' className='w-8 h-8' />
            </AnimationContainer>
            <span className='uppercase'>scroll down</span>
          </div>
          <span className='uppercase hidden sm:block'>open to work</span>
        </div>
      </AnimationContainer>
    </section>
  )
}

export default Landing
