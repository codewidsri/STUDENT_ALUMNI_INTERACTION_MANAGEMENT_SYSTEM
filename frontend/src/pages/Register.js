import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { Link } from 'react-router-dom'
function Register() {
    const [register, setregister] = useState({
        name: '',
        email: '',
        password: ''
    })
    function Handlechange(Event) {
        setregister({
            ...register,
            [Event.target.name]: Event.target.value,
        })
    }
    function Handlesubmit(Event) {
        Event.preventDefault();
        console.log(register)
    }
    return (<>
        <Container className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: '#FEF9F2' }}>
            <Form onSubmit={Handlesubmit} className="border" style={{ boxShadow: '5px 5px 25px #181C14', padding: '20px', borderRadius: '10px', width: '24dvw', height: '65dvh' }}>
            <h3 className="text-center">REGISTER</h3>
                <Form.Group className="my-3">
                    <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name="name" required onChange={Handlechange}></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" name="email" required onChange={Handlechange}></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" name="password" required onChange={Handlechange}></Form.Control>
                </Form.Group>
                <Container className="text-center">
                    <Button variant="primary" type="submit">Register</Button>
                    <p className="text-muted fs-6 my-1">Already have an account? <Link to={'/login'}>Login</Link> </p>
                </Container>
            </Form>
        </Container>
    </>)
}
export default Register;