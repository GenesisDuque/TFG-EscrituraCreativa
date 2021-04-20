/*
*  Name_file :ViewTeamScripts.js
*  Description: Componente que contiene la lista de escritos del equipo
*/
import React, { Component } from 'react';
import TeacherService from "../../../services/teacher/teacherService.js";
import '../../../styles/ScriptList.css';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class GroupTeacher extends Component {

     constructor(props) {
        super(props);

        this.state = {
            data: [],
            filteredData:[],
            searchKey: '',
            searchType: 'nombre'
    
        };

     }
    

    /*Se hacen peticiones al servidor para que me devuelva la tabla desafios, me muestra todos los desafios del grupo seleccioando 
    por el profesor*/
    peticionGet = () => {
        TeacherService.getScriptsByTeam(this.props.idTeam).then(response => {
            console.log(response);//muestra consola navegador
            this.setState({ data: response });
            console.log(response);
            this.setState({ filteredData: response });
        }).catch(error => {
            console.log(error.message);
        })
    }

    //Filtra los datos de los escritos buscados para solo buscar en la base de datos una vez
    filterData = () =>{
        let auxArray = [];
        this.state.filteredData = [];
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.searchType == "titulo")
            {
                if(new RegExp( this.state.searchKey, 'i'  ).test(this.state.data[i].titulo))
                {
                    auxArray.push(this.state.data[i]);
                }
            }
            else
            {
                if((new RegExp(this.state.searchKey, 'i' ).test(this.state.data[i].nombre)) )
                {
                    auxArray.push(this.state.data[i]);
                }
            }
        }
        this.setState({ filteredData: auxArray });
    }

    /*Lo que escribamos en el input lo guarda en el state async para que lo veamos en tiempo real */
    handleChangeSearch = async e => {
        await this.setState({
                [e.target.name]: e.target.value
        });
        this.filterData();
    }

    /*Lo que escribamos en el input lo guarda en el state async para que lo veamos en tiempo real */
    handleChangeSearchType = async e => {
        await this.setState({
                [e.target.name]: e.target.value
        });
        this.filterData();
    }


    /*Si vuelvo a la pagina de login, comprueba si el usuario ya inicio sesion anteriomente
   si es el caso lo redirige a la home segun su rol*/
    componentDidMount() {
        this.peticionGet();
    }

    /*Dibuja la pagina  */
    render() {
        console.log("EL ESTADO DEL EQUIPO ES");
        console.log(this.state);
        let cartel =<div> </div>;
        let tabla =
        <div className = "scriptList">
        
            {this.state.filteredData.map(script => {
                return (   
                     <div className ="scriptCardContainer">
                        <Link to={`/teacher/editWriting/${script.idGrupo}/${script.idDesafio}/${script.id}/${script.idEstudiante}`}>
                             <div className ="scriptCard">
                                 <h6>Nombre</h6>
                                 <h5>{script.nombre}</h5>
                                 <h6>Desafío</h6>
                                 <h5>{script.titulo}</h5>
                         </div>
                         </Link>
                 </div>

                
                )
            })}

    </div>
    ;
        if(this.state.filteredData.length === 0)
        {
            cartel = <nav>
                        <h2>No hay resultados para la búsqueda realizada.</h2>
                    </nav>;
            tabla = <div></div>;
        }


        return (
            <>
                <h1>Escritos del equipo:</h1>

                <div>
                
                <h1></h1>
                        <label>Buscar escrito: </label>
                        <br />
                        <input type="text" name="searchKey" onChange={this.handleChangeSearch} />
                        <br />
                        <label for="searchType">Escoja cómo buscar:</label>
                        <select name="searchType" id="searchType" onChange={this.handleChangeSearchType}>
                            <option value="nombre">Nombre</option>
                            <option value="titulo">Título</option>
                        </select> 
                        <h2> Resultados de buscar escritos con {this.state.searchType} similar a {this.state.searchKey}:</h2>
                </div>
                <div>
                
                    {cartel}
                

                    {tabla}


                </div>
            </>
        );
    }

}

export default GroupTeacher;