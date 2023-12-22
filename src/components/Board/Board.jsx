// Board.jsx

import React from 'react';
import List from '../List/List';
import './Board.css'

import { useTheme } from '../../utils/ThemeContext'

const Board = ({ groupValue, orderValue, ticketDetails, statusList, userList, priorityList }) => {
    const { isDarkTheme } = useTheme();
  return (
    <section className={`board-details ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="board-details-list">
        {
          {
            'status': <>
              {
                statusList.map((listItem) => {
                  return (<List
                    key={listItem.id}
                    groupValue='status'
                    orderValue={orderValue}
                    listTitle={listItem}
                    listIcon=''
                    statusList={statusList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
            </>,
            'user': <>
              {
                userList.map((listItem) => {
                  return (<List
                    key={listItem.id}
                    groupValue='user'
                    orderValue={orderValue}
                    listTitle={listItem}
                    listIcon=''
                    userList={userList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
            </>,
            'priority': <>
              {
                priorityList.map((listItem) => {
                  return (<List
                    key={listItem.priority}
                    groupValue='priority'
                    orderValue={orderValue}
                    listTitle={listItem.priority}
                    listIcon=''
                    priorityList={priorityList}
                    ticketDetails={ticketDetails}
                  />)
                })
              }
            </>
          }[groupValue]
        }
      </div>
    </section>
  );
}

export default Board;
