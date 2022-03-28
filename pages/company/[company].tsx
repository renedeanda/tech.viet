import React from 'react';
import Page from '../../components/page';
import Meta from '../../components/Meta';
import fs from 'fs';
import path from 'path';
import CompanyContainer from '../../components/companyContainer';
import { Company } from '../../types/company.types';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function CompanyPage({ company }: { company: Company }) {

  const description = company.name ?
    `${company.name} on Viet.io. Vietnam Startup Ecosystem open-sourced.`
    : 'Vietnam Startup Ecosystem.'

  const screenSrc = `/img/company/${company.slug}-screenshot.png`

  return (
    <>
      <Meta
        title={company.name ? `${company.name} | Viet.io - Vietnam Startup Ecosystem` : 'Company Not Found'}
        desc={company.tagline ? `${company.tagline} ${description}` : description}
        canonical={`${process.env.PUBLIC_URL}/company/${company.slug}`}
        image={screenSrc} />

      <Page>
        <CompanyContainer company={company} />
      </Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = async context => {
  const companyFile = path.join(process.cwd(), `/public/data/companies/${context.params.company}.json`)
  const fileContents = fs.readFileSync(companyFile, 'utf8')

  return {
    props: {
      company: JSON.parse(fileContents)
    },
  }
}