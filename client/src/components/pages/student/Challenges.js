/*
*  Name_file :GroupTeacher.js
*  Description: Pagina del grupo seleccionado por profesor, contiene la vista de los desafios  
*  que tiene el grupo seleccionado por el profesor  
*/
import React, { Component } from 'react';
import StudentService from '../../../services/student/student-service.js';
import moment from 'moment';
//import CreateChallenge from './CreateChallenge.js';
import { Link } from "react-router-dom";

/**Datos del usuario */
import AuthUser from '../../../services/authenticity/auth-service.js';

class Challenges extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dataWriting: []
        };
    }

    componentDidMount() {
        /**Obtiene los desafios del estudiante segun su grupo */
        StudentService.getChallenges(this.props.groupSelect).then(response => {
            this.setState({ data: response });
        }).catch(error => {
            console.log(error.message);
        })

        /**Obtiene los escritos del estudiante segun su grupo */
        StudentService.getWritings(AuthUser.getCurrentUser().id, this.props.groupSelect).then(response => {
            this.setState({ dataWriting: response });
        }).catch(error => {
            console.log(error.message);
        })
    }

    /*Dibuja la pagina  */
    render() {
        let formatedDate;
        const { data } = this.state;
        let e=false;
        let n=false;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>idDesafio</th>
                            <th>Desafio</th>
                            <th>categoria</th>
                            <th>colaborativo</th>
                            <th>fecha</th>
                            <th>Hora</th>
                            <th>activo</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((challenge) => (
                            <tr key={challenge.id}>
                                <td>{challenge.id}</td>
                                <td>{challenge.titulo}</td>
                                {/* <td>{challenge.tipoCalificacion}</td> */}
                                <td>{challenge.nombre}</td>
                                <td>{challenge.colaborativo}</td>
                                <td>{formatedDate = moment(challenge.fechaFin).format('DD/MM/YYYY')}</td>
                                <td>{formatedDate = moment(challenge.fechaFin).format('LT')}</td>
                                <td>{challenge.activo}</td>
                                {e=true}{n=false}
                                {this.state.dataWriting.filter(writing => writing.idDesafio === challenge.id).map((item, index) =>
                                    {n=true;e=false}
                                )}
                                <td><Link to={`/student/writing/${this.props.groupSelect}/${challenge.id}`}><button disabled={n}>Nuevo Escrito</button></Link></td>
                                <td><Link to={`/student/editWriting/${this.props.groupSelect}/${challenge.id}`}><button disabled={e}>Editar Escrito</button></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Challenges;