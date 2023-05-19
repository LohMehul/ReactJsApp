import React, { Component } from 'react';
import CardCompo from './propschild';
import aeImg from './albert einstein.jpg';


class ProspExample extends Component {
    render() {
        return (
            <>
                {/* <img src={BikeImg} alt="" /> */}
                <div className="row">
                    <div className="col-3"> 
                    <CardCompo title="Props Title" imgSrc="https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg" />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Product" imgSrc="https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg" />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Other Product" imgSrc={aeImg} kuchbhi="data " />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Other Product" imgSrc={`${process.env.PUBLIC_URL}/albert einstein.jpg`} kuchbhi="data" />
                    </div>
                </div>
            </>
        );
    }
}

export default ProspExample;