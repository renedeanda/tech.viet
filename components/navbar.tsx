import Link from 'next/link';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default function Navbar({ openDrawer }: { openDrawer: () => void; }) {

  return (
    <div
      className='Navbar'>
      <Menu secondary style={{ width: '100vw' }}>
        <Container>
          <Menu.Item className='main-item'>
            <Link href='/'>
              <a className='navbar-text'>Tech.Viet</a>
            </Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              className='hamburger-item'
              onClick={() => { openDrawer() }}>
              <Icon
                size='large'
                name='bars'
                className='hamburger' />
            </Menu.Item>
            <Menu.Item
              as='a'
              className='button-item'
              href='https://rede.io/why-vietnam-tech-viet/'
              target='_blank'>
              <div
                className='navbar-text2'>Why Vietnam?</div>
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