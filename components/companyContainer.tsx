import {
  Header,
  Segment,
  Container,
  Button,
  Label,
  Image,
  Card
} from 'semantic-ui-react';
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
  // Else load constructed FB url to load remote image
  const avatarUrl = fbUsername ? `https://graph.facebook.com/${fbUsername}/picture?type=large` : '/company.png';

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

          <Card.Content style={{ maxHeight: 375, maxWidth: 600, padding: 0, margin: 0 }}>
            <img
              alt={company.name}
              width='100%'
              height='100%'
              src={screenSrc}
              style={{
                zIndex: 1,
                position: 'relative',
                borderRadius: '4px 4px 0 0',
                padding: 0,
                margin: 0
              }} />
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
            {avatarSrc ?
              <img
                alt={company.name}
                height={100}
                width={100}
                src={avatarSrc}
                style={{
                  zIndex: 2,
                  marginTop: '-120px',
                  position: 'relative',
                  borderRadius: '50%',
                  border: '2px double #e2e8f0',
                  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.05)'
                }} />
              :
              avatarUrl ?
                <img
                  alt={company.name}
                  height={100}
                  width={100}
                  src={avatarUrl}
                  style={{ borderRadius: '50%', boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.05)' }} /> : null
            }
            <Header style={{
              marginTop: 0,
              marginBottom: 0,
              fontSize: '2.5em',
              wordWrap: 'break-word'
            }}>{company.name}</Header>
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