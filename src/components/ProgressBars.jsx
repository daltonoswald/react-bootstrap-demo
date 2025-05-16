import { useState } from 'react'
import NavHeader from './NavHeader'
import { Container, Form, ProgressBar } from 'react-bootstrap'

export default function Progressbars() {
    const [size, setSize] = useState(50)

    return (
        <div className='app'>
        <NavHeader />
        <Container>
            <Form.Label>Adjust the Form.Range and see how it changes the progress bar!</Form.Label>
            <Form.Range onChange={e => setSize(e.target.value)} />
            <ProgressBar now={size} />
        </Container>
    </div>
    )
}