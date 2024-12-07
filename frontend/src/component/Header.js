import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    return(<>
        <Navbar bg="dark"className="p-3">
            <Container>
                <Navbar.Brand className="text-success">Student Alumni Interaction</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Link to={'/about'} className="mx-3 text-decoration-none">About</Link>
                    <Link to={'/gallery'} className="mx-3 text-decoration-none">Gallery</Link>
                    <Link to={'/alumni'} className="mx-3 text-decoration-none">Alumni</Link>
                    <Link to={'/blog'} className="mx-3 text-decoration-none">Blog</Link>
                    <Link to={'/login'} className="mx-3 text-decoration-none">Login / Register</Link>
                </Nav>
            </Container>
        </Navbar>
    </>)
}
export default Header;