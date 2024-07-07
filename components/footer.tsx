import {
  Container,
  Segment
} from 'semantic-ui-react';


export default function Footer(
  { inverted, hidden }: {
    inverted?: boolean,
    hidden?: boolean
  }
) {

  return (
    !hidden ?
      <footer>
        <Segment
          inverted
          vertical
          style={{ width: '100vw', backgroundColor: inverted ? 'transparent' : '#F5F5F7', padding: '5em 0em' }}>
          <Container textAlign='center'>
            <a
              style={{ color: inverted ? '#BEBEFF' : null, fontSize: '1.2em' }}
              className='card-link'
              href='https://www.renedeanda.com' target='_blank'>
              {`© ${new Date().getFullYear()} Open-source Project by `}<b>René DeAnda</b></a>
          </Container>
        </Segment>
      </footer> : null
  )
}