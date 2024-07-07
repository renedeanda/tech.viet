import { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';

export default function Page({ children, inverted, footerHidden }: { children: React.ReactNode, inverted?: boolean, footerHidden?: boolean }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <main style={{ backgroundColor: inverted ? 'transparent' : '#F5F5F7' }}>
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
            href='https://github.com/renedeanda/Tech.Viet'
            target='_blank'
            rel="noopener">
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='github' />GitHub</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='/companies'
            rel="noopener">
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='building outline' />Companies</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='/investors'
            rel="noopener">
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='chart line' />Investors</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='https://www.renedeanda.com'
            target='_blank'>
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'><Icon name='linkify' />Project by René</div>
          </Menu.Item>
          <Menu.Item
            as='a'
            href='https://www.buymeacoffee.com/rede'
            target='_blank'
            rel="noreferrer">
            <div
              style={{ padding: '0.5em' }}
              className='navbar-text2'>☕ Buy me a coffee</div>
          </Menu.Item>
        </Sidebar>
      </main>
      <Footer inverted={inverted} hidden={footerHidden} />
    </>
  )
}