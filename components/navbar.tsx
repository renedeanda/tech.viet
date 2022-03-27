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
              <a className='navbar-text'>Viet.io</a>
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
              href='https://forms.gle/Y75CegGFRp6tzdn67'
              target='_blank'
              rel="noopener">
              <div
                className='navbar-text2'><Icon name='plus' />Add Company</div>
            </Menu.Item>
            <Menu.Item
              as='a'
              className='button-item'
              href='https://github.com/renedeanda/Tech.Viet'
              target='_blank'
              rel="noopener">
              <div
                className='navbar-text2'>GitHub</div>
            </Menu.Item>
            <Menu.Item
              as='a'
              className='button-item'
              href='/companies'
              rel="noopener">
              <div
                className='navbar-text2'>Companies</div>
            </Menu.Item>
            <Menu.Item
              as='a'
              className='button-item'
              href='/investors'
              rel="noopener">
              <div
                className='navbar-text2'>Investors</div>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}