import React from 'react';
import Page from '../../components/page';
import Meta from '../../components/Meta';
import fs from 'fs';
import path from 'path';
import InvestorContainer from '../../components/investorContainer';
import { Investor } from '../../types/investor.types';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function InvestorPage({ investor }: { investor: Investor }) {

  const description = investor.name ?
    `${investor.name} on Viet.io. Vietnam Startup Ecosystem open-sourced.`
    : 'Vietnam Startup Ecosystem.'

  const screenSrc = `/img/investor/${investor.slug}-screenshot.png`

  return (
    <>
      <Meta
        title={investor.name ? `${investor.name} | Viet.io - Vietnam Startup Ecosystem` : 'Investor Not Found'}
        desc={investor.description ? `${investor.description} ${description}` : description}
        canonical={`${process.env.PUBLIC_URL}/investors/${investor.slug}`}
        image={screenSrc} />

      <Page>
        <InvestorContainer investor={investor} />
      </Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const investorsDirectory = path.join(process.cwd(), '/public/data/investors')
  const filenames = fs.readdirSync(investorsDirectory)

  const paths = filenames.map((filename) => {
    const filePath = path.join(investorsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const slug = JSON.parse(fileContents).slug

    return {
      params: {
        investor: slug
      }
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async context => {
  const investorFile = path.join(process.cwd(), `/public/data/investors/${context.params.investor}.json`)
  const fileContents = fs.readFileSync(investorFile, 'utf8')

  return {
    props: {
      investor: JSON.parse(fileContents)
    },
  }
}