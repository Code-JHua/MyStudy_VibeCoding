import React from 'react'

export default function Child(props) {
  return (
      <div>
          <div className="bd">
              {
                  props.list.map((item) => {
                      return <li key={item}>{item}</li>
                  })
              }
          </div>
    </div>
  )
}
