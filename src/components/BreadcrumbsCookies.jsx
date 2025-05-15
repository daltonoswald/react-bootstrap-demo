import { Container, Breadcrumb, ListGroup } from 'react-bootstrap'
import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'

export default function BreadcrumbsCookies() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/candy'}} >Candy</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/cookies'}} active>Cookies</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/icecream'}} >Ice Cream</Breadcrumb.Item>
                </Breadcrumb>
                <ListGroup>
                    <ListGroup.Item>Chocolate Chip</ListGroup.Item>
                    <ListGroup.Item>Oatmeal Raisin</ListGroup.Item>
                    <ListGroup.Item>Snickerdoodles</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    )
}