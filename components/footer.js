import React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Segment
} from 'semantic-ui-react';

const Footer = () => {

    return (
        <footer>
            <Segment
                inverted
                vertical
                style={{ width: '100vw', backgroundColor: '#333333', padding: '5em 0em' }}>
                <Container>
                    <Grid
                        divided
                        inverted
                        stackable
                        color='black'>
                        <Grid.Row>
                            <Grid.Column
                                width={3}>
                                <p style={{ justifyContent: 'center' }}>
                                    {'© ' + new Date().getFullYear() + ' Made by '}
                                    <a href='https://vina.dev/rene' target='_blank'>René</a></p>
                                <List link inverted>
                                    <List.Item
                                        as='a'
                                        href='https://github.com/renedeanda/Tech.Viet'
                                        target='_blank'>GitHub</List.Item>
                                    <List.Item
                                        as='a'
                                        href='mailto:hi@viet.io'>Get in touch</List.Item>
                                    <List.Item style={{ paddingTop: '2em', fontStyle: 'italic' }}>{"* Inclusion of a company on this list is not an endorsement for the company or it\'s products"}</List.Item>

                                </List>
                                <p style={{ justifyContent: 'center' }}>

                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer;