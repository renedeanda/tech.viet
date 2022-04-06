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
      {data.data.tagline ? <List.Description>{data.data.tagline}</List.Description> : null}
    </List.Content>
  </List.Item>)

export default function MySearch({ items, openItem, type }: {
  items: any[],
  openItem: any,
  type: string
}) {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState)
  const { loading, results, value } = state

  const handleSearchChange = React.useCallback((e, data) => {
    dispatch({ type: 'START_SEARCH', query: data.value })

    const timer = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' })
        return
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i')
      const isMatch = (result) => re.test(result.data.name)

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(items, isMatch),
      })
    }, 300)
    return () => clearTimeout(timer);
  }, []);

  return (
    <Search
      placeholder={`Search ${type}`}
      loading={loading}
      onResultSelect={(e, data) => {
        openItem(data.result.data);
        dispatch({ type: 'UPDATE_SELECTION', selection: data.result.data.name });
      }}
      resultRenderer={resultRenderer}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  )
}
