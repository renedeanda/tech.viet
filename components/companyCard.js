import React from 'react';
import {
    Card,
    Label
} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import LinkButtons from '../components/linkButtons';

const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink'
];

const color = colors[Math.floor(Math.random() * colors.length)];

const CompanyCard = ({ id, company }) => {
    const router = useRouter();

    return (
        <Card
            key={id}
            color={color}
            raised
            fluid
            link
            style={{ maxWidth: '320px', display: 'inline-block', margin: '0.5em' }}>
            <Card.Content
                textAlign='left'>
                <Card.Header
                    style={{ fontSize: '1.8em' }}
                    onClick={() => { company.name ? router.push('/company/' + company.name.toLowerCase().replace(/\s/g, '')) : null }}
                >{company.name}</Card.Header>
                <Card.Meta>
                    <a
                        href={'http://' + company.website}
                        target='_blank'>{company.website}</a>
                </Card.Meta>
                {company.tagline.en ?
                    <Card.Description>
                        {company.tagline.en}</Card.Description> : null}
                <LinkButtons
                    company={company}
                    size='mini' />
            </Card.Content>
            <Card.Content extra textAlign='right'>
                <Label circular basic color={color}>{company.industry}</Label>
            </Card.Content>
        </Card>
    )
}

export default CompanyCard;