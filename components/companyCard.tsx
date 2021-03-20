import {
  Card,
  Label,
  Icon,
  Image
} from 'semantic-ui-react';
import Link from 'next/link';
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
        raised
        fluid
        link
        style={{ maxWidth: '320px', display: 'inline-block', margin: '0.5em' }}>
        <Card.Content
          style={{ padding: 0, margin: 0 }}>
          <img
            alt={company.name}
            height={200}
            width={320}
            src={screenSrc}
            style={{
              zIndex: 1,
              position: 'relative',
              borderRadius: '4px 4px 0 0',
              padding: 0,
              margin: 0
            }} />
        </Card.Content>
        <Card.Content textAlign='left'>
          <div>
            {avatarSrc ?
              <img
                alt={company.name}
                height={56}
                width={56}
                src={avatarSrc}
                style={{
                  zIndex: 2,
                  marginTop: '-50px',
                  position: 'relative',
                  borderRadius: '50%',
                  border: '2px double #e2e8f0',
                  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.05)'
                }} />
              : null
            }
            <h2 className='card-title' style={{ marginTop: 0 }}>{company.name}</h2>
          </div>
          {company.website ?
            <Card.Meta>
              <a
                href={withHttp(company.website)}
                target='_blank'
                onClick={(e) => {
                  e.stopPropagation();
                }}><Icon name='linkify' /> {company.website}</a>
            </Card.Meta> : null}
          <Card.Description className='tagline'>
            {company.tagline
              ? company.tagline
              : company.description
                ? company.description : "Add a tagline..."}</Card.Description>
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
    </Link>
  )
}