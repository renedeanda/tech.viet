import Page from '../../components/page';
import Meta from '../../components/Meta';
import { Container, Grid, Button, Message } from 'semantic-ui-react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import InvestorCard from '../../components/investorCard';

export default function Investors({ investors }: { investors: any[] }) {
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
            <Message
              style={{ marginTop: '25px', color: 'black' }}
              color='yellow'
              size='large'
              header='🚧 WIP'
              content="This page is under development. Reach out if you'd like to contribute." />
            <Grid.Row style={{ padding: 0, margin: 0 }}>
              {investors && investors.length > 0 ?
                investors.map((item: any) =>
                  <InvestorCard key={item.data.slug} investor={item.data} />)
                : <p style={{ color: '#0C5FFF', fontSize: '2em', textAlign: 'center' }}>No investors listed</p>}
            </Grid.Row>
          </Grid>
        </Container>
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const investorsDirectory = path.join(process.cwd(), '/public/data/investors')
  const filenames = fs.readdirSync(investorsDirectory)

  const investors = filenames.map((filename) => {
    const filePath = path.join(investorsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    return {
      filename,
      data: JSON.parse(fileContents),
    }
  })

  return {
    props: {
      investors
    },
  }
}