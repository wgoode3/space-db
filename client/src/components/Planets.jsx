import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Planets = props => {

    const [all, setAll] = useState([]);
    const [moonName, setMoonName] = useState("");


    const getPlanets = () => {
        axios.get("http://localhost:8000/api/planets")
            .then(res => {
                console.log(res);
                setAll(res.data);
            }).catch(err => console.log(err));
    }

    useEffect( () => {
        getPlanets();
    }, []);

    const AddMoon = (e, _id) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/planets/${_id}/add_moon`, {name: moonName})
            .then( res => {
                console.log(res);
                getPlanets();
            }).catch(err => console.log(err));
    }

    return (
        <div>
            {all.map(planet => 
                <div className="card my-3" key={planet._id}>
                    <div className="card-header">{planet.name}</div>
                    <div className="card-body">
                        <p>Color: {planet.color}</p>
                        <p>{planet.name} {planet.hasRings ? "does" : "does not"} have rings.</p>
                        <p>{planet.name} has {planet.moons.length} moon(s).</p>
                        <ul className="list-group">
                            {planet.moons.map(moon =>
                                <li key={moon._id} className="list-group-item">{moon.name}</li>    
                             )}
                            <li className="list-group-item">
                                <form className="form-inline" onSubmit={e => AddMoon(e, planet._id)}>
                                    <label>Add Moon</label>
                                    <input type="text" className="form-control" onChange={e => setMoonName(e.target.value)}/>
                                    <input type="submit" className="btn btn-sm btn-info" value="Add Moon" />
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>    
            )}
        </div>
    )

}

export default Planets;