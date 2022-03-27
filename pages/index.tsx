import {
  Button,
  Grid,
  Header,
  Container
} from 'semantic-ui-react';
import Page from '../components/page';
import Meta from '../components/Meta';
import Footer from '../components/footer';

export default function Home() {

  return (
    <div>
      <Meta
        title='Viet.io - Vietnam Startup Ecosystem'
        desc='List of 200+ Vietnam startups and big tech companies. Viet.io is an open-source website built with React and Next.js listing 200+ technology companies in Vietnam.'
        canonical='https://tech.viet.io/' />

      <Page inverted footerHidden>
        <div className='hero-image' />
        <Container style={{ width: '100vw', margin: '3em 0' }}>
          <Grid
            container
            stackable
            textAlign='center'
            verticalAlign='middle'>
            <Grid.Row style={{ marginTop: '80px', padding: '0.5em' }}>
              <Grid.Column>
                <Header
                  style={{ color: '#fafafa', fontSize: '3em', wordWrap: 'break-word' }}>
                  <div>Vietnam Startup Ecosystem</div>
                  <div style={{ color: '#BEBEFF' }}>Open-sourced</div>
                </Header>
                <Button
                  as='a'
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  color='violet'
                  icon='building outline'
                  content='Find Companies'
                  href='/companies'
                  rel="noopener" />
                <Button
                  as='a'
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  color='violet'
                  icon='chart line'
                  content='Find Investors'
                  href='/investors'
                  rel="noopener" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer inverted />
      </Page>

    </div>
  )
}
