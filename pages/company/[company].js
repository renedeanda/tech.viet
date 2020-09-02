import React from 'react';
import Page from '../../components/page';
import Meta from '../../components/Meta';
import fs from 'fs';
import path from 'path';
import CompanyContainer from '../../components/companyContainer';

const CompanyPage = ({ company }) => {

  const description = company.name ?
    `${company.name} on Tech.Viet. An open-source view into the Vietnam Tech ecosystem.`
    : 'An open-source view into the Vietnam Tech ecosystem.'

  return (
    <>
      <Meta
        title={company.name ? `${company.name} Company Page` : 'Company Not Found'}
        desc={company.tagline ? `${company.tagline} ${description}` : description}
        canonical={`https://tech.viet.io/company/${company.slug}`} />

      <Page>
        <CompanyContainer company={company} />
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
  const companyFile = path.join(process.cwd(), `/public/data/companies/${context.params.company}.json`)
  const fileContents = fs.readFileSync(companyFile, 'utf8')

  return {
    props: {
      company: JSON.parse(fileContents)
    },
  }
}

export default CompanyPage;