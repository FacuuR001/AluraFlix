import { useState } from "react";
import styled from "styled-components";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from "../Components/Header/Header";
import BackgroundLogin from "../assets/img/BackgroundLogin.jpg"
import { NavLinkPanel, colorBlanco } from "../Components/UI/valiables";

const LoginContent = styled.div`
    height: calc(100vh - 4rem);
    background-image: url(${BackgroundLogin});
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
`

const LoginTitle = styled.h2`
    color: ${colorBlanco};
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 7rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid ${NavLinkPanel};

`

const PanelLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const InputLogin = styled(TextField)`
    width: 90vw;

    .MuiOutlinedInput-root {
      border-color: ${colorBlanco};
    }

    .css-r527s4-MuiFormLabel-root-MuiInputLabel-root {
      color: ${colorBlanco};
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${colorBlanco};
    }
    .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
      border-color: ${colorBlanco};
    }

    .css-1eth2a0-MuiFormLabel-root-MuiInputLabel-root  {
        color: ${colorBlanco};
    }
    .css-13vaet-MuiInputBase-root-MuiOutlinedInput-root {
        color: ${colorBlanco};
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${colorBlanco};
    }

    @media (min-width: 768px) { 
      max-width: 90vh;  
    }

    @media (min-width: 1024px) { 
      max-width: 60vh   
    }
`

const StyleButton = styled(Button)`
  width: 200px;
  align-self: center;
`

const PasswordLogin = styled.div`
  position: relative;
`
const IconVisibility = styled(FaEyeSlash)`
  color: ${colorBlanco};
  font-size: 1.5rem;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`
const IconVisibilityOff = styled(FaEye)`
  color: ${colorBlanco};
  font-size: 1.5rem;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`

const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        
      }
    },
  });

const Login = () => {

  const [eyes, setEyes] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const visibility = () => {
    setEyes(!eyes)
    setPasswordVisible(!passwordVisible)
  }

    return(
        <ThemeProvider theme={theme}>
            <Header/>
            <LoginContent>
                <LoginTitle>Iniciar Sesión</LoginTitle>
                <PanelLogin>
                    <InputLogin 
                      id="outlined-basic" 
                      color="primary" 
                      label="E-mail" 
                      type="email" 
                      variant="outlined" 
                      required
                    />
                    <PasswordLogin>
                      <InputLogin 
                        id="outlined-basic" 
                        color="primary" 
                        label="Contraseña" 
                        type={passwordVisible ? "text" : "password"} 
                        variant="outlined" 
                        required
                      />
                      <div onClick={() => visibility()}>
                      {eyes ? <IconVisibilityOff/> : <IconVisibility/>}
                      </div>
                    </PasswordLogin>
                    <StyleButton variant="contained">Ingresar</StyleButton>
                </PanelLogin>

            </LoginContent>
        </ThemeProvider>
    );
}

export default Login;

