import {
  Grid,
  Header,
  Segment,
  Container
} from 'semantic-ui-react';
import Page from '../../components/page';
import { useRouter } from 'next/router';
import Meta from '../../components/Meta';
import LinkButtons from '../../components/linkButtons';

const CompanyPage = ({ companies }) => {
  const router = useRouter();

  console.log(companies)

  //TODO randomize the companies in list & add filtering by industry, also sort by A-Z with filter
  return (
    <>
      <Meta
        title={companies.company[1].name}
        desc="An open-source view into the Vietnam Tech ecosystem." />

      <Page>
        <Container text style={{ padding: '4.5em 0 1.5em 0', minHeight: '100vh' }}>
          <Segment textAlign='center' style={{ margin: '0 0 1em 0', background: 'white', borderRadius: '.5em', padding: '1.2em' }}>
            <Header as='h1' style={{
              marginBottom: 0,
              fontSize: '2.3em',
              wordWrap: 'break-word'
            }}>{companies.company[1].name}</Header>
            <p style={{
              lineHeight: '1.5em',
              margin: 0,
              fontSize: '1.5em',
              wordWrap: 'break-word'
            }}>{companies.company[1].industry}</p>
            {companies.company[1].tagline.en ?
              <p style={{
                lineHeight: '1em',
                fontSize: '1.1em',
                opacity: '0.6',
                wordWrap: 'break-word'
              }}>{companies.company[1].tagline.en}</p>
              : null}
            <LinkButtons
              company={companies.company[1]}
              size='large' />
          </Segment>
        </Container >
      </Page>
    </>
  )
}

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('/data/companies.json')
//   const companies = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       companies,
//     },
//   }
// }

export default CompanyPage;