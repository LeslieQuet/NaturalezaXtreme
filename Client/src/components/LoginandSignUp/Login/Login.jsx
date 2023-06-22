import { useEffect, useState } from "react";
import { validation } from "../../Validation/validation";
import { Box, Button, Card, Container, FormControl, FormLabel, Heading, Input, Select, Text} from "@chakra-ui/react";
import { getUsers } from "../../../redux/actions/actionsUsers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import {gapi} from "gapi-script";
const Login =()=> {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const clientID = "843754372901-q1mqkv17teme8tte8od3qcptd8naficb.apps.googleusercontent.com"

    useEffect(() => {
        const start = () => {
          gapi.load("auth2", () => {
            gapi.auth2.init({
              clientId: clientID
            });
          });
        };
      
        start();
      }, []);
    const onSucces = (response) => {
      console.log(response)
      navigate("/")
    }
    const onFailure = () => {
        console.log("Something went wrong")
      }
      
    const handleChange = (event) => {
        event.preventDefault()
        setUserData({ 
            ...userData,
            [event.target.name]: event.target.value 
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        getUsers(userData, dispatch)
        if(userData.email){
            navigate('/')
        } else{
            alert('No hay usuarios con ese mail')
        }
    }
    
 
    return (
        <Container marginTop={10}>
            <Card padding={4} background={`rgba(255, 255, 255, 0.3)`}>
            <Heading fontSize="25px" marginBottom="25px" marginTop="20px">I'M ALREADY PART</Heading>
            <form onSubmit={handleSubmit}>
            <FormControl>
            <FormLabel>Email</FormLabel>
                <Input 
                name="email"
                type="text"
                onChange={handleChange}
                value={userData.email}
                placeholder="ej: Email@gmail.com"
                />
              {errors.email && <Text>{errors.email}</Text>}
           
            <FormLabel>Password</FormLabel>
                <Input 
                name="password"
                type="password"
                onChange={handleChange}
                value={userData.password}
                placeholder="Enter your password"
                />
                 {errors.password && <Text>{errors.password}</Text>}
                <Button backgroundColor= "black" color="white"  marginTop= "15px" type="submit" disabled={errors.email || errors.password || !userData.email || !userData.password}>Log In</Button>
                </FormControl>
            </form>
            <GoogleLogin
             clientId={clientID}
             buttonText="Login"
             onSuccess={onSucces}
             onFailure={onFailure}
             cookiePolicy={'single_host_origin'}
  />
            </Card>
            </Container>
    )
}
export default Login; 