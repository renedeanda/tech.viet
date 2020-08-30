import {
  Grid,
  Header,
  Segment,
  Container,
  Icon
} from 'semantic-ui-react';
import Page from '../../components/page';
import Meta from '../../components/Meta';
import LinkButtons from '../../components/linkButtons';
import fs from 'fs';
import path from 'path';

const CompanyPage = ({ company }) => {

  return (
    <>
      <Meta
        title={company && company.name ? company.name : "404"}
        desc="An open-source view into the Vietnam Tech ecosystem." />

      <Page>
        <Container text style={{ padding: '4.5em 0 1.5em 0', minHeight: '100vh' }}>
          <Segment textAlign='center' style={{ margin: '0 0 1em 0', background: 'white', borderRadius: '.5em', padding: '1.2em' }}>
            <Header as='h1' style={{
              marginBottom: 0,
              fontSize: '2.3em',
              wordWrap: 'break-word'
            }}>{company.name}</Header>
            <p style={{
              lineHeight: '1.5em',
              margin: 0,
              fontSize: '1.5em',
              wordWrap: 'break-word'
            }}>{company.industry}</p>
            {company.tagline ?
              <p style={{
                lineHeight: '1em',
                fontSize: '1.1em',
                opacity: '0.6',
                wordWrap: 'break-word'
              }}>{company.tagline}</p>
              : null}
            {company.website ?
              <a
                href={'http://' + company.website}
                target='_blank'><Icon name='linkify' /> {company.website}</a> : null}
            {company.website ?
              <a
                href={'http://' + company.website}
                target='_blank'><Icon name='newspaper outline' /> {company.website}</a> : null}
            <LinkButtons
              company={company}
              size='large' />
          </Segment>
        </Container >
      </Page>
    </>
  )
}

export async function getStaticPaths() {
  const companiesDirectory = path.join(process.cwd(), '/public/data/companies')
  const filenames = fs.readdirSync(companiesDirectory)

  const paths = filenames.map((filename) => {
    const filePath = path.join(companiesDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const slug = JSON.parse(fileContents).slug

    return {
      params: {
        company: slug
      }
    }
  })
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const companyFile = path.join(process.cwd(), '/public/data/companies/' + context.params.company + '.json')
  const fileContents = fs.readFileSync(companyFile, 'utf8')

  return {
    props: {
      company: JSON.parse(fileContents)
    },
  }
}

export default CompanyPage;