import {
  Button,
  Grid,
  Header,
  Segment,
  Container
} from 'semantic-ui-react';
import Footer from '../components/footer';
import Page from '../components/page';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Meta
        title="{this.props.meta_title}"
        desc="{this.props.meta_desc}" />

      <Page>
        <Container style={{ minHeight: '100vh', width: '100vw', margin: '56px 0 0 0', padding: '0 2em' }}>
          <Segment
            textAlign='center'
            vertical>
            <Grid
              style={{ minHeight: '72vh' }}
              container
              stackable
              verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column>
                  <Header
                    style={{ paddingTop: '1.8em', fontSize: '3em', wordWrap: 'break-word' }}
                    content='Header #1' />
                  <p
                    style={{ fontSize: '1.5em', wordWrap: 'break-word' }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  <Button
                    as='a'
                    size='big'
                    onClick={() => { router.push('/company/google') }}>Check it out</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Page>
      <Footer />
    </>
  )
}

export default Home;
