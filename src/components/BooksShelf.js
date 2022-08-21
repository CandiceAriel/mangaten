import React from 'react'

function BooksShelf() {
  const shelves = [
    {
        shelvesId: "NR",
        label: "New Release",
        products: [
            {
                productId: "M001",
                title: "Tokyo Revengers",
                price: 4.00
            },
            {
                productId: "M002",
                title: "Your Name",
                price: 4.00
            },
            {
                productId: "M002",
                title: "Your Name",
                price: 4.00
            },
            {
                productId: "M002",
                title: "Your Name",
                price: 4.00
            }
        ]
    },
    {
        shelvesId: "BS",
        label: "Best Seller"
    }
  ]

  return (
    <div>
        {shelves.map(shelf =>
            <div key={shelf.shelvesId}>
                <h4 key={shelf.shelvesId} className= "shelf-title">{shelf.label}</h4>
                <ul className= "list_products list-flex-view">
                    {shelf.products?.map(product => 
                        <div className='box-small'>
                            <li className= "list_nav_item list-inline" key={product.productId}>
                                <p>{product.title}</p>
                                <p className="text_product-price">${product.price}</p>
                            </li>   
                        </div>
                    )}
                </ul>
            </div>
        )}
    </div>
  )
}

export default BooksShelf