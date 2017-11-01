import React from 'react'

import {Link} from 'react-router-dom';

const IndexPage = () =>({
    render(){
        return (
            <div>
                <h1>Homepage</h1>
                <Link to={"/camera"}>Camera</Link>
            </div>
        );
    }
});

export default IndexPage