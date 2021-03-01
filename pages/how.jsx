/** @jsx jsx */
import { jsx, Box, Grid, Input, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'

export default ({content}) => {
  return (
    <div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
        <h1 sx={{fontSize: 5, my: 0}}>{content.title}</h1>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
        <h2 sx={{fontSize: 4, my: 0}}>{content.subtitle}</h2>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center'}}>
        <iframe src="https://drive.google.com/file/d/1IbPtkQ9n_ERABnq105IlJ5GUBjlnuMsn/preview" width="640" height="480"></iframe>
      </div>
    </div>

  )
}


export async function getStaticProps() {
  return {
    props: {
      content: {
        title: `The Easiest Job Board to find Outsourced Staff in Central/South America, Asia and Europe.`,
        subtitle: `Over 1,000,000 resumés`,
        videohead: 'See how it works',
        business: 'Businesses recruiting workers from Scalesource App',
      }
    }
  }
}
