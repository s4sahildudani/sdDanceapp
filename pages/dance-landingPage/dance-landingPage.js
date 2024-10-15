import React from 'react'
import Danceherosection from '../../components/dance-herosection/dance-herosection'
import DanceClasseSection from '../../components/dance-classesection/dance-classesection'
import DanceTestimonial from '../../components/dance-testimonialsection/dance-testimonialsection'
function danceLandingPage() {
  return (
    <div>
      <Danceherosection />
      <DanceClasseSection />
      <DanceTestimonial />
    </div>
  )
}

export default danceLandingPage