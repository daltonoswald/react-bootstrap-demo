import { Alert, Container } from 'react-bootstrap';
import NavHeader from './NavHeader';
import { Link } from 'react-router-dom';

export default function Error() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Alert dismissible variant='danger'>
                    <Alert.Heading>Oh no!</Alert.Heading>
                    <p>It seems like you have ran into an error.</p>
                    <p>You can dismiss this alert if you would like, but you should probably go back to the <Link to='/'>Homepage</Link>.</p>
                </Alert>
            </Container>
        </div>
    )
}