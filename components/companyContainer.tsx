import {
  Header,
  Segment,
  Container,
  Button,
  Label
} from 'semantic-ui-react';
import { withHttp } from '../util/helpers';
import ShareMenu from './shareMenu';
import LinkButtons from './linkButtons';
import { Company } from '../types/company.types';

export default function CompanyContainer({ company }: {
  company: Company;
}) {

  const fbUsername = company.facebook ? new URL(withHttp(company.facebook)).pathname.replace(/\/$/, "") : null;

  const avatarUrl = fbUsername ? `https://graph.facebook.com/${fbUsername}/picture?type=large` : '/company.png';

  const hiringText = company.hiring ? "Yes" : "No";
  const gFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSelgDTevZ0xCrTv9SsWnlpE-vw4gofE-2s-c_tKaYo7HJwVUw/viewform?usp=pp_url&entry.2005620554=${company.name}&entry.1692157935=${company.website}&entry.1045781291=${company.industry}&entry.1065046570=${company.tagline}&entry.564514234=${company.logoUrl}&entry.171074559=${company.description}&entry.1166974658=${company.facebook}&entry.361763259=${company.linkedin}&entry.839337160=${company.blogUrl}&entry.2015302511=${company.androidUrl}&entry.302652646=${company.iosUrl}&entry.1200097343=${company.demoUrl}&entry.190791171=${hiringText}`;

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh', padding: '4.5em 0 1.5em 0' }}>
        <Segment raised style={{ minWidth: 360, maxWidth: 480, padding: '2em' }}>
          <Container fluid style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              as='a'
              basic
              href={gFormLink}
              target="_blank"
              icon='pencil'
              circular />
            <ShareMenu url={`https://tech.viet.io/company/${company.slug}`} />
          </Container>
          {avatarUrl ?
            <img
              alt={company.name}
              height={100}
              width={100}
              src={avatarUrl}
              style={{ borderRadius: '50%', boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.05)' }} />
            : null}
          <Header style={{
            marginBottom: 0,
            fontSize: '2.5em',
            wordWrap: 'break-word'
          }}>{company.name}</Header>
          {company.tagline ? <p
            style={{ marginBottom: 0, fontStyle: 'italic', fontSize: '1.1em', opacity: '0.6', wordWrap: 'break-word' }}
          >{company.tagline}</p>
            : null}
          <Label style={{ marginTop: '1em' }} circular basic color='teal'>{company.industry}</Label>
          <LinkButtons company={company} isTextList />
          {company.description ?
            <>
              <Header dividing style={{
                fontSize: '1.4em'
              }}>About</Header>
              <p style={{
                lineHeight: '1.1em',
                fontSize: '1.33em',
                opacity: '0.6',
                wordWrap: 'break-word'
              }}>{company.description}</p>
            </>
            : null}
        </Segment>
      </Container>
    </>
  )
}