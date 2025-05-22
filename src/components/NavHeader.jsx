import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavHeader() {
    return (
        <Navbar expand="lg" className='bg-body-tertiary mb-3' data-bs-theme='dark' >
            <Container >
                <Navbar.Brand as={Link} to='/'>React-Boostrap</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='errd'>Error</Nav.Link>
                        <NavDropdown title='Examples' id='basic-nav-dropdown'>
                            <NavDropdown.Item as={Link} to='/accordions'>Accordions</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/alerts'>Alerts</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/breadcrumbs'>Breadcrumbs</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/buttons'>Buttons</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/cards'>Cards</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/color-modes'>Color Modes</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/forms'>Forms</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/images'>Images</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/progress-bars'>Progress Bars</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/spinners'>Spinners</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to='/vBucks' disabled>Free V-Bucks Here!</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className='d-flex'>
                        <Form.Control  
                            type='search'
                            placeholder='Search'
                            className='me-2'
                            aria-label='Search'
                        />
                        <Button variant='outline-success'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}