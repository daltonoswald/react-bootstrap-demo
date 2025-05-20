import { Container, Dropdown, DropdownButton, Stack, } from 'react-bootstrap';
import NavHeader from './NavHeader';

export default function ColorModes() {

    return (

        <div className='app'>
            <NavHeader />
            <Container>
                <Stack direction='horizontal' gap={3}>
                <DropdownButton
                    variant='light'
                    title='Light dropdown'
                    className='mt-2'
                    data-bs-theme='light'
                >
                    <Dropdown.Item>Option 1</Dropdown.Item>
                    <Dropdown.Item>Option 2</Dropdown.Item>
                    <Dropdown.Item>Option 3</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                    variant='secondary'
                    title='Dark dropdown'
                    className='mt-2'
                    data-bs-theme='dark'
                >
                    <Dropdown.Item>Option 1</Dropdown.Item>
                    <Dropdown.Item>Option 2</Dropdown.Item>
                    <Dropdown.Item>Option 3</Dropdown.Item>
                </DropdownButton>
                </Stack>
            </Container>
        </div>
    )
}