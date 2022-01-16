import Page from '../../components/page';
import Meta from '../../components/Meta';
import { Container, Grid, Button } from 'semantic-ui-react';

export default function Investors() {
  return (
    <>
      <Meta title='Vietnam Investors' />
      <Page>
        <Container style={{ width: '100vw', margin: '3em 0' }}>
          <Grid
            container
            stackable
            textAlign='center'
            verticalAlign='middle'>
            <Grid.Row style={{ marginTop: '100px' }}>
              <Grid.Column style={{ minHeight: '50vh' }}>
                <h1>🚧 Coming soon</h1>
                <Button
                  as='a'
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  color='teal'
                  content='Check out companies'
                  href='https://tech.viet.io'
                  rel="noopener" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Page>
    </>
  )
}