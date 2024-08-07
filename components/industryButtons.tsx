import React from 'react';
import { Button } from 'semantic-ui-react';

const industryOptions = [
  { key: "All", text: "All", value: "All" },
  { key: "Adtech", text: "Adtech", value: "Adtech" },
  { key: "Automotive", text: "Automotive", value: "Automotive" },
  { key: "Biotech", text: "Biotech", value: "Biotech" },
  { key: "Construction", text: "Construction", value: "Construction" },
  { key: "Customer Support", text: "Customer Support", value: "Customer Support" },
  { key: "Domain Names", text: "Domain Names", value: "Domain Names" },
  { key: "Ecommerce", text: "Ecommerce", value: "Ecommerce" },
  { key: "Education", text: "Education", value: "Education" },
  { key: "Enterprise Software", text: "Enterprise Software", value: "Enterprise Software" },
  { key: "Fashion", text: "Fashion", value: "Fashion" },
  { key: "Finance", text: "Finance", value: "Finance" },
  { key: "Gaming", text: "Gaming", value: "Gaming" },
  { key: "Healthcare", text: "Healthcare", value: "Healthcare" },
  { key: "HR / Recruitment", text: "HR / Recruitment", value: "HR / Recruitment" },
  { key: "Infrastructure", text: "Infrastructure", value: "Infrastructure" },
  { key: "Insurance", text: "Insurance", value: "Insurance" },
  { key: "Logistics / Transport", text: "Logistics / Transport", value: "Logistics / Transport" },
  { key: "Marketing", text: "Marketing", value: "Marketing" },
  { key: "Marketplace", text: "Marketplace", value: "Marketplace" },
  { key: "Media / Entertainment", text: "Media / Entertainment", value: "Media / Entertainment" },
  { key: "Real Estate", text: "Real Estate", value: "Real Estate" },
  { key: "Renewable Energy", text: "Renewable Energy", value: "Renewable Energy" },
  { key: "Social", text: "Social", value: "Social" },
  { key: "Software", text: "Software", value: "Software" },
  { key: "Telecom", text: "Telecom", value: "Telecom" },
  { key: "Travel / Tourism", text: "Travel / Tourism", value: "Travel / Tourism", },
  { key: "Web Hosting", text: "Web Hosting", value: "Web Hosting" },
]

export default function IndustryButtons({ industry, filteredLength, setIndustry }: {
  industry: string | string[],
  filteredLength: number,
  setIndustry: any
}) {

  let validOption: boolean = false;
  {
    industryOptions.forEach((option, key) => {
      if (industry.toString().toLowerCase() == option.value.toLowerCase()) {
        validOption = true
        return validOption
      }
    })
  }
  return (

    <div style={{ padding: '1em 0 1.2em 0' }}>
      {industryOptions.map((option, key) =>
      (<Button
        key={key}
        className='industry-button'
        content={option.value}
        circular
        size='tiny'
        active={!validOption && (option.value.toLowerCase() == "all") ? true : industry.toString().toLowerCase() == option.value.toLowerCase()}
        onClick={() => setIndustry(option.value)}
        style={{ display: 'inline-block', margin: '0.2em' }} />)
      )}
    </div>
  )
}