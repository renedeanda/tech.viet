import Page from '../components/page';
import Meta from '../components/Meta';

export default function Custom404() {
    return (
        <>
            <Meta title='404 | Page Not Found' />
            <Page>
                <div style={{ minHeight: '100vh' }}>
                    <h1 style={{
                        margin: '0',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        msTransform: 'translate(-50%, -50%)',
                        transform: 'translate(-50%, -50%)'
                    }}>404 | Page Not Found</h1>
                </div>
            </Page>
        </>

    )
}