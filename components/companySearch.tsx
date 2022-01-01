import _ from 'lodash';
import React from 'react';
import { Search, List } from 'semantic-ui-react';

const initialState = {
  loading: false,
  results: [],
  value: '',
}

function exampleReducer(state, action) {
  switch (action.type) {
    case 'CLEAN_QUERY':
      return initialState
    case 'START_SEARCH':
      return { ...state, loading: true, value: action.query }
    case 'FINISH_SEARCH':
      return { ...state, loading: false, results: action.results }
    case 'UPDATE_SELECTION':
      return { ...state, value: action.selection }
    default:
      throw new Error()
  }
}

const resultRenderer = (data) =>
(
  <List.Item>
    <List.Content>
      <List.Header>{data.data.name}</List.Header>
      <List.Description>{data.data.tagline}</List.Description>
    </List.Content>
  </List.Item>)

export default function CompanySearch({ companies, openCompanyModal }: {
  companies: any[],
  openCompanyModal: any
}) {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current)
    dispatch({ type: 'START_SEARCH', query: data.value })

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.data.slug)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(companies, isMatch),
      })
    }, 300)
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, []);

  return (
    <Search
      placeholder='Search companies'
      loading={loading}
      onResultSelect={(e, data) => {
        openCompanyModal(data.result.data);
        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.data.slug });
      }}
      resultRenderer={resultRenderer}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  )
}
