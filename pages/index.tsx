import { useState, useEffect } from 'react';
import {
  Button,
  Grid,
  Header,
  Container
} from 'semantic-ui-react';
import fs from 'fs';
import path from 'path';
import Page from '../components/page';
import Meta from '../components/Meta';
import CompanyCard from '../components/companyCard';
import IndustryButtons from '../components/industryButtons';
import { shuffle, filterCompanies } from '../util/helpers';
import { GetStaticProps } from 'next';

export default function Home({ companies }: { companies: any[] }) {

  const [industry, setIndustry] = useState("All");
  const [filteredCos, setFilteredCos] = useState(companies);

  useEffect(() => {
    setIndustry(industry);
    setFilteredCos(filterCompanies(companies, industry))
  }, [industry])

  return (
    <div>
      <Meta
        title='Tech.Viet - A View into Vietnam Tech'
        desc='An open-source view into the Vietnam Tech ecosystem. Find tech companies of all sizes from Vietnam.'
        canonical='https://tech.viet.io/' />

      <Page>
        <Container style={{ width: '100vw', margin: '3em 0' }}>
          <Grid
            container
            stackable
            textAlign='center'
            verticalAlign='middle'>
            <Grid.Row style={{ marginTop: '60px', padding: '0.5em' }}>
              <Grid.Column>
                <Header
                  style={{ fontSize: '3em', wordWrap: 'break-word' }}>
                  <div>Vietnam Tech Ecosystem</div>
                  <div style={{ color: '#0C5FFF' }}>Open-sourced</div>
                </Header>
                <Button
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  color='purple'
                  icon='google'
                  content='Add Company'
                  href='https://forms.gle/Y75CegGFRp6tzdn67'
                  target='_blank' />
                <Button
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  className='github-button'
                  icon='github'
                  content='GitHub'
                  href='https://github.com/renedeanda/Tech.Viet'
                  target='_blank' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: 0, margin: 0 }}>
              <IndustryButtons setIndustry={setIndustry} industry={industry} filteredLength={filteredCos.length} />
            </Grid.Row>
            <Grid.Row style={{ padding: 0, margin: 0 }}>
              {filteredCos && filteredCos.length > 0 ?
                filteredCos.map((item: any) =>
                  <CompanyCard company={item.data} setIndustry={setIndustry} />)
                : <p style={{ color: '#0C5FFF', fontSize: '2em', textAlign: 'center' }}>No companies!</p>}
            </Grid.Row>
          </Grid>
        </Container>
      </Page>
    </div >
  )
}

export const getStaticProps: GetStaticProps = async () => {
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
  //Shuffle array of companies
  shuffle(companies);

  return {
    props: {
      companies
    },
  }
}
