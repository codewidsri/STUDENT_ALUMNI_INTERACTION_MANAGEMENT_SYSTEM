import { useState } from "react";
import { Button, Container, Form, Toast, ToastBody, ToastContainer } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const navigate=useNavigate()
    const [message, setmessage] = useState('')
    const [show, setshow] = useState(false)
    const [login, setlogin] = useState({
        email: '',
        password: ''
    })
    function Handlechange(Event) {
        setlogin({
            ...login,
            [Event.target.name]: Event.target.value,
        })
    }
    async function Handlesubmit(Event) {
        Event.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}users/login`, login)
            setmessage(response.data.message)
            setshow(true)
            localStorage.setItem('token',response.data.token)
            navigate('/')
        } catch (error) {
            setmessage(error.response?.data.message || error.message)
            setshow(true)
        }
    }
    return (<>
        <ToastContainer position="top-center" className="p-3">
            <Toast bg="info" show={show} onClose={() => setshow(!show)} delay={4000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                    <small>Just now</small>
                </Toast.Header>
                <ToastBody>{message}</ToastBody>
            </Toast>
        </ToastContainer>
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "whitesmoke" }}>
            <Form onSubmit={Handlesubmit} className="border" style={{ boxShadow: '5px 5px 15px #181C14', padding: '25px', borderRadius: '10px', width: '24dvw', height: '53dvh', backgroundColor: '#FEF9F2' }}>
                <h1 className="text-center">LOGIN</h1>
                <Form.Group className="my-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email" name="email" required onChange={Handlechange}></Form.Control>
                </Form.Group>
                <Form.Group className="my-3">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Your Password" name="password" required onChange={Handlechange}></Form.Control>
                </Form.Group>
                <Container className="text-center">
                    <Button variant="primary" type="submit">submit</Button>
                    <p className="text-muted fs-6 my-1">Don't have an account? <Link to={'/register'}>Register</Link> </p>
                </Container>
            </Form>
        </Container>
    </>)
}
export default Login;