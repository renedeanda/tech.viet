import {
  Header,
  Container,
  Button,
  Label,
  Card
} from 'semantic-ui-react';
import Image from 'next/image';
import { withHttp } from '../util/helpers';
import ShareMenu from './shareMenu';
import LinkButtons from './linkButtons';
import { Company } from '../types/company.types';

export default function CompanyContainer({ company }: {
  company: Company;
}) {

  const fbUsername = company.facebook ? new URL(withHttp(company.facebook)).pathname.replace(/\/$/, "") : null;

  // Load local image file if exists
  const avatarSrc = company.facebook ? `/img/company/${company.slug}-avatar.png` : '/company.png'

  const hiringText = company.hiring ? "Yes" : "No";
  const gFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSelgDTevZ0xCrTv9SsWnlpE-vw4gofE-2s-c_tKaYo7HJwVUw/viewform?usp=pp_url&entry.2005620554=${company.name}&entry.1692157935=${company.website}&entry.1045781291=${company.industry}&entry.1065046570=${company.tagline}&entry.564514234=${company.logoUrl}&entry.171074559=${company.description}&entry.1166974658=${company.facebook}&entry.361763259=${company.linkedin}&entry.839337160=${company.blogUrl}&entry.2015302511=${company.androidUrl}&entry.302652646=${company.iosUrl}&entry.1200097343=${company.demoUrl}&entry.190791171=${hiringText}`;

  const screenSrc = `/img/company/${company.slug}-screenshot.png`

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh', padding: '5em 0 1.5em 0' }}>
        <Card
          raised
          fluid
          style={{ maxWidth: 600 }}>

          <Card.Content style={{ padding: 0, margin: 0 }}>
            <Image
              quality={60}
              alt={company.name}
              height={375}
              width={600}
              src={screenSrc}
              className='card-image-header'
            />
          </Card.Content>
          <Card.Content
            textAlign='left'
            style={{ padding: '0px 30px 100px 30px' }}>
            <Container fluid style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                as='a'
                basic
                href={gFormLink}
                target="_blank"
                icon='pencil'
                circular />
              <ShareMenu url={`https://tech.viet.io/company/${company.slug}`} />
            </Container>
            <div style={{ marginTop: '-100px' }}>
              {avatarSrc ?
                <Image
                  quality={60}
                  alt={company.name}
                  height={100}
                  width={100}
                  src={avatarSrc}
                  className='card-avatar' />
                : null
              }
              <Header style={{
                marginTop: 0,
                marginBottom: 0,
                fontSize: '2.5em',
                wordWrap: 'break-word'
              }}>{company.name}</Header>
            </div>
            {company.tagline ? <p
              style={{ marginBottom: 0, fontStyle: 'italic', fontSize: '1.1em', opacity: '0.6', wordWrap: 'break-word' }}
            >{company.tagline}</p>
              : null}
            <Label style={{ marginTop: '1em', color: '#0C5FFF', borderColor: '#0C5FFF' }} circular basic >{company.industry}</Label>
            {company.hiring ? <Label circular basic color='red'>Hiring</Label> : null}
            <LinkButtons company={company} isTextList />
            {company.description ?
              <>
                <Header dividing style={{
                  fontSize: '1.4em'
                }}>About</Header>
                {company.description.split('\n').map((item, i) => {
                  return <p style={{
                    lineHeight: '1.1em',
                    fontSize: '1.33em',
                    opacity: '0.6',
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