import Page from '../../components/page';
import Meta from '../../components/Meta';
import { Container, Grid, Button, Message, Header } from 'semantic-ui-react';
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import InvestorCard from '../../components/investorCard';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Investor } from '../../types/investor.types';
import { filterInvestors } from '../../util/helpers';
import usePagination from '../../util/hooks/usePagination';

export default function Investors({ investors }: { investors: any[] }) {
  const router = useRouter();
  let queryInvType: string | string[];
  useEffect(() => {
    if (!router.isReady) return;
    queryInvType = router.query['type'];
    setInvType(queryInvType);
  }, [router.isReady]);

  const [invType, setInvType] = useState(queryInvType ? queryInvType : "all");
  const [filteredInvs, setFilteredInvs] = useState(investors);
  
  const openInvestor = (investor: Investor) => {
    window.open(`/investors/${investor.slug}`, '_blank')
  }

  const { next, currentPage, currentData, maxPage, resetCurrentPage } = usePagination(filteredInvs, 10);

  useEffect(() => {
    setInvType(invType);
    setFilteredInvs(filterInvestors(investors, invType));
    resetCurrentPage();
  }, [invType])

  const currentInvs = currentData();
  const [element, setElement] = useState(null);

  const observer = useRef<IntersectionObserver>();
  const prevY = useRef(0);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  });

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
  
  return (
    <>
      <Meta title='Viet.io - Vietnam Investors'
        desc='List of 200+ Vietnam startups and big tech companies. Viet.io is an open-source website built with React and Next.js listing 200+ technology companies in Vietnam.'
        canonical='https://viet.io/investors' />
      <Page>
        <Container style={{ width: '100vw', margin: '3em 0' }}>
          <Grid
            container
            stackable
            textAlign='center'
            verticalAlign='middle'>
            <Message
              style={{ marginTop: '25px', color: 'black', fontFamily: 'Nunito' }}
              color='yellow'
              size='large'
              header='🚧 WIP'
              content="This page is under development. Reach out if you'd like to contribute." />
            <Grid.Row style={{ marginTop: '60px', padding: '0.5em' }}>
              <Grid.Column>
                <Header
                  style={{ color: '#1A202C', fontSize: '3em', wordWrap: 'break-word' }}>
                  Find <text style={{ color: '#5131F7' }}>Vietnam Investors</text>
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: 0, margin: 0 }}>
              {investors && investors.length > 0 ?
                investors.map((item: any) =>
                  <InvestorCard key={item.data.slug} investor={item.data} setInvType={setInvType} openInvestor={openInvestor} />)
                : <p style={{ color: '#0C5FFF', fontSize: '2em', textAlign: 'center' }}>No investors</p>}
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