import React, { FC, useState } from 'react'
import styled from 'styled-components'
import TablePaginationActions from './TablePaginationsActions'
import { TPair } from '../api/types'

const Container = styled.div`
  min-height: 400px;
  max-width: 300px;
  margin: 0 auto;
`

const Headers = styled.div`
  width: 100%;
  padding: 16px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  border-bottom: 1px solid rgb(140, 134, 134);
  
  div {
   font-size: 18px; 
   font-weight: 500
  }

  div:last-child {
    text-align: right;
  }
`

const Row = styled.div`
  width: 100%;
  padding: 8px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;

  div {
    font-size: 14px;
    font-weight: 400
  }

  div:last-child {
    text-align: right;
  }
`

type TProps = {
  list: TPair[]
}

const CustomTablePagination:FC<TProps> = ({ list }) => {
  const [page, setPage] = useState(0)
  const ROWS_PER_PAGE = 5

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  return (
    <Container>
      <Headers >
        <div>Selected</div>
        <div>Target</div>
      </Headers>
      {(list.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE)).map((pair) => (
        <Row key={pair.s}>
          <div>
            {pair.s}
          </div>
          <div>
            {pair.t}
          </div>
        </Row>
      ))}
      {list.length > ROWS_PER_PAGE && (
        <TablePaginationActions
          count={list.length}
          page={page}
          rowsPerPage={ROWS_PER_PAGE}
          onPageChange={handleChangePage}
        />
      )}
    </Container>
  )
}

export default CustomTablePagination
