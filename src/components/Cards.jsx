import { Container, Button, Card } from 'react-bootstrap'
import NavHeader from './NavHeader'

export default function Cards() {

    return (
        <div className='app'>
            <NavHeader />
            <Container >
                <Card className='mb-3' style={{ color: "#000" }} >
                    <Card.Img src="http://picsum.photos/200/50" />
                    <Card.Body>
                    <Card.Title>Card Example</Card.Title>
                    <Card.Text>This is an example of React Bootstrap Cards.</Card.Text>
                    <Button variant='primary'>Read More</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}