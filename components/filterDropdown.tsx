import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const industryOptions = [
  { key: "All", text: "All", value: "All" },
  { key: "Logistics / Transport", text: "Logistics / Transport", value: "Logistics / Transport" },
  { key: "HR / Recruitment", text: "HR / Recruitment", value: "HR / Recruitment" },
  { key: "Education", text: "Education", value: "Education" },
  { key: "Travel / Tourism", text: "Travel / Tourism", value: "Travel / Tourism", },
  { key: "Gaming", text: "Gaming", value: "Gaming" },
  { key: "Enterprise Software", text: "Enterprise Software", value: "Enterprise Software" },
  { key: "Adtech", text: "Adtech", value: "Adtech" },
  { key: "Media / Entertainment", text: "Media / Entertainment", value: "Media / Entertainment" },
  { key: "Software", text: "Software", value: "Software" },
  { key: "Finance", text: "Finance", value: "Finance" },
  { key: "Marketplace", text: "Marketplace", value: "Marketplace" },
  { key: "Ecommerce", text: "Ecommerce", value: "Ecommerce" },
  { key: "Web Hosting", text: "Web Hosting", value: "Web Hosting" },
  { key: "Telecom", text: "Telecom", value: "Telecom" },
  { key: "Fintech", text: "Fintech", value: "Fintech" },
  { key: "Food & Beverage", text: "Food & Beverage", value: "Food & Beverage" },
  { key: "Real Estate", text: "Real Estate", value: "Real Estate" },
  { key: "Construction", text: "Construction", value: "Construction" },
  { key: "Domain Names", text: "Domain Names", value: "Domain Names" },
  { key: "Customer Support", text: "Customer Support", value: "Customer Support" },
  { key: "Agtech", text: "Agtech", value: "Agtech" },
  { key: "Infrastructure", text: "Infrastructure", value: "Infrastructure" },
  { key: "Healthcare", text: "Healthcare", value: "Healthcare" },
  { key: "Social", text: "Social", value: "Social" },
  { key: "Renewable Energy", text: "Renewable Energy", value: "Renewable Energy" },
  { key: "Marketing", text: "Marketing", value: "Marketing" }
]

export default function FilterDropdown({ industry, filteredLength, setIndustry }: {
  industry: string,
  filteredLength: number,
  setIndustry: any
}) {

  return (
    <Dropdown
      className='icon'
      icon='filter'
      floating
      labeled
      scrolling
      button
      header={<Dropdown.Header icon='building outline' content='Choose Industry' />}
      options={industryOptions}
      text={industry ? `${industry} (${filteredLength})` : "Filter"}
      placeholder={industry ? `${industry} (${filteredLength})` : "Filter"}
      value={industry ? industry : "All"}
      onChange={(e, { value }) => setIndustry(value)}>
    </Dropdown>
  )
}