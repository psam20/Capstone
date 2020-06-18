import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class About extends React.Component{
    constructor(){
        super();
        this.state={
            title: "About Us"
        }
    }
    render(){
        return(
            <div>
                <h3 className="head">{this.state.title}</h3>
                <p className="para">
                    Shopify is an e-commerce company based in Bengaluru, Karnataka, India. 
                    It was founded in 2007. The company initially focused on book sales, 
                    before expanding into other product categories such as consumer 
                    electronics, fashion, home essentials & groceries, and lifestyle 
                    products.
                </p>
                <p className="para">
                    Shopify.com's product lines available at its website include several 
                    media (books, DVDs, music CDs, videotapes and software), apparel, baby 
                    products, consumer electronics, beauty products, gourmet food, groceries, 
                    health and personal-care items, industrial & scientific supplies, 
                    kitchen items, jewelry, watches, lawn and garden items, musical 
                    instruments, sporting goods, tools, automotive items and toys & games.
                    In August 2019, Shopify applied to have a liquor store in San Francisco,
                    CA as a means to ship beer and alcohol within the city. Shopify has 
                    separate retail websites for some countries and also offers international 
                    shipping of some of its products to certain other countries.
                </p>
                </div>
             )
    }
} 

export default About;