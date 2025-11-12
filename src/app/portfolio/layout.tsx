import React from 'react'

function PortfolioLayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <div>
      <h1 className="text-8xl font-bold mb-5">Our Works</h1>
        {children}
    </div>
  )
}

export default PortfolioLayout