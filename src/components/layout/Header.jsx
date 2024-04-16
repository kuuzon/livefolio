import styles from './Header.module.scss';
import Link from 'next/link';
import { Container, Nav, Navbar } from "react-bootstrap";
import { IoLeafOutline } from 'react-icons/io5';

// Toggle Switches
import ThemeToggler from "../common/ThemeToggler";
import useTheme from '../../hooks/useTheme';

const Header = () => {
  const { theme } = useTheme(); 

  return (
    <Navbar className={styles[theme]} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} href="/">
          <IoLeafOutline className={styles.icon} style={{color: 'aqua'}} />
          {' '}
          LiveFolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* LEFT MAIN NAVS */}
          <Nav className="me-auto">
            <Nav.Link className={styles.navLink} as={Link} href="/about">ABOUT</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} href="/projects">PROJECTS</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} href="/repos">REPOS</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} href="/users">GITUSERS</Nav.Link>
          </Nav>
          {/* RIGHT MAIN NAVS */}
          <div className="mt-1">
            <ThemeToggler />
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}   

export default Header