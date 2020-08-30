import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';

const Page = (props) => {
    const router = useRouter();
    const [visible, setVisible] = useState(false)

    return (
        <>
            <main>
                <Navbar
                    openDrawer={() => visible ? setVisible(false) : setVisible(true)} />
                {props.children}
                <Sidebar
                    className='sidebar-menu'
                    style={{ height: '100vh' }}
                    as={Menu}
                    animation='overlay'
                    direction='right'
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}>
                    <Menu.Item style={{ display: 'flex', justifyContent: 'right' }} onClick={() => { setVisible(false) }}>
                        <div className='navbar-text2'>
                            <Icon name='close' /></div>
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => { router.push('/submit') }}>
                        <div
                            style={{ padding: '0.5em' }}
                            className='navbar-text2'>Submit</div>
                    </Menu.Item>
                    <Menu.Item
                        as='a'
                        href='https://github.com/renedeanda/Tech.Viet'
                        target='_blank'>
                        <div
                            style={{ padding: '0.5em' }}
                            className='navbar-text2'>GitHub</div>
                    </Menu.Item>
                </Sidebar>
            </main>
            <Footer />
        </>
    )
}

export default Page;