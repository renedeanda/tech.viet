import React from 'react';
import {
  Card,
  Label,
  Icon
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import LinkButtons from '../components/linkButtons';
import { withHttp } from '../util/urlHelper';

const CompanyCard = ({ id, company }) => {
  const router = useRouter();

  return (
    <Card
      as='div'
      key={id}
      color='teal'
      raised
      fluid
      link
      style={{ maxWidth: '320px', display: 'inline-block', margin: '0.5em' }}
      onClick={(e) => {
        router.push(`/company/${company.slug}`)
      }}>
      <Card.Content
        textAlign='left'>
        <Card.Header
          style={{ fontSize: '1.8em' }}>{company.name}</Card.Header>
        {company.website ?
          <Card.Meta>
            <a
              href={withHttp(company.website)}
              target='_blank'
              onClick={(e) => {
                e.stopPropagation();
              }}><Icon name='linkify' /> {company.website}</a>
          </Card.Meta> : null}
        {company.tagline ?
          <Card.Description style={{ fontStyle: 'italic' }}>
            {company.tagline}</Card.Description> : null}
        <LinkButtons
          company={company}
          size='tiny' />
      </Card.Content>
      <Card.Content extra textAlign='right'>
        <Label circular basic color='teal'>{company.industry}</Label>
      </Card.Content>
    </Card >
  )
}

export default CompanyCard;