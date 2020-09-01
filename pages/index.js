import {
  Button,
  Grid,
  Header,
  Container
} from 'semantic-ui-react';
import Page from '../components/page';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
import CompanyCard from '../components/companyCard';
import fs from 'fs';
import path from 'path';
import StickyFooter from '../components/stickyFooter';

const Home = ({ companies }) => {
  const router = useRouter();

  return (
    <div>
      <Meta
        title='Tech.Viet - A View into Vietnam Tech'
        desc='An open-source view into the Vietnam Tech ecosystem. Find tech companies of all sizes from Vietnam.'
        canonical='https://tech.viet.io/' />

      <Page>
        <Container style={{ minHeight: '100vh', width: '100vw', margin: '3em 0 0 0' }}>
          <Grid
            container
            stackable
            textAlign='center'
            verticalAlign='middle'>
            <Grid.Row style={{ minHeight: '50vh' }}>
              <Grid.Column>
                <Header
                  style={{ padding: '0.8em', fontSize: '3em', wordWrap: 'break-word' }}
                  content='An open-source view into the Vietnam Tech ecosystem' />
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
        </Container>
      </Page>
      <StickyFooter />
    </div>
  )
}

export async function getStaticProps() {
  const companiesDirectory = path.join(process.cwd(), '/public/data/companies')
  const filenames = fs.readdirSync(companiesDirectory)

  const companies = filenames.map((filename) => {
    const filePath = path.join(companiesDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

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
