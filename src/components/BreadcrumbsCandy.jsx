import { Container, Breadcrumb, ListGroup } from 'react-bootstrap'
import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'

export default function BreadcrumbsCandy() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/candy'}} active >Candy</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/cookies'}} >Cookies</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/icecream'}} >Ice Cream</Breadcrumb.Item>
                </Breadcrumb>
                <ListGroup>
                    <ListGroup.Item>M&M's</ListGroup.Item>
                    <ListGroup.Item>Nerds</ListGroup.Item>
                    <ListGroup.Item>Sour Patch Kids</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    )
}