import { Button, List, Icon, SemanticSIZES } from 'semantic-ui-react';
import { withHttp } from '../util/helpers';
import { Company } from '../types/company.types';

export default function LinkButtons(
  { company, size, isTextList }: {
    company: Company,
    size?: SemanticSIZES,
    isTextList?: boolean
  }) {

  const buttons =
    (company && (
      company.facebook ||
      company.linkedin ||
      company.androidUrl ||
      company.iosUrl) ?
      <List horizontal>
        {company.facebook ?
          <List.Item style={{ margin: '0 0.33em 0 0' }}>
            <Button
              as='a'
              title='Facebook'
              size={size}
              href={withHttp(company.facebook)}
              target="_blank"
              rel="noopener"
              icon='facebook'
              color='facebook'
              circular
              onClick={(e) => {
                e.stopPropagation();
              }} />
          </List.Item>
          : null}
        {company.linkedin ?
          <List.Item style={{ margin: '0 0.33em 0 0' }}>
            <Button
              as='a'
              title='LinkedIn'
              size={size}
              href={withHttp(company.linkedin)}
              target="_blank"
              rel="noopener"
              icon='linkedin'
              color='linkedin'
              circular
              onClick={(e) => {
                e.stopPropagation();
              }} />
          </List.Item>
          : null}
        {company.androidUrl ?
          <List.Item style={{ margin: '0 0.33em 0 0' }}>
            <Button
              as='a'
              title='Google Play Store'
              size={size}
              color='teal'
              href={withHttp(company.androidUrl)}
              target="_blank"
              rel="noopener"
              icon='google play'
              circular
              onClick={(e) => {
                e.stopPropagation();
              }} />
          </List.Item>
          : null}
        {company.iosUrl ?
          <List.Item style={{ margin: '0 0.33em 0 0' }}>
            <Button
              as='a'
              title='Apple App Store'
              size={size}
              color='blue'
              href={withHttp(company.iosUrl)}
              target="_blank"
              rel="noopener"
              icon='app store ios'
              circular
              onClick={(e) => {
                e.stopPropagation();
              }} />
          </List.Item>

          : null}
      </List>
      : null)

  const textList = (
    <List horizontal>
      <List.Item>
        <a
          style={{ fontSize: '1.15em' }}
          className='card-link'
          href={withHttp(company.website)}
          target='_blank'
          rel="noopener">
          <Icon name='linkify' />{company.website}</a>
      </List.Item>
      {company.facebook ?
        <List.Item>
          <a
            style={{ fontSize: '1.15em' }}
            className='card-link'
            href={withHttp(company.facebook)}
            target='_blank'
            rel="noopener">
            <Icon name='facebook' />Facebook</a></List.Item>
        : null}
      {company.linkedin ?
        <List.Item>
          <a
            style={{ fontSize: '1.15em' }}
            className='card-link'
            href={withHttp(company.linkedin)}
            target='_blank'
            rel="noopener">
            <Icon name='linkedin' />LinkedIn</a></List.Item>
        : null}
      {company.blogUrl ?
        <List.Item>
          <a
            style={{ fontSize: '1.15sem' }}
            className='card-link'
            href={withHttp(company.blogUrl)}
            target='_blank'
            rel="noopener">
            <Icon name='rss' />Blog</a></List.Item>
        : null}
      {company.demoUrl ?
        <List.Item>
          <a
            style={{ fontSize: '1.15em' }}
            className='card-link'
            href={withHttp(company.demoUrl)}
            target='_blank'
            rel="noopener">
            <Icon name='globe' />Product Demo</a></List.Item>
        : null}
      {company.androidUrl ?
        <List.Item>
          <a
            style={{ fontSize: '1.15em' }}
            className='card-link'
            href={withHttp(company.androidUrl)}
            target='_blank'
            rel="noopener">
            <Icon name='google play' />Google Play</a></List.Item>
        : null}
      {company.iosUrl ?
        <List.Item>
          <a
            style={{ fontSize: '1.2em' }}
            className='card-link'
            href={withHttp(company.iosUrl)}
            target='_blank'
            rel="noopener">
            <Icon name='app store ios' />App Store</a></List.Item>
        : null}
    </List>)

  return (
    isTextList ? textList : buttons
  )
}