import React from 'react'
import PropTypes from 'prop-types'

const List = ({ arr, onChange }) => {


    return (
      <div>
        {arr.map((message, i) =>
            <div key={i} onClick={() => onChange(message)}>
              <span>{message.name}</span>
              <div style={{backgroundColor: message.value, width: 10, height: 10}}>
              </div>
            </div>
          )}
      </div>
    )

}
export default List;