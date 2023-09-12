import React from 'react'

const ListProp = ({title, description}) => {
  return (
    <div>
      <button>{title}</button>
      <span>{description}</span>
    </div>
  )
}

export default ListProp