/** @jsx jsx */
import { jsx, Box, Flex, Grid, Label, Input, Select, Textarea, Radio, Checkbox, Slider, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'

export default ({content}) => {
  return (
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <Box
    as='form'
    onSubmit={e => e.preventDefault()}>
        <Label htmlFor='username'>Username</Label>
        <Input
          name='username'
          mb={3}
        />
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          mb={3}
        />
        <Box>
          <Label mb={3}>
            <Checkbox />
            Remember me
          </Label>
        </Box>
        <Label htmlFor='sound'>Sound</Label>
        <Select name='sound' mb={3}>
          <option>Beep</option>
          <option>Boop</option>
          <option>Blip</option>
        </Select>
        <Label htmlFor='comment'>Comment</Label>
        <Textarea
          name='comment'
          rows='6'
          mb={3}
        />
        <Flex mb={3}>
          <Label>
            <Radio name='letter' /> Alpha
          </Label>
          <Label>
            <Radio name='letter' /> Bravo
          </Label>
          <Label>
            <Radio name='letter' /> Charlie
          </Label>
          </Flex>
          <Label>
            Slider
          </Label>
        <Slider mb={3} />
        <Button>
          Submit
        </Button>
      </Box>
    </div>
  )
}


// export async function getStaticProps() {
//   return {
//     props: {
//       content: {
//         title: `Real results from real people.`,
//         subtitle: `Both employers and workers succeeding together`,
//         videohead: 'See how it works',
//         business: 'Businesses recruiting workers from Scalesource App',
//       }
//     }
//   }
// }
