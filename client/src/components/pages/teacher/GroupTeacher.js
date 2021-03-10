/*
*  Name_file :GroupTeacher.js
*  Description: Pagina del grupo seleccionado por profesor, contiene la vista de los desafios  
*  que tiene el grupo seleccionado por el profesor  
*/
import React, { Component, useState } from 'react';
import TeacherService from '../../../services/teacher/teacherService.js';
import AuthUser from '../../../services/authenticity/auth-service.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownItem from 'react-bootstrap/DropdownItem';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import FormControl from 'react-bootstrap/FormControl';
import Challenges from './Challenges.js';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a href="" ref={ref} onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
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


class GroupTeacher extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataGroup: [],
      currentUser: { id: "" },
      groupSelect: "",
    };
  }

  /**Carga la pagina al principio */
  componentDidMount() {
    const dataUser = AuthUser.getCurrentUser();
    this.setState({ currentUser: dataUser });
    
    
    TeacherService.getGroups(dataUser.id).then(response => {
      this.setState({ dataGroup: response });
    })
  }

  handleSelect(groupId) {
    this.setState({ groupSelect: groupId });
  }

  /*Dibuja la pagina  */
  render() {

    const { dataGroup, groupSelect } = this.state;

    return (
      <div>
        <Dropdown>
          <DropdownToggle as={CustomToggle} id="dropdown-custom-components">
            Selecciona grupo
          </DropdownToggle>
          <DropdownMenu as={CustomMenu}>
            {dataGroup.map((row) => (
              <DropdownItem eventKey={row.id} onClick={() => this.handleSelect(row.id)}>{row.nombre}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        
        <Challenges key={groupSelect} groupSelect={groupSelect} />
      </div>
    );
  }

}

export default GroupTeacher;