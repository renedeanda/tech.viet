import { Modal } from 'semantic-ui-react';
import { Company } from '../types/company.types';
import CompanyContainer from './companyContainer';

export default function CompanyModal({ company, open, onClose }: {
  company: Company,
  open: boolean,
  onClose: any
}) {

  return (
    <Modal
      basic
      open={open}
      closeOnDimmerClick={true}
      onClose={onClose}
      closeIcon>
      <CompanyContainer modal company={company} />
    </Modal>
  )
}