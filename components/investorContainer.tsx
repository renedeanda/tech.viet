import {
  Header,
  Container,
  Button,
  Label,
  Card,
  Icon
} from 'semantic-ui-react';
import Image from 'next/image';
import { withHttp } from '../util/helpers';
import ShareMenu from './shareMenu';
import LinkButtons from './linkButtons';
import { Investor } from '../types/investor.types';

export default function InvestorContainer({ investor, modal }: {
  investor: Investor,
  modal?: boolean
}) {

  // Load local image file if exists
  const avatarSrc = investor.facebook ? `/img/investor/${investor.slug}-avatar.png` : '/investor.png'

  //TODO need new gForm for investor entry editing
  //const gFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSelgDTevZ0xCrTv9SsWnlpE-vw4gofE-2s-c_tKaYo7HJwVUw/viewform?usp=pp_url&entry.2005620554=${investor.name}&entry.1692157935=${investor.website}&entry.171074559=${investor.about}&entry.1166974658=${investor.facebook}&entry.361763259=${investor.linkedin}`;

  const screenSrc = `/img/investor/${investor.slug}-screenshot.png`

  const contPadding = modal ? '3em 0 0.5em 0' : '5em 0 0.5em 0'

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh', padding: contPadding }}>
        <Card
          fluid
          style={{ maxWidth: 720 }}>

          <Image
            quality={60}
            alt={investor.name}
            height={300}
            width={720}
            src={screenSrc}
            className='card-image-header'
          />
          <Card.Content
            textAlign='left'
            style={{ padding: '0px 22px 100px 22px' }}>
            <Container fluid style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                as='a'
                title='Google Forms Edit Button'
                basic
                //href={gFormLink}
                target="_blank"
                rel="noopener"
                icon='pencil'
                circular />
              <ShareMenu url={`https://tech.viet.io/investor/${investor.slug}`} />
            </Container>
            <div className='card-avatar-big' style={{ marginTop: '-100px' }}>
              {avatarSrc ?
                <Image
                  quality={60}
                  alt={investor.name}
                  height={100}
                  width={100}
                  src={avatarSrc}
                  className='card-avatar-big' />
                : null
              }
            </div>
            <Header style={{
              color: '#1A202C',
              marginTop: 0,
              marginBottom: '8px',
              fontSize: '2.5em',
              wordWrap: 'break-word'
            }}>{investor.name}</Header>
            <a
              style={{ fontSize: '1.5em' }}
              className='card-link'
              href={withHttp(investor.website)}
              target='_blank'
              rel="noreferrer">
              <Icon name='linkify' />{investor.website}</a>
            {/* //TODO update LinkButtons component to accept investor object */}
            {/* <div style={{ marginTop: '8px' }}>
              <LinkButtons investor={investor} isTextList />
            </div> */}
            {investor.about ?
              <>
                <Header dividing style={{
                  color: '#1A202C',
                  fontSize: '1.4em'
                }}>About</Header>
                {investor.about.split('\n').map((item, i) => {
                  return <p style={{
                    color: '#555B66',
                    lineHeight: '1.1em',
                    fontSize: '1.33em',
                    wordWrap: 'break-word'
                  }}
                    key={i}>{item}</p>;
                })}
              </>
              : null}
          </Card.Content>
        </Card>
      </Container>
    </>
  )
}