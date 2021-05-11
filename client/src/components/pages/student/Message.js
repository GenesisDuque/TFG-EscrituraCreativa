/*
*  Name_file: Messenger.js
*  Description: Pagina de equipos del estudiante, contiene la vista de todos los equipos 
*  que tiene el estudiante
*    
*/

import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**Datos del usuario */
import AuthUser from '../../../services/authenticity/auth-service.js';

/*Importacion del css*/
import '../../../styles/styleGeneral.css';
import '../../../styles/styleCard.css';
// import '../../../styles/Student.css';

import Modal from 'react-bootstrap/Modal';

// import {
//     Table,
//     Container,
//     Modal,
//     ModalHeader,
//     ModalBody,
//     FormGroup,
//     ModalFooter,
// } from "reactstrap";

//Componentes css
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from 'react-bootstrap/Button';

import moment from 'moment';

/**Servicios del estudiante */
import StudentService from '../../../services/student/student-service.js';

class Message extends Component {

    constructor(props) {
        super(props);
        //const dataUser = AuthUser.getCurrentUser();
        this.state = {
            message: '',
            team: '',//equipo 
            showButtons: false,
            modalAcceptJoinTeam: false,
            modalRefuseJoinTeam: false,
            modalAnswerJoinTeam: false,
            // dataMessages: [],
            // dataTeamStudent: []
        }
    }

    componentDidMount() {
        //Obtiene el mensaje 
        StudentService.getMessage(this.props.match.params.idMessage)
            .then(response => {

                var aux = false;
                if (response[0].tipo === 0 || response[0].tipo === 2) {
                    aux = true;
                }
                this.setState({ message: response[0], showButtons: aux });

                //Obtiene el equipo del creador del equipo
                StudentService.getTeam(this.state.message.idCreador)
                    .then(response => {
                        this.setState({ team: response[0] });
                    }).catch(error => {
                        console.log(error.message);
                    })
            }).catch(error => {
                console.log(error.message);
            })
    }


    askAcceptRequest = () => {
        debugger;
        if(this.state.message.tipo===2){
            this.acceptRequest();
        }
        else if(this.state.message.tipo===0){
            this.showModalAnswerJoinTeam();
        }

    }

    acceptRequest = () => {
        //si el mensaje es una solicitud de unirse a un equipo
        if (this.state.message.tipo === 2) {
            var idMessage=this.state.message.id;
            var idGroup=this.state.message.idGrupo;
            var idIssuer=this.state.message.idEmisor;
            var idReceiver=this.state.message.idReceptor;
            var idCreatorTeam= this.state.message.idCreador;
            var mensaje=this.state.message.mensaje;
            var date=this.state.message.fecha;
            var active=this.state.message.activo;
            let dataMessage = [{ id: idMessage, idGrupo:idGroup, idEmisor:idIssuer,idReceptor:idReceiver,idCreador:idCreatorTeam,mensaje:mensaje,tipo:0,fecha:date,activo:active }];
            this.setState({message: dataMessage[0]});
            var idMember;
            //Obtengo el id del futuro miembro del equipo, identificar si el idEmisor/idReceptor
            //es el futuro miembro
            if (dataMessage[0].idCreador === dataMessage[0].idEmisor) {
                idMember = dataMessage[0].idReceptor;
            }
            else {
                idMember = dataMessage[0].idEmisor;
            }
            StudentService.joinTeam(this.state.team.id, idMember)
                .then(response => {
                    this.showModalAcceptJoinTeam();
                    //modifico el tipo de mensaje 
                    StudentService.editMessage(dataMessage[0].id)
                        .then(response => {
                            
                        }).catch(error => {
                            console.log(error.message);
                        })
                }).catch(error => {
                    console.log(error.message);
                })
        }
        else {
            this.showModalAnswerJoinTeam();
        }
    }

    refuseRequest = () => {
        if (this.state.message.tipo === 2) {
            this.showModalRefuseJoinTeam();
            StudentService.editMessage(this.state.message.id)
                .then(response => {
                }).catch(error => {
                    console.log(error.message);
                })
        }
        else {
            this.showModalAnswerJoinTeam();
        }
    }


    showModalAcceptJoinTeam = () => {
        this.setState({
            //   form: dato,
            modalAcceptJoinTeam: true,
        });
        setTimeout(
            () => this.setState({ modalAcceptJoinTeam: false }),
            2000
        );
    };

    showModalAnswerJoinTeam = () => {
        debugger;
        this.setState({
            //   form: dato,
            modalAnswerJoinTeam: true,
        });
        setTimeout(
            () => this.setState({ modalAnswerJoinTeam: false }),
            2000
        );
    };

    showModalRefuseJoinTeam = () => {
        this.setState({
            modalRefuseJoinTeam: true,
        });
        setTimeout(
            () => this.setState({ modalRefuseJoinTeam: false }),
            2000
        );
    };

    /*Dibuja la pagina  */
    render() {
        const { message, showButtons } = this.state;
        // let formatedDate;
        return (
            <>
                <div className="container">
                    <Card className="card-edit">
                        <Card.Body >
                            <div className="message-card">
                                {showButtons ? (
                                    <div class="message-inputs">
                                        <div>{this.state.message.mensaje}</div>
                                        <div className="form-select">
                                            <Button onClick={() => this.askAcceptRequest()} > Aceptar</Button>
                                        </div>
                                        <div className="form-select">
                                            <Button onClick={() => this.refuseRequest()}> Rechazar</Button>
                                        </div>
                                    </div>

                                ) : (
                                    <div class="message-inputs">
                                        <label className='message-label' > Mensaje </label>
                                        <td><textarea name="mensaje" rows="10" cols="70" value={this.state.message.mensaje} readOnly={true} style={{ resize: "none" }} ></textarea></td>

                                    </div>
                                )}
                                {/* <div class="message-inputs">
                                 <label className='message-label' > Mensaje </label>
                                        <td><textarea name="mensaje" rows="10" cols="70" value={this.state.message.mensaje} readOnly={true} style={{ resize: "none" }} ></textarea></td>

                                 </div> */}

                                <div className="form-select">
                                    <Button onClick={() => window.location.href = "/student/messenger"}>Volver</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    {/* <td><Link to={`/teacher/createChallenge/${this.props.groupSelect}`}><button >Crear Desafio</button></Link></td> */}
                </div>

                <Modal show={this.state.modalAcceptJoinTeam}>
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Has aceptado la solicitud</p>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.modalRefuseJoinTeam}>
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Has rechazado la solicitud</p>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.modalAnswerJoinTeam}>
                    <Modal.Header>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Ya has respondido a la solicitud</p>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default Message;