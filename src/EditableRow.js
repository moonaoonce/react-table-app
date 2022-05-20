import React from 'react'

export const EditableRow = () => {
  return (
    <div>
        <tr>
            <td>
              <input
                type="text"
                placeholder="Enter a movie id..."
              ></input>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter a movie title..."
              ></input>
            </td>
            <td>
              <input
                type="email"
                placeholder="Enter an movie plot..."
              ></input>
            </td>
      </tr>
    </div>
  )
}
