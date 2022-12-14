import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/fentity-directory.css'

class Fentities extends Component {
    render() {
        const fentitiesCategory = this.props.match.params.fentities
        const fentities = this.props.state[fentitiesCategory]
        return (
            <div>
                <h1 id="fentities-title">{this.props.match.params.fentities}</h1>
                <div id="fentities-container">
                    {fentities.map(f => {
                        return (
                            <Link to={`/directory/${fentitiesCategory}/${f.name}`} key={f.name}>
                                <div className="mini">
                                    <img className="directory-img" src={f.imgUrl} alt="" />
                                    <span>{f.name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                
                {console.log(this.props.state)}
            </div>)
    }
}

export default Fentities



