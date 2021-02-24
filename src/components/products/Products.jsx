import React from 'react'
import {Grid} from '@material-ui/core'
import Product from "./product/Product";

const productList=[
    {id:1,name:'Shoes',description:'Running shoes',price:'200',image:'https://images.unsplash.com/photo-1609708426172-b06f440d9757?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGFsc2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {id:2,name:'Shirt',description:'Running shirt',price:'100',image:'https://images.unsplash.com/photo-1611904548170-00a7470b2c9b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHVuc3BhbHNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {id:3,name:'Pant',description:'Running pant',price:'300',image:'https://images.unsplash.com/photo-1614158283706-26309fa56a4f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {productList.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
