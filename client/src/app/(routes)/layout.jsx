import React from 'react'

function layout({children}) {
  return (
    <div className="bg-dot-white/[0.18] min-h-screen bg-black">
      {children}
      
    </div>
  )
}

export default layout
