import Image from 'next/image'
import Hero from './hero/page'
import Intro from './(components)/Intro'
import Map from './(components)/Map'
import Offers from './(components)/Offers'
import Review from './reviews/Review'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro/>   
      <Offers/>
      <Review/>
      <Map/>
    </>
  )
}
