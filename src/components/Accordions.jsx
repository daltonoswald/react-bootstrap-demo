import { Accordion, AccordionBody, Container } from 'react-bootstrap'
import NavHeader from './NavHeader'

export default function Accordians() {

    return (
        <div className='app'>
            <NavHeader />
            <Container>
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                            This is the first Accordion Item. It is shown by default because of the defaultActiveKey='0' tag on the Accordion element.
                            If you wanted it to start out fully collapsed you would just remove that defaultActiveKey='0'.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            This is the second Accordion Item. It isn't shown by default because this has an eventKey='1'.
                            You can also set an alwaysOpen prop which allows an item to always be opened even if another Accordion Item is currently opened.
                            This is not used in this example.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}