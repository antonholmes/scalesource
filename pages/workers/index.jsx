/** @jsx jsx */
import { jsx, Box, Grid, Input, Card, Image, Text, Button, Divider } from 'theme-ui'
import Link from 'next/link'

export default ({workers, content}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      {/* <h1>Workers</h1> */}
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
        <h1 sx={{fontSize: 6, my: 0}}>{content.title}</h1>
      </div>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', textAlign: 'center', height: '30%'}}>
      <h3 sx={{fontSize: 3, my: 0}}>{content.subtitle}</h3>
      </div>
      <div sx={{variant: 'containers.grid', display: 'grid', alignItems: 'center', textAlign: 'center'}}>
        <Input
          defaultValue='What kind of job are you looking for?'
          size='100'
        />
      </div>
      <div sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
        {workers.map(worker => (
          <div sx={{width: '50%', p: 2}} key={worker.id}>
            <Link href="/workers/[id]" as={`/workers/${worker.id}`}>
              <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                <div sx={{variant: 'containers.card',}}>
                  <strong>{worker.name}</strong>
                  <br />
                  <strong>{worker.job}</strong>
                  <br />
                  <strong>{worker.email}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/worker`)
  const {data} = await res.json()

  return {
    props: {
      workers: data,
      content: {
        title: 'Find a REAL, ONLINE job.',
        subtitle: 'Thousands of jobs posted across all sectors who want to hire virtual workers.'
      }
    }
  }
}

