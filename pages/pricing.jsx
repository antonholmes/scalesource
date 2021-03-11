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
      <div sx={{variant: 'containers.grid', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={5}
            columns={[3, '1fr 1fr 1fr']}>
        {/* <Box sx={{fontSize: 2, my: 0}}> */}
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Free</Text>
              <Text sx={{variant: 'containers.text.default'}}>FREE </Text>
              <Text sx={{variant: 'containers.text.period'}}>forever</Text>
              <Divider />
              <Text sx={{variant: 'containers.text.experience'}}>Up to 3 Job Posts</Text>
              <Text sx={{variant: 'containers.text.experience'}}>2 days Job Post approval</Text>
              <Text sx={{variant: 'containers.text.experience'}}>View Job Applications</Text>
              <Text sx={{variant: 'containers.text.strikeout'}}>Communicate with workers</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Bookmark Workers</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Pro</Text>
              <Text sx={{variant: 'containers.text.default'}}>$69 </Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
              <Divider />
              <Text sx={{variant: 'containers.text.experience'}}>Up to 3 job posts</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Instant Job Post approval</Text>
              <Text sx={{variant: 'containers.text.experience'}}>View Job Applications</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Communicate with workers</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Bookmark Workers</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Read Worker Reviews</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Contact 75 workers per month</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Premium</Text>
              <Text sx={{variant: 'containers.text.default'}}>$99 </Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
              <Divider />
              <Text sx={{variant: 'containers.text.experience'}}>Up to 10 job posts</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Instant Job Post approval</Text>
              <Text sx={{variant: 'containers.text.experience'}}>View Job Applications</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Communicate with workers</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Bookmark Workers</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Read Worker Reviews</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Contact 500 workers per month</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Worker Mentoring Service</Text>
              <Text sx={{variant: 'containers.text.experience'}}>Video Guide to Outsourcing</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Button sx={{variant: 'buttons.normal'}}>Register</Button>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Button sx={{variant: 'buttons.normal'}}>Upgrade</Button>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Button sx={{variant: 'buttons.normal'}}>Upgrade</Button>
            </Box>
          </Card>
        </Grid>
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
        title: `Upgrade to Communicate with Workers.`,
        subtitle: 'Directly hire workers and cancel when done recruiting. No ongoing fees.',
        announcement: '100% Money Back Guarantee',
        videohead: 'See how it works',
        business: 'Businesses recruiting workers from Scalesource App',
      }
    }
  }
}
