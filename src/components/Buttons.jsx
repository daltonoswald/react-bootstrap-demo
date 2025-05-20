import { useState } from 'react';
import { Container, Row, Button, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import NavHeader from './NavHeader';

export default function Buttons() {

    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Option 1', value: '1' },
        { name: 'Option 2', value: '2' },
        { name: 'Option 3', value: '3' }
    ]

    return (
        <div className='app'>
            <NavHeader />
            <Container >
                <Col>
                    {[
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                    ].map((variant) => (
                        <Button key={variant} variant={variant} className='m-1' size="sm">This is a small {variant} Button.</Button>
                ))}
                </Col>
                <Row>
                    {[
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                    ].map((variant) => (
                        <Button key={variant} variant={`outline-`+variant} className='m-1' size="lg">This is a large {variant} outline Button.</Button>
                    ))}
                </Row>
                <ButtonGroup className='m-2'>
                    {radios.map((radio, index) => (
                        <ToggleButton
                            key={index}
                            id={`radio-${index}`}
                            type='radio'
                            variant='success'
                            name='radio'
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                    ))}
                </ButtonGroup>
            </Container>
        </div>
    )
}