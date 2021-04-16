import {
  Card,
  Label,
  Icon
} from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';
import LinkButtons from './linkButtons';
import { withHttp } from '../util/helpers';
import { Company } from '../types/company.types';

export default function CompanyCard({ company, setIndustry }: {
  company: Company,
  setIndustry: any
}) {

  // Load local image file if exists
  const avatarSrc = company.facebook ? `/img/company/${company.slug}-avatar.png` : '/company.png'
  const screenSrc = `/img/company/${company.slug}-screenshot.png`

  return (
    <Link href={`/company/${company.slug}`}>
      <Card
        as='div'
        key={company.slug}
        fluid
        link
        style={{ maxWidth: '360px', margin: '0.5em' }}>
        <Image
          quality={60}
          alt={company.name}
          height={160}
          width={360}
          src={screenSrc}
          className='card-image-header' />
        <Card.Content textAlign='left'>
          <div className='card-avatar' style={{ marginTop: '-50px' }}>
            {avatarSrc ?
              <Image
                quality={60}
                alt={company.name}
                height={56}
                width={56}
                src={avatarSrc}
                className='card-avatar' />
              : null
            }
          </div>
          <h2 className='card-title' style={{ marginTop: 0, marginBottom: '8px' }}>{company.name}</h2>
          {company.website ?
            <a
              style={{ fontSize: '1.2em' }}
              className='card-link'
              href={withHttp(company.website)}
              target='_blank'
              rel="noopener"
              onClick={(e) => {
                e.stopPropagation();
              }}><Icon name='linkify' /> {company.website}</a>
            : null}
          <p style={{ fontSize: '1.1em', marginTop: '8px' }} className='tagline'>
            {company.tagline
              ? company.tagline
              : company.description
                ? company.description : "Add a tagline..."}
          </p>
          <LinkButtons
            company={company}
            size='medium' />
        </Card.Content>
        <Card.Content extra textAlign='right'>
          {company.hiring ? <Label circular basic color='red'>Hiring</Label> : null}
          <Label
            as='a'
            style={{ color: '#0C5FFF', borderColor: '#0C5FFF' }}
            onClick={(e) => {
              e.stopPropagation();
              setIndustry(company.industry)
            }} circular basic>{company.industry}</Label>
        </Card.Content>
      </Card >
    </Link >
  )
}