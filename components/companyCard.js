import React from 'react';
import {
  Card,
  Label,
  Icon
} from 'semantic-ui-react';
import LinkButtons from '../components/linkButtons';
import { withHttp } from '../util/urlHelper';

const CompanyCard = ({ id, company }) => {

  return (
    <Card
      key={id}
      color='teal'
      raised
      fluid
      link
      href={'/company/' + company.slug}
      style={{ maxWidth: '320px', display: 'inline-block', margin: '0.5em' }}>
      <Card.Content
        textAlign='left'>
        <Card.Header
          style={{ fontSize: '1.8em' }}>{company.name}</Card.Header>
        {company.website ?
          <Card.Meta>
            <a
              href={withHttp(company.website)}
              target='_blank'><Icon name='linkify' /> {company.website}</a>
          </Card.Meta> : null}
        {company.tagline ?
          <Card.Description>
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