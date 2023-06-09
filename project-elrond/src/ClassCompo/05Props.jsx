import React, { Component } from 'react';
import CardCompo from './06propschild.jsx';
import BikeImg from './bmwg.jpg';

class ProspExample extends Component {
    render() {
        return (
            <>
                {/* <img src={BikeImg} alt="" /> */}
                <div className="row">
                    <div className="col-3"> 
                    <CardCompo title="Props Title" imgSrc="https://mdbootstrap.com/img/new/standard/nature/184.webp" kuchbhi= "Lorem Ipsum is simply dummy text of the."  />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Product" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4M3ip3piTUTYow4hV-7fuXK5vNxaSsjPXeZKx5uxjg&s" kuchbhi= "Lorem Ipsum is simply dummy text of the." />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Other Product" imgSrc={BikeImg} kuchbhi= "Lorem Ipsum is simply dummy text of the."  />
                    </div>
                    <div className="col-3"> 
                    <CardCompo title="Other Product" imgSrc={`${process.env.PUBLIC_URL}/BMWBike.jpg`} kuchbhi= "Lorem Ipsum is simply dummy text of the." isThat="hello React" />
                    </div>
                </div>
            </>
        );
    }
}

export default ProspExample;