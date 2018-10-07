import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div>

                <div className="App-bg d-flex justify-content-center align-items-center mt-10">
                    <div id="home">
                        <h1 className="header-font text-black d-none d-lg-block" ><span style={{fontWeight: 900}}>Ellie Earle</span> | Graphic Design</h1>
                        <h2 className="header-font text-black d-lg-none" ><span style={{fontWeight: 900}}>Ellie Earle</span> | Graphic Design</h2>
                    </div>

                </div>
            </div>);
    }
}

export default Jumbotron;