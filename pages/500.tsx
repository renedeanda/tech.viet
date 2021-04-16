import Page from '../components/page';
import Meta from '../components/Meta';

export default function Custom500() {
  return (
    <>
      <Meta title='500 | Server-side error occurred' />
      <Page>
        <div style={{ minHeight: '70vh' }}>
          <h1 style={{
            margin: '0',
            position: 'absolute',
            top: '35%',
            left: '50%',
            msTransform: 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)'
          }}>500 | Server-side error occurred</h1>
        </div>
      </Page>
    </>
  )
}