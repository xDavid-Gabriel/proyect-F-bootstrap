import {Navbar, Nav, Container, NavLink, NavDropdown  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../context/authContext";

import imagenes from "../assets/imagenes";


export default function Pagina5Navegacion() {

    const {user, signOut, signIn} = useContext(AuthContext);

    return (
        <Navbar bg="primary" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand >
                    HIDEB
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/pagina2">
                            Productos
                        </Link>
                        <Link className="nav-link" to="/pagina4">
                            Registro
                        </Link>
                        <Link className="nav-link" to="/pagina5">
                            Detalle
                        </Link>
                        <Link className="nav-link" to="/pagina6">
                            Publicar
                        </Link>
                    </Nav>
                    <Nav className="me-auto">
                        {user ? (
                            <NavDropdown
                            title = {
                                <div className="d-inline">
                                    <img 
                                        src={user.photoURL}
                                        className="me-2" 
                                        alt="avatar"
                                        style={{borderRadius: "50%", width:"30px"}}
                                    />
                                    <span>{user.displayName}</span>
                                </div>
                                } 
                            >
                                <NavDropdown.Item onClick={signOut}> Salir </NavDropdown.Item>

                            </NavDropdown>
                        
                        ): (<button className="google__cuenta nav.link" onClick={signIn} style={{color: "white"}, {backgroundColor:"#c9f0ff"}}>
                            <img src={imagenes.img8_google} alt="" />
                            Ingresa con Google
                            {/* // <button className="nav.link btn btn-danger" onClick={signIn} style={{color: "white"}}> Ingresar </button>  */}
                            </button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}