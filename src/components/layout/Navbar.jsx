import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Container from '../Container';
import Link from 'next/link';

const NavBarLink = ({ children, to }) => {
  const router = useRouter();
  const getActiveLink = (link) => {
    return router.pathname == link ? 'text-decoration-underline link-offset-3 active' : ''
  }
  return (
    <li class="nav-item">
      <Link className={`nav-link ${getActiveLink(to)}`} aria-current="page" href={to}>{children}</Link>
    </li>
  )
}
function Navbar() {
  const router = useRouter();
  const [toggleNav, setToggleNav] = useState(false)
  
  if (router.pathname == '/landing')
    return <></>
  return (
    <nav class="navbar navbar-expand-lg bg-whtie shadow-sm">
      <Container>
        <a class="navbar-brand fw-semibold" href="/landing">Rakaya</a>
        <button class="btn fs-1 border-0 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setToggleNav(prev => !prev) }}>
          <i className={`${toggleNav ? "bi bi-x" : "bi bi-list"}`}></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <NavBarLink to={'/'}>Home</NavBarLink> 
            <NavBarLink to={'/about'}>About us</NavBarLink> 
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar