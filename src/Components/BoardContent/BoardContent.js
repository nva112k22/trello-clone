import React, { useState } from "react";
import "./BoardContent.scss";
import Column from "Components/Column/Column";
import {initalData} from 'actions/initalData';
import { useEffect } from "react";
import {isEmpty} from 'lodash';
import {mapOrder} from 'utilities/sorts';

function BoardContent() {
  const [board, setBoard] = useState({})
  const [columns, setColumns] = useState([])

  useEffect(() => {
    const boardFormDB = initalData.boards.find(board => board.id === 'board-1')
    if(boardFormDB) {
        setBoard(boardFormDB)

        setColumns(mapOrder(boardFormDB.columns, boardFormDB.columnOrder, 'id'))
    }
  }, [])

  if (isEmpty(board)) {
      return <div className="not-found" style={{'padding': '10px', 'color': 'white'}}>Board not found</div>
  }
  return (
    <div className="board-content">
      {columns.map((column, index) => <Column key={index} column={column} />)}
    </div>
  );
}

export default BoardContent;
