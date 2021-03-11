/** @jsx jsx */
import { jsx, Box, Grid, Input, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'
import { getFontDefinitionFromManifest } from 'next/dist/next-server/server/font-utils'

export default ({content}) => (
  <div sx={{ height: `calc(100vh - 60px)`}}>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0}}>{content.title}</h1>
    </div>
    {/* <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <h1 sx={{fontSize: 4, my: 0}}>{content.subtitle}</h1>
    </div> */}
    <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={1}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 5, my: 0, color: 'primary'}}>40,000 jobseekers</Box>
        <Box sx={{fontSize: 5, my: 0, color: 'primary'}}>6,500 employers</Box>
      </Grid>
      <Grid gap={1}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 3, my: 0}}>signed up last month.</Box>
        <Box sx={{fontSize: 3, my: 0}}>signed up last month.</Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Input sx={{variant: 'forms.input', borderColor: 'muted'}}
          defaultValue='Search resumes'
        />
        <Input sx={{variant: 'forms.input', borderColor: 'muted', borderRadius: '99999'}}
          defaultValue='Search for jobs'
        />
      </Grid>
      <br />
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 2, my: 0}}>MOST RECENT RESUMES CREATED</Box>
        <Box sx={{fontSize: 2, my: 0}}>MOST RECENT JOBS POSTED</Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 2, my: 0}}>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/AndreaHuitron.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.experience'}}>5 years as Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.price'}}>$1,000</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/mexico.png' />
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/CandelaCiapponi.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Customer Service Representative</Text>
              <Text sx={{variant: 'containers.text.experience'}}>4 years as a Customer Service Representative</Text>
              <Text sx={{variant: 'containers.text.price'}}>$1,000</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/argentina.png' />
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/KarlaCotoner.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>CSR/Virtual Assistant/SMM</Text>
              <Text sx={{variant: 'containers.text.experience'}}>9 years as CSR, 2 years as VA</Text>
              <Text sx={{variant: 'containers.text.price'}}>$1,200</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/philippines.png' />
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/KarlaPadilla.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.experience'}}>1 year as Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.price'}}>$800</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/mexico.png' />
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/MarcelaIsunza.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.experience'}}>1 year as Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.price'}}>$1,000</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/mexico.png' />
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/StephaniaGuzman.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.experience'}}>1 year as Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.price'}}>$1,100</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/mexico.png' />
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/ivanadelagarza.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.experience'}}>1 year as Virtual Assistant</Text>
              <Text sx={{variant: 'containers.text.price'}}>$1,000</Text>
            </Box>
            <Image sx={{variant: 'containers.images.flag'}} src='/mexico.png' />
          </Card>
        </Box>
        <Box sx={{fontSize: 2, my: 0}}>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Waste Analyst</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 12, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$800-$1,000</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Telecom Analyst</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 12, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$1,250-$1,500</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Virtual Assistant</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 11, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$1,000-$1,200</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Developer</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 10, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$2,100</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Tech Support</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 10, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$1,000-$1,200</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Trainer</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 10, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$1,250-$1,750</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Customer Service Representative</Text>
            <Text sx={{variant: 'containers.text.date'}}>March 10, 2021</Text>
            <Text sx={{variant: 'containers.text.price'}}>$900</Text>
          </Card>
        </Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 1, my: 0}}>View more resumes</Box>
        <Box sx={{fontSize: 1, my: 0}}>View more job posts</Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Button sx={{variant: 'buttons.primary'}}>I want to hire</Button>
        <Button sx={{variant: 'buttons.primary'}}>I want a job</Button>
      </Grid>
      <Divider />
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.subtitle}</h1>
      </div>
      <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={5}
            columns={[2, '1fr 1fr']}>
        {/* box 1 */}
        <Box sx={{fontSize: 2, my: 0}}>
        <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            {/* savage icons from https://iconmonstr.com/  */}
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M4.57 18.55l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm-18.473.918l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm3.903-4.468h-24v-2.059c0-.99.079-1.562 1.249-1.833 1.352-.311 2.61-.585 1.999-1.734-1.852-3.502-.49-5.374 1.468-5.374 1.994 0 3.324 1.943 1.466 5.374-.318.585-.14.944.284 1.195.237-.226.591-.398 1.122-.521 1.683-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209.532.123.887.295 1.123.522.425-.252.604-.61.285-1.196-1.858-3.431-.528-5.374 1.466-5.374 1.958 0 3.32 1.872 1.468 5.374-.61 1.149.647 1.423 1.999 1.734 1.17.271 1.249.843 1.249 1.833v2.059zm-6-1h5v-1.059c0-.783.021-.744-.475-.858-2.277-.536-2.551-.979-2.785-1.49-.162-.355-.27-.936.129-1.688.765-1.447.968-2.67.555-3.354-.393-.652-1.789-.83-2.289.012-.408.685-.197 1.931.562 3.334.407.749.301 1.332.141 1.688-.129.286-.282.581-.886.884.04.266.048.57.048.912v1.619zm-11.953-2.531c-.602-.304-.756-.598-.885-.884-.16-.356-.266-.939.141-1.688.76-1.403.971-2.649.562-3.334-.5-.842-1.896-.664-2.289-.012-.413.684-.21 1.907.555 3.354.399.752.291 1.333.129 1.688-.233.511-.508.954-2.785 1.49-.495.114-.475.075-.475.858v1.059h5v-1.623c0-.341.007-.643.047-.908zm10.953 2.531v-1.619c0-1.127-.03-1.178-.814-1.359-2.751-.634-3.093-1.162-3.359-1.744-.181-.395-.301-1.048.154-1.907 1.022-1.929 1.278-3.582.703-4.538-.437-.725-1.244-.833-1.685-.833-.446 0-1.259.11-1.699.85-.577.969-.318 2.613.712 4.512.465.857.348 1.51.169 1.909-.289.641-.679 1.114-3.368 1.751-.783.181-.813.232-.813 1.355v1.623h10z"/></svg>
            <Text sx={{variant: 'text.heading', textAlign: 'left' }}>Scalesource App is just the marketplace. You recruit and hire on your terms.</Text>
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm1 11.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z"/></svg>
            <Text sx={{variant: 'text.heading', textAlign: 'left' }}>Your staff works on your terms—part time, full time, hourly or salaried.</Text>
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            {/* savage icons from https://iconmonstr.com/  */}
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M10 3.002c4.411 0 8 2.849 8 6.35 0 3.035-3.029 6.311-7.925 6.311-1.58 0-2.718-.317-3.718-.561-.966.593-1.256.813-3.006 1.373.415-1.518.362-2.182.331-3.184-.837-1.001-1.682-2.069-1.682-3.939 0-3.501 3.589-6.35 8-6.35zm0-2.002c-5.281 0-10 3.526-10 8.352 0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 1.181.289 2.312.421 3.382.421 5.903 0 9.925-4.038 9.925-8.313 0-4.852-4.751-8.352-10-8.352zm11.535 11.174c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348zm-15.035-3.763c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071z"/></svg>
            <Text sx={{variant: 'text.heading', textAlign: 'left' }}>Proactively contact workers or post a job and let them come to you.</Text>
          </Card>
        </Box>
        {/* box 2 */}
        <Box sx={{fontSize: 2, my: 0}}>
        <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            {/* savage icons from https://iconmonstr.com/  */}
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M3 18.94c-1.623.741-3-1.295-3-1.295.823-.399 1.795-.923 3-1.509v2.804zm-3-12.585s1.508-2.071 3.147-1.276c1.006.487 7.804 3.811 11.286 5.503l.875-.421c.754-.364 1.248-.49 1.02-1.43-.572-2.358 1.486-4.731 4.05-4.731 2.056 0 3.59 1.514 3.59 3.379 0 1.406-.875 2.805-2.319 3.531-1.442.726-2.454.161-3.887.858l-.448.217.49.24c1.431.701 2.444.138 3.885.868 1.439.729 2.31 2.125 2.31 3.529.001 1.86-1.526 3.378-3.587 3.378-2.548 0-4.633-2.356-4.049-4.74.23-.939-.264-1.067-1.016-1.433-.394-.19-11.169-5.447-15.347-7.472zm18.144 2.254c.434.909 1.665 1.226 2.745.705 1.08-.52 1.605-1.683 1.172-2.591-.434-.909-1.665-1.226-2.745-.706s-1.606 1.683-1.172 2.592zm1.201 9.371c1.078.522 2.31.209 2.746-.699.436-.908-.087-2.072-1.165-2.595-1.079-.522-2.311-.209-2.746.699-.437.909.086 2.073 1.165 2.595zm-6.345-1.98h-1v2h1v-2zm-2 2v-4h-1v4h1zm-1-10.913l1 .488v-1.575h-1v1.087zm4.825 7.821l-.825-.402v3.994c0 .276-.224.5-.5.5h-4.5v-6.931l-2-.975v7.906h-1.5c-.276 0-.5-.224-.5-.5v-8.379l-1-.487v8.866c0 .829.671 1.5 1.5 1.5h8c.829 0 1.5-.671 1.5-1.5v-3.509l-.175-.083zm-9.1-9.908h1.275v.623l.32.156 1.68.82v-1.599h4.5c.276 0 .5.224.5.5v3.537l.436.212.351-.169.212-.101h.001v-3.479c0-.829-.671-1.5-1.5-1.5h-8c-.391 0-.743.153-1.01.397l1.235.603z"/></svg>
            <Text sx={{variant: 'text.heading', textAlign: 'left' }}>No ongoing commitment or fees. Communicate with, hire, and pay workers directly.</Text>
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M3 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm0-16c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm-1.577-1.721l-6.423-5.028v-3.352c-.323.066-.658.101-1 .101s-.677-.035-1-.101v3.352l-6.424 5.028c.695.233 1.323.602 1.844 1.093l5.58-4.372 5.579 4.373c.522-.492 1.15-.861 1.844-1.094z"/></svg>
            <Text sx={{variant: 'text.heading', textAlign: 'left' }}>ScaleSource App has a large network of South American, Filipino, Spanish and Mexican virtual workers.</Text>
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            {/* savage icons from https://iconmonstr.com/  */}
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"/></svg>
            <Text sx={{variant: 'text.heading', textAlign: 'left' }}>Your staff works from home at the most affordable rates in the world.</Text>
          </Card>
        </Box>
      </Grid>
      <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'left'}}>
      <Grid gap={20}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 3, my: 0 }}>Why look to South America, Phillipines, Spain, and Mexico?</Box>
        <Box sx={{fontSize: 3, my: 0 }}>We remove the middlemen</Box>
      </Grid>
      <Grid gap={20}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 2, my: 0 }}>You’ll find countless options as you search for virtual help to support your business. But basic cultural traits, advanced education, and proficient English make them the ideal virtual employees. After years of experience, we’ve found they can’t be beat.</Box>
        <Box sx={{fontSize: 2, my: 0 }}>We don’t mark-up salaries. We provide you a simple place to find and contact quality workers. Then you hire them as you see fit.</Box>
      </Grid>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.videohead}</h1>
      </div>
      <div>
      <iframe src="https://drive.google.com/file/d/1IbPtkQ9n_ERABnq105IlJ5GUBjlnuMsn/preview" width="640" height='480'></iframe>
      </div>
      <div sx={{variant: 'containers.grid', display: 'row', alignItems: 'center', textAlign: 'center'}}>
        <Button sx={{variant: 'buttons.normal'}}>Post a job</Button>
        <Text sx={{fontSize: 2, my: 0}}>7,600 jobs posted in the past month</Text>
      </div>
    </div>
    <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.business}</h1>
    </div>
    <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={10}
            columns={[6, '1fr 1fr 1fr 1fr 1fr 1fr']}>
        <Box sx={{fontSize: 5, my: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/></svg></Box>
        <Box sx={{fontSize: 5, my: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.838 7.066-4.838 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.247.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.008-.007zm3.559 1.988c-2.748 1.472-5.735 2.181-8.453 2.181-4.027 0-7.927-1.393-11.081-3.706-.277-.202-.481.154-.251.416 2.925 3.326 6.786 5.326 11.076 5.326 3.061 0 6.614-1.214 9.066-3.494.406-.377.058-.945-.357-.723zm.67 2.216c-.091.227.104.32.31.147 1.339-1.12 1.685-3.466 1.411-3.804-.272-.336-2.612-.626-4.04.377-.22.154-.182.367.062.337.805-.096 2.595-.312 2.913.098.319.41-.355 2.094-.656 2.845z" fill-rule="evenodd" clip-rule="evenodd"/></svg></Box>
        <Box sx={{fontSize: 5, my: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></Box>
        <Box sx={{fontSize: 5, my: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></Box>
        <Box sx={{fontSize: 5, my: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></Box>
        <Box sx={{fontSize: 5, my: 0}}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M22.987 13.966c1.357-7.765-5.416-14.412-13.052-12.979-5.821-3.561-12.503 3.226-8.935 9.029-1.387 7.747 5.384 14.48 13.083 13.01 5.832 3.536 12.493-3.26 8.904-9.06zm-10.603 5.891c-3.181 0-6.378-1.448-6.362-3.941.005-.752.564-1.442 1.309-1.442 1.873 0 1.855 2.795 4.837 2.795 2.093 0 2.807-1.146 2.807-1.944 0-2.886-9.043-1.117-9.043-6.543 0-2.938 2.402-4.962 6.179-4.741 3.602.213 5.713 1.803 5.917 3.289.101.971-.542 1.727-1.659 1.727-1.628 0-1.795-2.181-4.6-2.181-1.266 0-2.334.528-2.334 1.674 0 2.395 8.99 1.005 8.99 6.276-.001 3.039-2.423 5.031-6.041 5.031z"/></svg></Box>
      </Grid>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.results}</h1>
      </div>
      <div sx={{variant: 'containers.grid', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={2}
            columns={[3, '1fr 1fr 1fr']}>
        {/* <Box sx={{fontSize: 2, my: 0}}> */}
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/CalvinSmith.jpg' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Calvin Smith</Text>
              <Text sx={{variant: 'containers.text.quote'}}>I was hesitant about outsourcing. This is not outsourcing in the traditional sense. The team members added through ScaleSource are actually part of the company and culture, no different from our employees in the office. It's been awesome</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/BrettAmerine.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Brett Amerine</Text>
              <Text sx={{variant: 'containers.text.quote'}}>It's been a pleasure working with ScaleSource. The employees take the initiative, the time to understand exactly what we need to execute, attention to detail, and being very responsive. </Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/CalvinSmith.jpg' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Calvin Smith</Text>
              <Text sx={{variant: 'containers.text.quote'}}>I was hesitant about outsourcing. This is not outsourcing in the traditional sense. The team members added through ScaleSource are actually part of the company and culture, no different from our employees in the office. It's been awesome!</Text>
            </Box>
          </Card>
        {/* </Box> */}
        </Grid>
        </div>
      <div sx={{variant: 'containers.grid', display: 'row', alignItems: 'center', textAlign: 'center'}}>
      <Button sx={{variant: 'buttons.normal'}}>See more real
      results</Button>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.browse}</h1>
      </div>
      <div sx={{variant: 'containers.grid', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={1}
            columns={[4, '1fr 1fr 1fr 1fr']}>
        <Card sx={{display: 'row', color: 'primary' }}>
          <Text>Virtual Assistant</Text>
          <Text>Customer Service Representative</Text>
          <Text>Appointment Setter</Text>
          <Text>Administrative Assistant</Text>
        </Card>
        <Card sx={{display: 'row', color: 'primary' }}>
          <Text>Marketing Assistant</Text>
          <Text>Sales Development Representative</Text>
          <Text>Waste Analyst</Text>
          <Text>Technical Support</Text>
        </Card>
        <Card sx={{display: 'row', color: 'primary' }}>
          <Text>Telecom Analyst</Text>
          <Text>Social Media Manager</Text>
          <Text>Trainer</Text>
          <Text>Content Manager</Text>
        </Card>
        <Card sx={{display: 'row', color: 'primary' }}>
          <Text>Developer</Text>
          <Text>Fullstack Developer</Text>
          <Text>Graphics Designer</Text>
          <Text>Executive Assistant</Text>
        </Card>
      </Grid>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.hire}</h1>
      </div>
      <div sx={{variant: 'containers.page', display: 'row', alignItems: 'center', textAlign: 'center'}}>
        <Text sx={{fontSize: 2, my: 0, marginBottom: 2 }}>For as little as $350 a month, you can find South/Central American, Mexican, Spanish, or Filipino virtual workers to take on even the
        most challenging tasks in your business. You won’t get this kind of value anywhere else.</Text>
        <Text sx={{fontSize: 1, my: 0 }}>Find some of the following skilled workers at incredible full-time rates:</Text>
      </div>
      <div sx={{variant: 'containers.grid', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={3}
            columns={[5, '1fr 1fr 1fr 1fr 1fr']}>
        {/* <Box sx={{fontSize: 2, my: 0}}> */}
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Programmers</Text>
              <Text sx={{variant: 'containers.text.rate'}}>Full-time rate: </Text>
              <Text sx={{variant: 'containers.text.price'}}>$550-$1,330</Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Designers</Text>
              <Text sx={{variant: 'containers.text.rate'}}>Full-time rate: </Text>
              <Text sx={{variant: 'containers.text.price'}}>$400-$1,100</Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>SEO Specialists</Text>
              <Text sx={{variant: 'containers.text.rate'}}>Full-time rate: </Text>
              <Text sx={{variant: 'containers.text.price'}}>$400-$1,100</Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Social Media Experts</Text>
              <Text sx={{variant: 'containers.text.rate'}}>Full-time rate: </Text>
              <Text sx={{variant: 'containers.text.price'}}>$300-$600</Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'row'}}>
            <Box sx={{display: 'column', textAlign: 'center'}}>
              <Text sx={{variant: 'containers.text.experience'}}>Virtual Assistants</Text>
              <Text sx={{variant: 'containers.text.rate'}}>Full-time rate: </Text>
              <Text sx={{variant: 'containers.text.price'}}>$350-$800</Text>
              <Text sx={{variant: 'containers.text.period'}}>per month</Text>
            </Box>
          </Card>
        </Grid>
        </div>
      <div sx={{variant: 'containers.page', display: 'row', alignItems: 'center', textAlign: 'center'}}>
        <Text sx={{fontSize: 1, my: 0 }}>We don’t mark-up salaries. We provide you a simple place to find and contact quality workers. </Text>
        <Text sx={{fontSize: 1, my: 0 }}>Then you hire and arrange salaries as you see fit.</Text>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.post}</h1>
      </div>
      <div sx={{variant: 'containers.grid', display: 'row', alignItems: 'center', textAlign: 'center'}}>
        <Button sx={{variant: 'buttons.normal'}}>Post a job</Button>
        <Text sx={{fontSize: 2, my: 0}}>7,600 jobs posted in the past month</Text>
      </div>
  </div>
)

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: `THE Job Board for Remote Workers in South & Central America, Mexico, Spain, and the Philippines`,
        subtitle: 'Why ScaleSource App?',
        videohead: 'See how it works',
        business: 'Businesses recruiting workers from Scalesource App',
        results: 'Real Results',
        browse: 'Quickly browse talented resumes in the database',
        hire: 'Hire great workers at an unbeatable price',
        post: `Haven't found what you're looking for? Let great talent find you.`
      }
    }
  }
}

