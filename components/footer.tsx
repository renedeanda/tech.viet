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
        style={{ width: '100vw', backgroundColor: '#333333', padding: '5em 0em' }}>
        <Container>
          <Grid
            divided
            inverted
            stackable
            color='black'>
            <Grid.Row>
              <Grid.Column
                width={6}>
                <p style={{ justifyContent: 'center' }}>
                  {`© ${new Date().getFullYear()} Project by `}
                  <a href='https://vina.dev/rene' target='_blank'>René DeAnda</a></p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </footer>
  )
}