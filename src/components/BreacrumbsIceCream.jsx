import { Container, Breadcrumb, ListGroup } from 'react-bootstrap'
import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'

export default function BreadcrumbsIceCream() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/candy'}} >Candy</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/cookies'}} >Cookies</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/icecream'}} active>Ice Cream</Breadcrumb.Item>
                </Breadcrumb>
                <ListGroup>
                    <ListGroup.Item variant='dark'>Chocolate</ListGroup.Item>
                    <ListGroup.Item variant='danger'>Strawberry</ListGroup.Item>
                    <ListGroup.Item variant='light'>Vanilla</ListGroup.Item>
                </ListGroup>
            </Container>
        </div>
    )
}