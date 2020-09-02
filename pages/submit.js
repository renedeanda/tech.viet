import {
  Button,
  Grid,
  Header,
  Segment,
  Container
} from 'semantic-ui-react';
import Page from '../components/page';
import Meta from '../components/Meta';

const Submit = () => {

  return (
    <>
      <Meta
        title='Submit to Tech.Viet'
        desc='Update &amp; add new Vietnamese Tech companies to Tech.Viet, an open-source view into the Vietnam Tech ecosystem'
        canonical='https://tech.viet.io/submit' />

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
                    style={{ padding: '0.2em', fontSize: '2.7em', wordWrap: 'break-word' }}
                    content='Help improve this list with updates &amp; new Vietnamese Tech companies' />
                  <Button
                    style={{ display: 'inline-block', margin: '0.4em' }}
                    color='purple'
                    icon='google'
                    content='Add by Form'
                    size='big'
                    href='https://forms.gle/Y75CegGFRp6tzdn67'
                    target='_blank' />
                  <Button
                    style={{ display: 'inline-block', margin: '0.4em' }}
                    className='github-button'
                    icon='github'
                    content='GitHub'
                    size='big'
                    href='https://github.com/renedeanda/Tech.Viet'
                    target='_blank' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Page>
    </>
  )
}

export default Submit;  