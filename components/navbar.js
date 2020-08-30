import React from 'react';
import { useRouter } from 'next/router';
import { Container, Menu, Icon } from 'semantic-ui-react';

const Navbar = (props) => {
    const router = useRouter();

    return (
        <div
            className='Navbar'>
            <Menu secondary style={{ width: '100vw' }}>
                <Container>
                    <Menu.Item className='main-item' onClick={() => { router.push('/') }}>
                        <div className='navbar-text'>Tech.Viet</div>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            className='hamburger-item'
                            onClick={() => { props.openDrawer() }}>
                            <Icon
                                size='large'
                                name='bars'
                                className='hamburger' />
                        </Menu.Item>
                        <Menu.Item
                            className='button-item'
                            onClick={() => { router.push('/submit') }}>
                            <div
                                className='navbar-text2'>Submit</div>
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            className='button-item'
                            href='https://github.com/renedeanda/Tech.Viet'
                            target='_blank'>
                            <div
                                className='navbar-text2'>GitHub</div>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default Navbar;