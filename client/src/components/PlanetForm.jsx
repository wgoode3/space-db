import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PlanetForm = props => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [hasRings, setHasRings] = useState(false);

    const create = e => {
        e.preventDefault();
        const newPlanet = {name, color, hasRings};
        console.log(1, newPlanet);

        axios.post("http://localhost:8000/api/planets", newPlanet)
            .then(res => {
                console.log(5, res);
            }).catch(err => console.log(err));

    }

    return (
        <form onSubmit={create}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Color</label>
                <input type="text" className="form-control" onChange={e => setColor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label>Has Rings</label>
                <input type="checkbox" className="form-control" onClick={e => setHasRings(!hasRings)} />
            </div>
            <input type="submit" className="btn btn-dark btn-block" value="Create Planet" />
        </form>
    )

}

export default PlanetForm;