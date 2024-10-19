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
        <div style={{
          marginTop: '56px',
          padding: '0.5em 1em',
          backgroundColor: '#f7fafc',
          color: '#1a202c',
          fontSize: '14px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <a 
            href="https://rede.io/?utm_source=Viet.io" 
            style={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'inherit',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out 📚 Rede.io for your daily tech newsletter!
          </a>
        </div>
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
        </Sidebar>
      </main>
      <Footer inverted={inverted} hidden={footerHidden} />
    </>
  )
}