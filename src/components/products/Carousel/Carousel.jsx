import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Card,CardMedia} from '@material-ui/core'

const Carouselj = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "https://images.unsplash.com/photo-1604730989820-69700061c0e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "https://images.unsplash.com/photo-1553598071-4c1e73310e26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
        }
    ]
    return (
        <Carousel style={{ height: '60vh',marginLeft:'1rem' }} >
            {
                items.map( (item, i) => (
                    <Card >
                        {/* <Container maxWidth="sm"> */}
                        <CardMedia
                            style={{ height: '60vh' }}
                            image={item.image}
                            title=""
                        />
                        {/* </Container> */}
                    </Card>
                ))
            }
        </Carousel>
    )
}

export default Carouselj
