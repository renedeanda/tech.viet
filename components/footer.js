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
                                <Header
                                    className='footer-text'
                                    inverted
                                    as='h4'
                                    content={'© ' + new Date().getFullYear()} />
                                <List link inverted>
                                    <List.Item
                                        as='a'
                                        href="mailto:hi@viet.io">Get in touch</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </footer>
    )
}

export default Footer;