import React,{Component, useState} from "react";
import StudentService from '../../../services/student/student-service.js';
import AuthUser from '../../../services/authenticity/auth-service.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import FormControl from 'react-bootstrap/FormControl';
import Challenges from './Challenges.js';
import Writings from './Writings.js';
import '../../../styles/styleGeneral.css';
import Card from 'react-bootstrap/Card';
import Icon from '@material-ui/core/Icon';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      { <Icon><ExpandMoreRoundedIcon></ExpandMoreRoundedIcon></Icon>}
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value) || child.props.children.toUpperCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );


class GroupStudent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
             dataGroup: [],
             currentUser: {id: ""},
             groupSelect:"",
        };
    }
  
    componentDidMount() {

        const dataUser = AuthUser.getCurrentUser();
        this.setState({currentUser:dataUser.id});

        /**Obtiene todos los grupos del estudiante */
        StudentService.getGroups(dataUser.id).then( response => {

             this.setState({dataGroup:response});
         })
     }

     handleSelect(groupId){
      this.setState({groupSelect:groupId});
    }


     render() {
    
        const {dataGroup, currentUser,groupSelect}= this.state;
         return (
            <div className="container">
               <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
               <Card className="card-long">
                 <Card.Body>
                 <div className="row">
                    <Dropdown>
                          <DropdownToggle as={CustomToggle} id="dropdown-custom-components">
                              Selecciona grupo
                          </DropdownToggle>
                          <DropdownMenu as={CustomMenu}>
                              {dataGroup.map((row)=>(
                                  <DropdownItem eventKey={row.idGrupo} onClick= {() => this.handleSelect(row.idGrupo)}>{row.nombre}</DropdownItem>
                              ))}  
                          </DropdownMenu>
                    </Dropdown>
                    </div>
                    <div className="row">
                     <Challenges key={groupSelect} groupSelect={groupSelect} />
                    </div>
                </Card.Body>
              </Card>     
            </div>

         );
     }


}

export default GroupStudent;