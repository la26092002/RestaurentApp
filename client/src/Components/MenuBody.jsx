import React from 'react';
import data from './../Menu.json';

const MenuBody = () => {
    function searchByType(Type) {
        return data.filter(item => item.type === Type);
      }
      
    return (
        <div>
            <div className="container text-center">
                <h1>Menu</h1>
                <hr />
                {searchByType("1").length > 0 ? <h4>PIZZA</h4> : null}
                <div className="row">
                    {data.map((item) => {
                        if (item.type === "1") {
                            return (
                                <div className="col-12 col-sm-6 col-md-4  my-auto mx-auto" key={item.id}>
                                    <div className="card mb-3">
                                        <img src={item.image} className="card-img-top" alt="..." style={{maxHeight:'100%',minHeight:'100%',maxWidth:'100%',minWidth:'100%'}} />
                                        <div className="card-body" style={{ maxHeight: '150px', minHeight: '150px' }}>
                                            <h5 className="card-title">{item.title} : {item.price} DA</h5>
                                            <p className="card-text">{item.discription}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return null; // If the item doesn't match the condition, you can return null or omit it.
                        }
                    })}
                </div>

            </div>
        </div>
    );
};

export default MenuBody;



