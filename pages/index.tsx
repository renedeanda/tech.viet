import { useState, useEffect, useRef } from 'react';
import {
  Button,
  Grid,
  Header,
  Container,
  Loader,
  Search
} from 'semantic-ui-react';
import fs from 'fs';
import path from 'path';
import Page from '../components/page';
import Meta from '../components/Meta';
import CompanyCard from '../components/companyCard';
import IndustryButtons from '../components/industryButtons';
import { filterCompanies } from '../util/helpers';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import usePagination from "../util/hooks/usePagination";
import CompanyModal from '../components/companyModal';
import { Company } from '../types/company.types';
import CompanySearch from '../components/companySearch';

export default function Home({ companies }: { companies: any[] }) {
  const router = useRouter();
  let queryIndustry: string | string[];
  useEffect(() => {
    if (!router.isReady) return;
    queryIndustry = router.query['industry'];
    setIndustry(queryIndustry);
  }, [router.isReady]);

  const [industry, setIndustry] = useState(queryIndustry ? queryIndustry : "all");
  const [filteredCos, setFilteredCos] = useState(companies);
  const [companyModalOpen, setCompanyModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const openCompanyModal = (company: Company) => {
    router.push(`/`, `/company/${company.slug}`, { shallow: true })
    setSelectedCompany(company)
    setCompanyModalOpen(true)
  }

  const closeCompanyModal = () => {
    router.push(`/`, `/`, { shallow: true })
    setCompanyModalOpen(false)
    setSelectedCompany(null)
  }

  const { next, currentPage, currentData, maxPage, resetCurrentPage } = usePagination(filteredCos, 6);

  useEffect(() => {
    setIndustry(industry);
    setFilteredCos(filterCompanies(companies, industry));
    resetCurrentPage();
  }, [industry])

  const currentCos = currentData();
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
    <div>
      <Meta
        title='Tech Viet - Vietnam Startup Ecosystem'
        desc='List of 200+ Vietnam startups and big tech companies. Tech Viet is an open-source website built with React and Next.js listing 200+ technology companies in Vietnam.'
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
                  style={{ color: '#1A202C', fontSize: '3em', wordWrap: 'break-word' }}>
                  <div>Vietnam Startup Ecosystem</div>
                  <div style={{ color: '#0C5FFF' }}>Open-sourced</div>
                </Header>
                <Button
                  as='a'
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  color='purple'
                  icon='google'
                  content='Add Company'
                  href='https://forms.gle/Y75CegGFRp6tzdn67'
                  target='_blank'
                  rel="noopener" />
                <Button
                  as='a'
                  style={{ display: 'inline-block', margin: '0.3em' }}
                  className='github-button'
                  icon='github'
                  content='GitHub'
                  href='https://github.com/renedeanda/Tech.Viet'
                  target='_blank'
                  rel="noopener" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ padding: 0, margin: 0 }}>
              <CompanySearch companies={companies} openCompanyModal={openCompanyModal} />
              <IndustryButtons setIndustry={setIndustry} industry={industry} filteredLength={filteredCos.length} />
            </Grid.Row>
            <Grid.Row style={{ padding: 0, margin: 0 }}>
              {currentCos && currentCos.length > 0 ?
                currentCos.map((item: any) =>
                  <CompanyCard key={item.data.slug} company={item.data} setIndustry={setIndustry} openCompanyModal={openCompanyModal} />)
                : <p style={{ color: '#0C5FFF', fontSize: '2em', textAlign: 'center' }}>No companies!</p>}
            </Grid.Row>
            {currentPage !== maxPage ? (
              <div ref={setElement}>
                <Loader active inline='centered' />
              </div>
            ) : null}
          </Grid>
        </Container>
      </Page>
      {companyModalOpen ?
        <CompanyModal
          company={selectedCompany}
          open={companyModalOpen}
          onClose={() => closeCompanyModal()}
        /> : null
      }
    </div>
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

  return {
    props: {
      companies
    },
  }
}
