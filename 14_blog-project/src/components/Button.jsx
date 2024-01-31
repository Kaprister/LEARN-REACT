/* eslint-disable react/prop-types */
import React from 'react'

function Button({children, 
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${textColor} ${className} ${bgColor} `} {...props}>
      {children}
    </button>
  )
}

export default Button
