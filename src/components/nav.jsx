/** @jsx jsx */
import { jsx, Image, Button } from 'theme-ui'
import Link from 'next/link'
// import Image from 'next/image'
// import logo from '../../public/scalesource.png'

const Nav = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <Image sx={{variant: 'containers.images.logo'}} src='/scalesource.png' alt='ScaleSource App' />
{/* <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>ScaleSource App</a> */}
      </Link>

      <Link href="/workers">
        <a sx={{color: 'text', fontSize: 2, cursor: 'pointer'}}>Jobseeker</a>
      </Link>

      <Link href="/">
        <a sx={{color: 'text', fontSize: 2, cursor: 'pointer'}}>How it works</a>
      </Link>

      <Link href="/">
        <a sx={{color: 'text', fontSize: 2, cursor: 'pointer'}}>Pricing</a>
      </Link>

      <Link href="/">
        <a sx={{color: 'text', fontSize: 2, cursor: 'pointer'}}>Real Results</a>
      </Link>

      <Link href="/employers">
        <Button variant='normal'>Post a Job</Button>
        {/* <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>Employers</a> */}
      </Link>

      {/* <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link> */}


      <a sx={{color: 'text', fontSize: 2, cursor: 'pointer'}} href={process.env.HELP_APP_URL}>Sign Up</a>
      <a sx={{color: 'text', fontSize: 2, cursor: 'pointer'}} href={process.env.HELP_APP_URL}>Login</a>
    </nav>
  </header>
)

export default Nav
