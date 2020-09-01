import React from 'react';
import { Button, List, Icon } from 'semantic-ui-react';
import { withHttp } from '../util/urlHelper';


const LinkButtons = ({ company, size, text }) => {

  const buttons =
    (company && (
      company.facebook ||
      company.linkedin ||
      company.androidUrl ||
      company.iosUrl) ?
      <List>
        {company.facebook ?
          <Button
            as='a'
            size={size}
            style={{ display: 'inline-block', margin: '0.2em' }}
            href={withHttp(company.facebook)}
            target="_blank"
            icon='facebook'
            color='facebook'
            circular
            onClick={(e) => {
              e.stopPropagation();
            }} />
          : null}
        {company.linkedin ?
          <Button
            as='a'
            size={size}
            style={{ display: 'inline-block', margin: '0.2em' }}
            href={withHttp(company.linkedin)}
            target="_blank"
            icon='linkedin'
            color='linkedin'
            circular
            onClick={(e) => {
              e.stopPropagation();
            }} />
          : null}
        {company.androidUrl ?
          <Button
            as='a'
            size={size}
            color='teal'
            style={{ display: 'inline-block', margin: '0.2em' }}
            href={withHttp(company.androidUrl)}
            target="_blank"
            icon='google play'
            circular
            onClick={(e) => {
              e.stopPropagation();
            }} />
          : null}
        {company.iosUrl ?
          <Button
            as='a'
            size={size}
            color='blue'
            style={{ display: 'inline-block', margin: '0.2em' }}
            href={withHttp(company.iosUrl)}
            target="_blank"
            icon='app store ios'
            circular
            onClick={(e) => {
              e.stopPropagation();
            }} />
          : null}
      </List>
      : null)

  const textList = (
    <List link style={{ fontSize: '1.1em' }}>
      <List.Item
        href={withHttp(company.website)}
        target='_blank'><Icon name='linkify' />{company.website}</List.Item>
      {company.facebook ?
        <List.Item
          href={withHttp(company.facebook)}
          target='_blank'><Icon name='facebook' />Facebook</List.Item>
        : null}
      {company.linkedin ?
        <List.Item
          href={withHttp(company.linkedin)}
          target='_blank'><Icon name='linkedin' />LinkedIn</List.Item>
        : null}
      {company.blogUrl ?
        <List.Item
          href={withHttp(company.blogUrl)}
          target='_blank'><Icon name='rss' />Blog</List.Item>
        : null}
      {company.demoUrl ?
        <List.Item
          href={withHttp(company.demoUrl)}
          target='_blank'><Icon name='globe' />Product Demo</List.Item>
        : null}
      {company.androidUrl ?
        <List.Item
          href={withHttp(company.androidUrl)}
          target='_blank'><Icon name='google play' />Google Play</List.Item>
        : null}
      {company.iosUrl ?
        <List.Item
          href={withHttp(company.iosUrl)}
          target='_blank'><Icon name='app store ios' />App Store</List.Item>
        : null}
    </List>)

  return (
    text ? textList : buttons
  )
}

export default LinkButtons;