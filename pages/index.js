import {
  Button,
  Grid,
  Header,
  Segment,
  Container,
  Dropdown,
  Input
} from 'semantic-ui-react';
import Page from '../components/page';
import { useRouter } from 'next/router';
import Meta from '../components/Meta';
//import companies from '../public/data/companies.json';
import CompanyCard from '../components/companyCard';

const tagOptions = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
]

const companies = {
  "company": [
    {
      "name": "247Express",
      "website": "247post.vn",
      "industry": "Logistics / Transport",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/247POST.VN",
      "linkedin": "",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "9cv9",
      "website": "9cv9.vn",
      "industry": "HR / Recruitment",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/9cv9.official",
      "linkedin": "linkedin.com/company/9cv9",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Alada",
      "website": "alada.vn",
      "industry": "Education",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/Alada.vn",
      "linkedin": "",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "AloTrip",
      "website": "alotrip.com",
      "industry": "Travel / Tourism",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/AloTrip.travel",
      "linkedin": "linkedin.com/company/alotriptravel",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Amanotes",
      "website": "amanotes.com",
      "industry": "Gaming",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/Amanotes",
      "linkedin": "linkedin.com/company/amanotes",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Angisoft.vn",
      "website": "angisoft.vn",
      "industry": "Enterprise Software",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": {
        "en": "fb.com/phanmemketoanangisoft"
      },
      "linkedin": "",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Anphabe",
      "website": "anphabe.com",
      "industry": "HR / Recruitment",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/anphabe",
      "linkedin": "linkedin.com/company/anphabe.com",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "AntBuddy",
      "website": "antbuddy.com",
      "industry": "Enterprise Software",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/AntBuddy.ab",
      "linkedin": "linkedin.com/company/antbuddy-jsc",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Antoree",
      "website": "antoree.com",
      "industry": "Education",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/antoree.co",
      "linkedin": "linkedin.com/company/antoree",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Ants.vn",
      "website": "antsprogrammatic.com",
      "industry": "Adtech",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/ANTSCorporation",
      "linkedin": "linkedin.com/company/ants-programmatic",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Appota",
      "website": "appota.com",
      "industry": "Media / Entertainment",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/appota",
      "linkedin": "linkedin.com/company/appota",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    },
    {
      "name": "Baolau",
      "website": "baolau.com",
      "industry": "Travel / Tourism",
      "tagline": {
        "en": ""
      },
      "logoUrl": "",
      "description": {
        "en": ""
      },
      "facebook": "fb.com/baolau.co",
      "linkedin": "linkedin.com/company/baolau",
      "blogUrl": "",
      "androidUrl": "",
      "iosUrl": "",
      "demoUrl": "",
      "hiring": ""
    }]
}

const Home = () => {
  const router = useRouter();

  //TODO randomize the companies in list & add filtering by industry, also sort by A-Z with filter
  return (
    <>
      <Meta
        title="Tech.Viet - A View into Vietnam Tech"
        desc="An open-source view into the Vietnam Tech ecosystem." />

      <Page>
        <Container style={{ minHeight: '100vh', width: '100vw', margin: '3em 0 0 0' }}>
          <Segment
            textAlign='center'
            vertical>
            <Grid
              container
              stackable
              verticalAlign='middle'>
              <Grid.Row style={{ minHeight: '50vh' }}>
                <Grid.Column>
                  <Header
                    style={{ padding: '0.8em', fontSize: '3em', wordWrap: 'break-word' }}
                    content='An open-source view into the Vietnam Tech ecosystem.' />
                  <Button
                    style={{ margin: '0 1em' }}
                    color='teal'
                    content='Contribute'
                    size='big'
                    onClick={() => { router.push('/submit') }} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Dropdown
                    direction='left'
                    text='Filter Companies'
                    icon='filter'
                    floating
                    labeled
                    button
                    className='icon'
                    upward={false}>
                    <Dropdown.Menu>
                      <Input icon='search' iconPosition='left' className='search' />
                      <Dropdown.Divider />
                      <Dropdown.Header icon='tags' content='Tag Label' />
                      <Dropdown.Menu scrolling>
                        {tagOptions.map((option) => (
                          <Dropdown.Item key={option.value} {...option} />
                        ))}
                      </Dropdown.Menu>
                    </Dropdown.Menu>
                  </Dropdown>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  {companies && companies.company.length > 0 ?
                    companies.company.map((company, id) =>
                      <CompanyCard
                        key={id}
                        company={company} />)
                    : <p style={{ textAlign: 'center' }}>Error loading companies!</p>}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </Page>

    </>
  )
}

export default Home;
