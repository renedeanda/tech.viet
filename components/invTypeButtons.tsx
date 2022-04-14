import React from 'react';
import { Button } from 'semantic-ui-react';

const invTypeOptions = [
  { key: "All", text: "All", value: "All" },
  { key: "Accelerator / Incubator", text: "Accelerator / Incubator", value: "Accelerator / Incubator" },
  { key: "Angel", text: "Angel", value: "Angel" },
  { key: "Corp Dev", text: "Corp Dev", value: "Corp Dev" },
  { key: "Private Equity", text: "Private Equity", value: "Private Equity" },
  { key: "Venture Capital", text: "Venture Capital", value: "Venture Capital" }
]

export default function InvTypeButtons({ invType, filteredLength, setInvType }: {
  invType: string | string[],
  filteredLength: number,
  setInvType: any
}) {

  let validOption: boolean = false;
  {
    invTypeOptions.forEach((option, key) => {
      if (invType.toString().toLowerCase() == option.value.toLowerCase()) {
        validOption = true
        return validOption
      }
    })
  }
  return (

    <div style={{ padding: '1em 0 1.2em 0' }}>
      {invTypeOptions.map((option, key) =>
      (<Button
        key={key}
        className='industry-button'
        content={option.value}
        circular
        size='tiny'
        active={!validOption && (option.value.toLowerCase() == "all") ? true : invType.toString().toLowerCase() == option.value.toLowerCase()}
        onClick={() => setInvType(option.value)}
        style={{ display: 'inline-block', margin: '0.2em' }} />)
      )}
    </div>
  )
}