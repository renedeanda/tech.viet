import Link from 'next/link';
import { Card, Icon, Image, Container, Segment, Grid } from 'semantic-ui-react';
import Footer from '../../components/footer';
import Page from '../../components/page';
import { useRouter } from 'next/router';
import Meta from '../../components/Meta';

export default function Home() {
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
                  <Card>
                    <Image src='https://picsum.photos/200' wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>Google</Card.Header>
                      <Card.Meta>
                        <span className='date'>Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        We make the world evil.
            </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
        22 Friends
      </a>
                    </Card.Content>
                  </Card>
                  <h1 className="title">
                    Go <a href="/">Home!</a>
                    <div></div>
          Go <Link href="/" as="vietnam">
                      <a>
                        Vietnam!
            </a>
                    </Link>
                  </h1>
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
