/** @jsx jsx */
import { jsx, Box, Grid, Input, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'

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
        <Box sx={{fontSize: 5, my: 0}}>40,000 jobseekers</Box>
        <Box sx={{fontSize: 5, my: 0}}>6,500 employers</Box>
      </Grid>
      <Grid gap={1}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 3, my: 0}}>signed up last month.</Box>
        <Box sx={{fontSize: 3, my: 0}}>signed up last month.</Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Input
          defaultValue='Search resumes'
        />
        <Input
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
            <Image sx={{variant: 'containers.images.avatar'}} src='/male.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
              <Text>Experience</Text>
              <Text>Expected Salary</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/female.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
              <Text>Experience</Text>
              <Text>Expected Salary</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/male.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
              <Text>Experience</Text>
              <Text>Expected Salary</Text>
            </Box>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'flex'}}>
            <Image sx={{variant: 'containers.images.avatar'}} src='/female.png' />
            <Box sx={{display: 'column', textAlign: 'left'}}>
              <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
              <Text>Experience</Text>
              <Text>Expected Salary</Text>
            </Box>
          </Card>
        </Box>
        <Box sx={{fontSize: 2, my: 0}}>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
            <Text sx={{variant: 'containers.text.date'}}>Date Posted</Text>
            <Text>Salary Range</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
            <Text sx={{variant: 'containers.text.date'}}>Date Posted</Text>
            <Text>Salary Range</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
            <Text sx={{variant: 'containers.text.date'}}>Date Posted</Text>
            <Text>Salary Range</Text>
          </Card>
          <Card sx={{variant: 'containers.card', display: 'column', textAlign: 'left'}}>
            <Text sx={{variant: 'containers.text.heading'}}>Job Category</Text>
            <Text sx={{variant: 'containers.text.date'}}>Date Posted</Text>
            <Text>Salary Range</Text>
          </Card>
        </Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Box sx={{fontSize: 2, my: 0}}>View more resumes</Box>
        <Box sx={{fontSize: 2, my: 0}}>View more job posts</Box>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Button sx={{variant: 'containers.buttons.primary'}}>I want to hire</Button>
        <Button sx={{variant: 'containers.buttons.primary'}}>I want a job</Button>
      </Grid>
      <Divider />
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h1 sx={{fontSize: 6, my: 0, }}>{content.subtitle}</h1>
      </div>
      <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            <Box sx={{display: 'column', textAlign: 'left'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4.57 18.55l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm8.5 0l2.43.335-1.769 1.7.432 2.415-2.163-1.157-2.163 1.157.432-2.415-1.769-1.7 2.43-.335 1.07-2.207 1.07 2.207zm-18.473.918l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm8.5 0l-.917.126.667.641-.163.91.816-.436.816.436-.163-.91.667-.641-.917-.126-.403-.832-.403.832zm3.903-4.468h-24v-2.059c0-.99.079-1.562 1.249-1.833 1.352-.311 2.61-.585 1.999-1.734-1.852-3.502-.49-5.374 1.468-5.374 1.994 0 3.324 1.943 1.466 5.374-.318.585-.14.944.284 1.195.237-.226.591-.398 1.122-.521 1.683-.389 3.344-.736 2.545-2.209-2.366-4.364-.674-6.839 1.866-6.839 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209.532.123.887.295 1.123.522.425-.252.604-.61.285-1.196-1.858-3.431-.528-5.374 1.466-5.374 1.958 0 3.32 1.872 1.468 5.374-.61 1.149.647 1.423 1.999 1.734 1.17.271 1.249.843 1.249 1.833v2.059zm-6-1h5v-1.059c0-.783.021-.744-.475-.858-2.277-.536-2.551-.979-2.785-1.49-.162-.355-.27-.936.129-1.688.765-1.447.968-2.67.555-3.354-.393-.652-1.789-.83-2.289.012-.408.685-.197 1.931.562 3.334.407.749.301 1.332.141 1.688-.129.286-.282.581-.886.884.04.266.048.57.048.912v1.619zm-11.953-2.531c-.602-.304-.756-.598-.885-.884-.16-.356-.266-.939.141-1.688.76-1.403.971-2.649.562-3.334-.5-.842-1.896-.664-2.289-.012-.413.684-.21 1.907.555 3.354.399.752.291 1.333.129 1.688-.233.511-.508.954-2.785 1.49-.495.114-.475.075-.475.858v1.059h5v-1.623c0-.341.007-.643.047-.908zm10.953 2.531v-1.619c0-1.127-.03-1.178-.814-1.359-2.751-.634-3.093-1.162-3.359-1.744-.181-.395-.301-1.048.154-1.907 1.022-1.929 1.278-3.582.703-4.538-.437-.725-1.244-.833-1.685-.833-.446 0-1.259.11-1.699.85-.577.969-.318 2.613.712 4.512.465.857.348 1.51.169 1.909-.289.641-.679 1.114-3.368 1.751-.783.181-.813.232-.813 1.355v1.623h10z"/></svg>
            </Box>
            <Text sx={{variant: 'containers.text.heading', textAlign: 'left' }}>Scalesource App is just the marketplace. You recruit and hire on your terms.</Text>
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            <Box sx={{display: 'column', textAlign: 'left'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3 18.94c-1.623.741-3-1.295-3-1.295.823-.399 1.795-.923 3-1.509v2.804zm-3-12.585s1.508-2.071 3.147-1.276c1.006.487 7.804 3.811 11.286 5.503l.875-.421c.754-.364 1.248-.49 1.02-1.43-.572-2.358 1.486-4.731 4.05-4.731 2.056 0 3.59 1.514 3.59 3.379 0 1.406-.875 2.805-2.319 3.531-1.442.726-2.454.161-3.887.858l-.448.217.49.24c1.431.701 2.444.138 3.885.868 1.439.729 2.31 2.125 2.31 3.529.001 1.86-1.526 3.378-3.587 3.378-2.548 0-4.633-2.356-4.049-4.74.23-.939-.264-1.067-1.016-1.433-.394-.19-11.169-5.447-15.347-7.472zm18.144 2.254c.434.909 1.665 1.226 2.745.705 1.08-.52 1.605-1.683 1.172-2.591-.434-.909-1.665-1.226-2.745-.706s-1.606 1.683-1.172 2.592zm1.201 9.371c1.078.522 2.31.209 2.746-.699.436-.908-.087-2.072-1.165-2.595-1.079-.522-2.311-.209-2.746.699-.437.909.086 2.073 1.165 2.595zm-6.345-1.98h-1v2h1v-2zm-2 2v-4h-1v4h1zm-1-10.913l1 .488v-1.575h-1v1.087zm4.825 7.821l-.825-.402v3.994c0 .276-.224.5-.5.5h-4.5v-6.931l-2-.975v7.906h-1.5c-.276 0-.5-.224-.5-.5v-8.379l-1-.487v8.866c0 .829.671 1.5 1.5 1.5h8c.829 0 1.5-.671 1.5-1.5v-3.509l-.175-.083zm-9.1-9.908h1.275v.623l.32.156 1.68.82v-1.599h4.5c.276 0 .5.224.5.5v3.537l.436.212.351-.169.212-.101h.001v-3.479c0-.829-.671-1.5-1.5-1.5h-8c-.391 0-.743.153-1.01.397l1.235.603z"/></svg>
            </Box>
            <Text sx={{variant: 'containers.text.heading', textAlign: 'left' }}>No ongoing commitment or fees. Communicate with, hire, and pay workers directly. Your staff don't work for us.</Text>
          </Card>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            <Box sx={{display: 'column', textAlign: 'left'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 2v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm1 11.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z"/></svg>
            </Box>
            <Text sx={{variant: 'containers.text.heading', textAlign: 'left' }}>Your staff works on your terms—part time, full time, hourly or salaried.</Text>
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            <Box sx={{display: 'column', textAlign: 'left'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 2c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm0-16c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm9 20c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-2c-1.656 0-3 1.343-3 3s1.344 3 3 3 3-1.343 3-3-1.344-3-3-3zm-1.577-1.721l-6.423-5.028v-3.352c-.323.066-.658.101-1 .101s-.677-.035-1-.101v3.352l-6.424 5.028c.695.233 1.323.602 1.844 1.093l5.58-4.372 5.579 4.373c.522-.492 1.15-.861 1.844-1.094z"/></svg>
            </Box>
            <Text sx={{variant: 'containers.text.heading', textAlign: 'left' }}>ScaleSource App has a large network of Central/South American, Asian, and European virtual workers.</Text>
          </Card>
      </Grid>
      <Grid gap={10}
            columns={[2, '1fr 1fr']}>
        <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            <Box sx={{display: 'column', textAlign: 'left'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 3.002c4.411 0 8 2.849 8 6.35 0 3.035-3.029 6.311-7.925 6.311-1.58 0-2.718-.317-3.718-.561-.966.593-1.256.813-3.006 1.373.415-1.518.362-2.182.331-3.184-.837-1.001-1.682-2.069-1.682-3.939 0-3.501 3.589-6.35 8-6.35zm0-2.002c-5.281 0-10 3.526-10 8.352 0 1.711.615 3.391 1.705 4.695.047 1.527-.851 3.718-1.661 5.312 2.168-.391 5.252-1.258 6.649-2.115 1.181.289 2.312.421 3.382.421 5.903 0 9.925-4.038 9.925-8.313 0-4.852-4.751-8.352-10-8.352zm11.535 11.174c-.161.488-.361.961-.601 1.416 1.677 1.262 2.257 3.226.464 5.365-.021.745-.049 1.049.138 1.865-.892-.307-.979-.392-1.665-.813-2.127.519-4.265.696-6.089-.855-.562.159-1.145.278-1.74.364 1.513 1.877 4.298 2.897 7.577 2.1.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479 1.755-2.098 1.543-5.436-1.348-7.348zm-15.035-3.763c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071zm3.5 0c-.591 0-1.071.479-1.071 1.071s.48 1.071 1.071 1.071 1.071-.479 1.071-1.071-.48-1.071-1.071-1.071z"/></svg>
            </Box>
            <Text sx={{variant: 'containers.text.heading', textAlign: 'left' }}>Proactively contact workers or post a job and let them come to you.</Text>
            {/* </Box> */}
          </Card>
          <Card sx={{variant: 'containers.card.compact', display: 'flex'}}>
            <Box sx={{display: 'column', textAlign: 'left'}}>
              {/* savage icons from https://iconmonstr.com/  */}
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"/></svg>
            </Box>
            <Text sx={{variant: 'containers.text.heading', textAlign: 'left' }}>Your staff works from home at the most affordable rates in the world.</Text>
          </Card>
      </Grid>
    </div>
  </div>
)


export async function getStaticProps() {
  return {
    props: {
      content: {
        title: `THE Job Board for Virtual Workers in Central/South America, Asia and Europe.`,
        subtitle: 'Why ScaleSource App?',
      }
    }
  }
}
