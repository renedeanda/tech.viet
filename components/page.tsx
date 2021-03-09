import { useState } from 'react';
import Link from 'next/link';
import Navbar from './navbar';
import Footer from './footer';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';

export default function Page({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <main>
        <Navbar
          openDrawer={() => visible ? setVisible(false) : setVisible(true)} />
        {children}
        <Sidebar
          className='sidebar-menu'
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
            as='a'
            href='https://rede.io/why-vietnam-tech-viet/'
            target='_blank'>
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='asterisk' />Why Vietnam?</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='https://github.com/renedeanda/Tech.Viet'
            target='_blank'>
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='github' />GitHub</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='https://www.linkedin.com/shareArticle?mini=true&url=https://tech.viet.io&title=Tech.Viet - A View into Vietnam Tech'
            target='_blank'>
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='linkedin' />Share on LinkedIn</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='https://www.facebook.com/sharer/sharer.php?u=https://tech.viet.io'
            target='_blank'>
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='facebook' />Share on Facebook</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='https://twitter.com/intent/tweet/?text=Check out the Tech.Viet open-source project&url=https://tech.viet.io&via=redeio'
            target='_blank'>
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='twitter' />Share on Twitter</div>
          </Menu.Item>
        </Sidebar>
      </main>
      <Footer />
    </>
  )
}