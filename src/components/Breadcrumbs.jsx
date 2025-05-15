import { Container, Breadcrumb } from 'react-bootstrap'
import NavHeader from './NavHeader'
import { Link } from 'react-router-dom'

export default function Breadcrumbs() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/candy'}} >Candy</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/cookies'}} active>Cookies</Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/breadcrumbs/icecream'}} >Ice Cream</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </div>
    )
}