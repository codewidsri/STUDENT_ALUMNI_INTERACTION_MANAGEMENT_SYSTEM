import axios from "axios";
import { useState } from "react";
import { Button, Container, Form, Toast, ToastBody, ToastContainer } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const [show, setshow] = useState(false)
    const [message, setmessage] = useState('')
    const [register, setregister] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })
    function Handlechange(Event) {
        setregister({
            ...register,
            [Event.target.name]: Event.target.value,
        })
    }
    async function Handlesubmit(Event) {
        Event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}users/register`, register);
            setmessage(response.data.message);
            setshow(true)
            setTimeout(() => {
                navigate('/login')
            }, 3000);
        } catch (error) {
            setmessage(error.response?.data.message || error.message);
            setshow(true)
        }
    }
    return (<>
        <ToastContainer position="top-center" className="p-3">
            <Toast show={show} bg="info" onClose={() => setshow(!show)} className="text-white" delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                    <small>Just now</small>
                </Toast.Header>
                <ToastBody className="text-center">
                    {message}
                </ToastBody>
            </Toast>
        </ToastContainer>
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "whitesmoke"  }}>
            <Form onSubmit={Handlesubmit} className="border" style={{ boxShadow: '5px 5px 15px #181C14', padding: '25px', borderRadius: '10px', width: '27dvw', height: '77dvh',backgroundColor: '#FEF9F2' }}>
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
                <Form.Group className="my-3">
                    <Form.Label className="fw-bold">Select your Role</Form.Label>
                    <Form.Select name="role" required onChange={Handlechange}>
                        <option disabled selected className="fw-bold">Select Your Role</option>
                        <option value={'alumni'}>Alumni</option>
                        <option value={'student'}>Student</option>
                    </Form.Select>
                </Form.Group>
                <Container className="text-center">
                    <Button variant="primary" type="submit">Register</Button>
                    <p className="text-muted fs-6">Already have an account? <Link to={'/login'}>Login</Link> </p>
                </Container>
            </Form>
        </Container>
    </>)
}
export default Register;