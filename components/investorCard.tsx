import {
  Card,
  Label
} from 'semantic-ui-react';
import Image from 'next/image';
import { Investor } from '../types/investor.types';

export default function InvestorCard({ investor, setInvType, openInvestor }: {
  investor: Investor,
  setInvType: any,
  openInvestor: any
}) {

  // Load local image file if exists
  const avatarSrc = investor.facebook ? `/img/investor/${investor.slug}-avatar.png` : '/company.png'

  return (
    <Card
      as='a'
      onClick={(e) => {
        openInvestor(investor);
      }}
      key={investor.slug}
      fluid
      link
      color='yellow'
      style={{ maxWidth: '360px', margin: '0.5em' }}>
      <Card.Content textAlign='left'>
      <div className='card-avatar'>
          {avatarSrc ?
            <Image
              quality={60}
              alt={investor.name}
              height={56}
              width={56}
              src={avatarSrc}
              className='card-avatar' />
            : null
          }
        </div>
        <h2 className='card-title' style={{ marginTop: 0, marginBottom: '8px' }}>{investor.name}</h2>
        <p style={{ fontSize: '1.1em', marginTop: '8px' }} className='tagline'>
          {investor.description}
        </p>
      </Card.Content>
      <Card.Content extra textAlign='right'>
        <Label
          style={{ color: '#0C5FFF', borderColor: '#0C5FFF', fontFamily: 'Nunito' }}
          onClick={(e) => {
            e.stopPropagation();
            setInvType(investor.type)
          }} circular basic>{investor.type}</Label>
      </Card.Content>
    </Card >
  )
}