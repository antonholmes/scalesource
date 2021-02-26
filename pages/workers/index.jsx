/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({workers}) => {
  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Workers</h1>

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
    props: {workers: data}
  }
}
