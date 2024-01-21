import React from 'react'

const Container = ({children, className="", style, dir}) => {
  return (
    <div className={`container-fluid ${className}`} dir={dir} style={style}>{children}</div>
  )
}

export default Container