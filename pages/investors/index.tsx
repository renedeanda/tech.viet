import Page from '../../components/page';
import Meta from '../../components/Meta';

export default function () {
  return (
    <>
      <Meta title='Investors' />
      <Page>
        <div style={{ minHeight: '70vh' }}>
          <h1 style={{
            margin: '0',
            position: 'absolute',
            top: '35%',
            left: '50%',
            msTransform: 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)'
          }}>Investors</h1>
        </div>
      </Page>
    </>
  )
}