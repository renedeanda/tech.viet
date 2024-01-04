import { Button, Dropdown } from 'semantic-ui-react';

export default function ShareMenu({ url }: { url: string }) {

  return (
    <Dropdown
      as={Button}
      title='Share Button'
      basic
      icon='share alternate'
      className='icon'
      button
      direction='left'
      circular
      floating>
      <Dropdown.Menu
        style={{ fontFamily: "Nunito" }}>
        <Dropdown.Item
          as='a'
          href={`mailto:?subject=Viet.io&body=Check out this Viet.io page: ${url}`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'mail' }}
          text='Share by Email' />
        <Dropdown.Item
          as='a'
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'facebook' }}
          text='Share on Facebook' />
        <Dropdown.Item
          as='a'
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Viet.io Page`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'linkedin' }}
          text='Share on LinkedIn' />
      </Dropdown.Menu>
    </Dropdown>
  )
}