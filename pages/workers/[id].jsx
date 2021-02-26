/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Worker = () => {
  const router = useRouter()
  const { id }= router.query

  return (
    <div sx={{variant: 'containers.page'}}>
      <h1>Worker: {id} </h1>
    </div>
  )
}

export default Worker

export async function getServerSideProps({params, req, res}) {
  const response = await fetch(`http://localhost:3000/api/worker/${params.id}`)

  if (!response.ok) {
    res.writeHead(302, { Location: '/workers' })
    res.end()
    return {props: {}}
  }

  const {data} = await response.json()


  if (data) {
    return {
      props: {worker: data}
    }
  }
}
