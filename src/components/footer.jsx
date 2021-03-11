/** @jsx jsx */
import { jsx, Image, Button, Text } from 'theme-ui'
import Link from 'next/link'
// import Image from 'next/image'
// import logo from '../../public/scalesource.png'

const Footer = () => (
  <footer sx={{height: '60px', width: '100vw', bg: 'muted', borderTop: '1px solid', borderColor: 'muted', bottom: 0, position: 'absolute'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <Image sx={{variant: 'containers.images.logo'}} src='/scalesource.png' alt='ScaleSource App' />
      </Link>
      <Text>Copyright 2021 ScaleSource App. All rights reserved.</Text>
      {/* <Link href="/workers">
        <a sx={{color: 'text', fontSize: 1, cursor: 'pointer'}}>Jobseeker</a>
      </Link> */}

      {/* <Link href="/how">
        <a sx={{color: 'text', fontSize: 1, cursor: 'pointer'}}>How it works</a>
      </Link> */}

      {/* <Link href="/pricing">
        <a sx={{color: 'text', fontSize: 1, cursor: 'pointer'}}>Pricing</a>
      </Link> */}

      {/* <Link href="/results">
        <a sx={{color: 'text', fontSize: 1, cursor: 'pointer'}}>Real Results</a>
      </Link> */}

      {/* <Link href="/employers">
        <Button variant='normal'>Post a Job</Button>
      </Link> */}

      {/* <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link> */}

      {/* <Link href="/signup">
        <a sx={{color: 'text', fontSize: 1, cursor: 'pointer'}}>Sign Up</a>
      </Link> */}

      {/* <Link href="/login">
        <a sx={{color: 'text', fontSize: 1, cursor: 'pointer'}}>Login</a>
      </Link> */}
    </nav>
  </footer>
)

export default Footer
