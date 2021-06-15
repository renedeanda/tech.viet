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
import { Company } from '../types/company.types';

export default function CompanyContainer({ company, modal }: {
  company: Company,
  modal?: boolean
}) {

  // Load local image file if exists
  const avatarSrc = company.facebook ? `/img/company/${company.slug}-avatar.png` : '/company.png'

  const hiringText = company.hiring ? "Yes" : "No";
  const gFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSelgDTevZ0xCrTv9SsWnlpE-vw4gofE-2s-c_tKaYo7HJwVUw/viewform?usp=pp_url&entry.2005620554=${company.name}&entry.1692157935=${company.website}&entry.1045781291=${company.industry}&entry.1065046570=${company.tagline}&entry.564514234=${company.logoUrl}&entry.171074559=${company.description}&entry.1166974658=${company.facebook}&entry.361763259=${company.linkedin}&entry.839337160=${company.blogUrl}&entry.2015302511=${company.androidUrl}&entry.302652646=${company.iosUrl}&entry.1200097343=${company.demoUrl}&entry.190791171=${hiringText}`;

  const screenSrc = `/img/company/${company.slug}-screenshot.png`

  const contPadding = modal ? '3em 0 0.5em 0' : '5em 0 0.5em 0'

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh', padding: contPadding }}>
        <Card
          fluid
          style={{ maxWidth: 720 }}>

          <Image
            quality={60}
            alt={company.name}
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
                href={gFormLink}
                target="_blank"
                rel="noopener"
                icon='pencil'
                circular />
              <ShareMenu url={`https://tech.viet.io/company/${company.slug}`} />
            </Container>
            <div className='card-avatar-big' style={{ marginTop: '-100px' }}>
              {avatarSrc ?
                <Image
                  quality={60}
                  alt={company.name}
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
            }}>{company.name}</Header>
            <a
              style={{ fontSize: '1.5em' }}
              className='card-link'
              href={withHttp(company.website)}
              target='_blank'
              rel="noreferrer">
              <Icon name='linkify' />{company.website}</a>
            {company.tagline ? <p
              style={{ color: '#555B66', marginTop: '8px', fontStyle: 'italic', fontSize: '1.1em', wordWrap: 'break-word' }}
            >{company.tagline}</p>
              : null}
            <div>
              {company.hiring ? <Label circular basic color='red'>Hiring</Label> : null}
              <Label style={{ marginTop: '8px', color: '#0C5FFF', borderColor: '#0C5FFF' }} circular basic >{company.industry}</Label>
            </div>
            <div style={{ marginTop: '8px' }}>
              <LinkButtons company={company} isTextList />
            </div>
            {company.description ?
              <>
                <Header dividing style={{
                  color: '#1A202C',
                  fontSize: '1.4em'
                }}>About</Header>
                {company.description.split('\n').map((item, i) => {
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