import {
  Container,
  Grid,
  List,
  Segment
} from 'semantic-ui-react';

export default function Footer() {

  return (
    <footer>
      <Segment

        inverted
        vertical
        style={{ width: '100vw', backgroundColor: '#F5F5F7', padding: '5em 0em' }}>
        <Container textAlign='center'>
          <a
            style={{ fontSize: '1.2em' }}
            className='card-link'
            href='https://www.linkedin.com/in/renedeanda' target='_blank' rel="noopener">
            {`© ${new Date().getFullYear()} Open-source Project by `}<b>René DeAnda</b></a>
        </Container>
      </Segment>
    </footer>
  )
}