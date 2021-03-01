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
      <h2 sx={{fontSize: 4, my: 0}}>{content.subtitle}</h2>
      </div>
      <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
        <Input
          defaultValue='What kind of job are you looking for?'
          size='100'
        />
      </div>
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
      }
    }
  }
}
