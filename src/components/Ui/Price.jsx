import React from 'react'


const Price = ({originalPrice, salePrice}) => {
  return (
    <div className="book__price">
        {Number(salePrice) ? (
          <>
            <span className="book__price--normal">
              ${Number(originalPrice).toFixed(2)}
            </span>
            ${Number(salePrice).toFixed(2)}
          </>
        ) : (
          <>${Number(originalPrice).toFixed(2)}</>
        )}
      </div>
  )
}

export default Price