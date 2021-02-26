/** @jsx jsx */
import { jsx, Grid, Box, Image } from 'theme-ui'
import Link from 'next/link'
// import Image from 'next/image'
// import female from '../../public/female.png'

export default ({employers}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Employers</h1>
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {employers.map(employer => (
          <div sx={{width: '50%', p: 2}} key={employer.id}>
            <Grid gap={1}
            columns={[2, '1fr 3fr']}>
              <Link href="/employer/[id]" as={`/employer/${employer.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
              <Box>
                <div sx={{variant: 'containers.card',}}>
                  {/* <Image
                    src="/public/female.png"
                    alt="Employer"
                    width={50}
                    height={50}
                  /> */}
                {/* <img src={require('../../public/female.png')} alt=""/> */}
                  {/* <img src={female} height='20' width='20' /> */}
                  <strong>{employer.name}</strong>
                  <br />
                  <strong>{employer.job}</strong>
                  <br />
                  <strong>{employer.email}</strong>
                </div>
                </Box>
              <Box>
                <div sx={{variant: 'containers.card',}}>
                  {/* <Image
                    src="/public/female.png"
                    alt="Employer"
                    width={50}
                    height={50}
                  /> */}
                {/* <img src={require('../../public/female.png')} alt=""/> */}
                  {/* <img src={female} height='20' width='20' /> */}
                  <strong>{employer.name}</strong>
                  <br />
                  <strong>{employer.job}</strong>
                  <br />
                  <strong>{employer.email}</strong>
                </div>
                </Box>
              </a>
            </Link>


            </Grid>
          </div>
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/employer`)
  const {data} = await res.json()

  return {
    props: {employers: data}
  }
}
