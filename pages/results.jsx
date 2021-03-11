/** @jsx jsx */
import { jsx, Box, Grid, Input, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'

export default ({content}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      {/* <h1>Workers</h1> */}
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
        <h1 sx={{fontSize: 6, my: 0}}>{content.title}</h1>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h2 sx={{fontSize: 3, my: 0}}>{content.subtitle}</h2>
      </div>
      <Divider />
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h2 sx={{fontSize: 4, fontStyle: 'italic', my: 0}}>{content.header}</h2>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <p sx={{fontSize: 2, fontStyle: 'italic', my: 0}}>{content.paragraph}</p>
      </div>
      {/* <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
        <Input
          defaultValue='What kind of job are you looking for?'
          size='100'
        />
      </div> */}
    </div>
  )
}


export async function getStaticProps() {
  return {
    props: {
      content: {
        title: `Real results from real people.`,
        subtitle: `Both employers and workers succeeding together`,
        videohead: 'See how it works',
        business: 'Businesses recruiting workers from Scalesource App',
        header: 'We change lives...',
        paragraph: `And we don't say that just to brag. But really, outsourcing is a transformative experience for both employers and workers. We have worked with hundreds of entrepreneurs who have been able to change their businesses, and their personal lives, with the freedom they create for themselves by leveraging outsourcing.

        Here are just a few success stories from some of the entrepreneurs we've had the pleasure of working with:`
      }
    }
  }
}
