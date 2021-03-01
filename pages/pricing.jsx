/** @jsx jsx */
import { jsx, Box, Grid, Input, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'

export default ({content}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
        <h1 sx={{fontSize: 6, my: 0}}>{content.title}</h1>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h3 sx={{fontSize: 3, my: 0}}>{content.subtitle}</h3>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h3 sx={{fontSize: 4, my: 0}}>{content.announcement}</h3>
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
        title: `Upgrade to Communicate with Workers.`,
        subtitle: 'Directly hire workers and cancel when done recruiting. No ongoing fees.',
        announcement: '100% Money Back Guarantee',
        videohead: 'See how it works',
        business: 'Businesses recruiting workers from Scalesource App',
      }
    }
  }
}
