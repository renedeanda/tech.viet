import {
  Card,
  Label,
  Icon
} from 'semantic-ui-react';
import Link from 'next/link';
import LinkButtons from './linkButtons';
import { withHttp } from '../util/helpers';
import { Company } from '../types/company.types';

export default function CompanyCard({ company, setIndustry }: {
  company: Company,
  setIndustry: any
}) {

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
          textAlign='left'>
          <h2 className='card-title'>{company.name}</h2>
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