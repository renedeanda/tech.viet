import {
  Card,
  Label,
  Icon
} from 'semantic-ui-react';
import Image from 'next/image';
import LinkButtons from './linkButtons';
import { withHttp } from '../util/helpers';
import { Investor } from '../types/investor.types';

export default function InvestorCard({ investor }: {
  investor: Investor
}) {

  return (
    <Card
      as='a'
      href={`/investors/${investor.slug}`}
      key={investor.slug}
      rel='noreferrer'
      fluid
      link
      style={{ maxWidth: '360px', margin: '0.5em' }}>
      <Card.Content textAlign='left'>
        <h2 className='card-title' style={{ marginTop: 0, marginBottom: '8px' }}>{investor.name}</h2>
        <p style={{ fontSize: '1.1em', marginTop: '8px' }} className='tagline'>
          {investor.description}
        </p>
      </Card.Content>
    </Card >
  )
}