import {
  Header,
  Container,
  Card,
  Icon
} from 'semantic-ui-react';
import { withHttp } from '../util/helpers';
import ShareMenu from './shareMenu';
import { Investor } from '../types/investor.types';

export default function InvestorContainer({ investor, modal }: {
  investor: Investor,
  modal?: boolean
}) {

  const contPadding = modal ? '3em 0 0.5em 0' : '5em 0 0.5em 0'

  return (
    <>
      <Container style={{ display: 'flex', justifyContent: 'center', minHeight: '80vh', padding: contPadding }}>
        <Card
          fluid
          style={{ maxWidth: 720 }}>

          <Card.Content
            textAlign='left'
            style={{ padding: '0px 22px 100px 22px' }}>
            <Container fluid style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              {/* <Button
                as='a'
                title='Google Forms Edit Button'
                basic
                //href={gFormLink}
                target="_blank"
                rel="noopener"
                icon='pencil'
                circular /> */}
              <ShareMenu url={`https://tech.viet.io/investors/${investor.slug}`} />
            </Container>
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
              <Icon name='external' />{investor.website}</a>
            {/* //TODO update LinkButtons component to accept investor object */}
            {/* <div style={{ marginTop: '8px' }}>
              <LinkButtons investor={investor} isTextList />
            </div> */}
            {investor.description ?
              <>
                <Header dividing style={{
                  color: '#1A202C',
                  fontSize: '1.4em'
                }}>About</Header>
                {investor.description.split('\n').map((item, i) => {
                  return <p style={{
                    color: '#555B66',
                    lineHeight: '1.1em',
                    fontSize: '1.33em',
                    wordWrap: 'break-word',
                    fontFamily: 'Nunito'
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