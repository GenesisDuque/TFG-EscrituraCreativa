import React, { useState, useEffect } from "react";


import TabsWriting from "./TabsWriting";
import TeacherService from '../../../services/teacher/teacherService.js';

import WritingsStudent from "./WritingsStudent";
// import WritingsTeam from "./WritingsTeam";



function Writings(props) {
    const [count, setCount] = useState(0);
    const [dataChallenges, setDataChallenges] = useState([]);
    const [showWritings, setShowWritings] = useState(false);
    const [idChallenge, setIdChallenge] = useState("");

    const data = [
        { id: 1, name: "Escritos",prueba:idChallenge, content: () => <WritingsStudent key={props.groupSelect} groupSelect={props.groupSelect} idChallenge={idChallenge} />, state: "active" },
        //  { id: 2, name: "Escritos en equipo", content: () => <WritingsTeam key={props.groupSelect} groupSelect={props.groupSelect} />, state: "inactive" },
    ];

    useEffect(() => {
        //obtiene todos los desafios del profesor
        TeacherService.getChallenges(props.groupSelect)
            .then(response => {
                setDataChallenges([...dataChallenges, response])

            })

    }, []);

    const selectionChallenge = event => {
        setIdChallenge(event.target.value)
        setShowWritings(true)
    };

    return (
        <div>
            <div className="row-edit">
                <div className="form-select">
                    <label className='form-label'>Selecciona Desafio</label>
                    <select onChange={selectionChallenge} >
                        <option value="" selected disabled hidden > Seleccionar</option>
                        {dataChallenges.length > 0 ? dataChallenges[0].map(elemento => (
                            <option key={elemento.id} value={elemento.id} > { elemento.titulo} </option>
                        )) : null}
                    </select>
                </div>
            </div>

            {showWritings ? (

                <TabsWriting data={data} />
            ) : (
                <div>
                    Nada
                </div>

            )}


        </div>
    );


}

export default Writings;