import {
  Button,
  Grid,
  Header,
  Segment,
  Container
} from 'semantic-ui-react';
import Page from '../components/page';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
import CompanyCard from '../components/companyCard';
import fs from 'fs';
import path from 'path';

const Home = ({ companies }) => {
  const router = useRouter();

  return (
    <>
      <Meta
        title="Tech.Viet - A View into Vietnam Tech"
        desc="An open-source view into the Vietnam Tech ecosystem." />

      <Page>
        <Container style={{ minHeight: '100vh', width: '100vw', margin: '3em 0 0 0' }}>
          <Segment
            textAlign='center'
            vertical>
            <Grid
              container
              stackable
              verticalAlign='middle'>
              <Grid.Row style={{ minHeight: '50vh' }}>
                <Grid.Column>
                  <Header
                    style={{ padding: '0.8em', fontSize: '3em', wordWrap: 'break-word' }}
                    content='An open-source view into the Vietnam Tech ecosystem.' />
                  <Button
                    style={{ margin: '0 1em' }}
                    color='teal'
                    content='Contribute'
                    size='big'
                    onClick={() => { router.push('/submit') }} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  {companies && companies.length > 0 ?
                    companies.map((company, id) =>
                      <CompanyCard
                        key={id}
                        company={company.data} />)
                    : <p style={{ textAlign: 'center' }}>Error loading companies!</p>}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Page>

    </>
  )
}

export async function getStaticProps() {
  const companiesDirectory = path.join(process.cwd(), '/public/data/companies')
  const filenames = fs.readdirSync(companiesDirectory)

  const companies = filenames.map((filename) => {
    const filePath = path.join(companiesDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      data: JSON.parse(fileContents),
    }
  })
  return {
    props: {
      companies
    },
  }
}

export default Home;
