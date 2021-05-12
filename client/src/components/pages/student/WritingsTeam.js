import React, { Component } from 'react';
import { Link } from "react-router-dom";
import StudentService from '../../../services/student/student-service.js';

/**Datos del usuario */
import AuthUser from '../../../services/authenticity/auth-service.js';

//Fecha y Hora
import moment from 'moment';

// Componentes estilos
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from 'react-bootstrap/Alert';

//Estilos
import '../../../styles/styleGeneral.css';
import '../../../styles/styleCard.css';

class WritingsTeam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataTeamStudent: [],
            dataWritingTeam: [],
            data: [],
            showWritings: false,
        }
    }

    componentDidMount() {
        if (this.props.groupSelect === undefined) {
            StudentService.getWritingsCollaborative(AuthUser.getCurrentUser().id)
                .then(response => {
                    if (response.data.length !== 0) {
                        this.setState({ dataWritingTeam: response.data, showWritings: true });
                    }
                }).catch(error => {
                    console.log(error.message);
                })
        }
        else {
            /*Obtiene equipo del estudiante correspondiente a un grupo en concreto*/
            StudentService.getTeamStudentGroup(AuthUser.getCurrentUser().id, this.props.groupSelect)
                .then(response => {
                    this.setState({ dataTeamStudent: response });
                    //si el estudiante tiene equipo
                    if (response.length != 0) {
                        /**Obtiene los escritos del equipo del estudiante */
                        StudentService.getWritingsTeam(response[0].idEquipo, this.props.groupSelect)
                            .then(response => {
                                if (response.length !== 0) {
                                    this.setState({ dataWritingTeam: response, showWritings: true });
                                }
                            }).catch(error => {
                                console.log(error.message);
                            })
                    }
                }).catch(error => {
                    console.log(error.message);
                })
        }
    }

    //Devuelve string de escrito finalizado
    showWritingFinalized = (writing) => {
        if (writing.finalizado === 1)
            return "Si"
        else
            return "No"
    }

    //Devuelve string del desafio finalizado
    showChallengeFinalized = (writing) => {
        var dateActual = new Date();
        var dateFin = new Date(writing.fechaFin)//fecha fin del desafio
        //si ya se paso la fecha del desafio, desactivar button
        if (dateActual.getTime() > dateFin.getTime())
            return "Si"
        else
            return "No"
    }

    challengeFinalized = (writing) => {
        var dateActual = new Date();
        var dateFin = new Date(writing.fechaFin)//fecha fin del desafio
        //si ya se paso la fecha del desafio, desactivar button
        if (dateActual.getTime() > dateFin.getTime())
            return true;
        else
            return false;
    }

    /*Dibuja la pagina  */
    render() {
        let formatedDate;
        let { dataWritingTeam, showWritings } = this.state;
        return (
                    <Card className="card-long">
                        <Card.Body>
                            {showWritings ? (
                                <>
                                    <h4>Lista de escritos</h4>
                                    <div className="table-margin">
                                        <Table striped bordered hover >
                                            <thead>
                                                <tr>
                                                    <th>Escrito</th>
                                                    <th>Grupo</th>
                                                    <th>Desafio</th>
                                                    <th>Desafio Finalizado</th>
                                                    <th>Equipo</th>
                                                    <th>Fecha</th>
                                                    <th>Hora</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {dataWritingTeam.map((writing) => (
                                                    <tr key={writing.id} >
                                                        <td>{writing.nombreEscrito}</td>
                                                        <td>{writing.nombreGrupo}</td>
                                                        <td>{writing.nombreDesafio}</td>
                                                        <td>{this.showChallengeFinalized(writing)}</td>
                                                        <td>{writing.nombreEquipo}</td>
                                                        <td >{formatedDate = moment(writing.fecha).format('DD/MM/YYYY')}</td>
                                                        <td >{formatedDate = moment(writing.fecha).format('LT')}</td>

                                                        {this.challengeFinalized(writing) ? (
                                                            <td><Link to={`/student/viewWriting/${this.props.groupSelect}/${writing.idDesafio}/${writing.id}`} ><Button variant="outline-primary" disabled={writing.finalizado === 1 ? false : true}>Ver</Button></Link></td>
                                                        ) : (

                                                            <td ><Link to={`/student/editWritingTeam/${writing.idGrupo}/${writing.idDesafio}/${writing.id}`}><Button variant="outline-primary" disabled={this.challengeFinalized(writing)}>Editar Escrito BETA</Button></Link></td>
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </>
                            ) : (

                                <div className="row-edit">
                                    <Alert variant={"danger"}>
                                        Todavia no dispones de escritos para mostrar
                                    </Alert>
                                </div>
                            )}
                        </Card.Body>
                    </Card>

        );
    }
}

export default WritingsTeam;