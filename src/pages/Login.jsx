import React, { useState } from 'react'
import { styled } from 'styled-components'
import Backgroundimg from '../Components/Backgroundimg'
import Header from '../Components/Header';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';



export default function Login() {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleLogin = async () => {
        console.log(formValues)

        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        }
        catch (err) {
            console.log(err)
        }
    }
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
    })
    function updateForm(event) {
        setFormValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        })
        )
    }

    return (
        <Container>
            <Backgroundimg />
            <div className="content">
                <Header />
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <h3>Login</h3>
                        <div className="container flex column">
                            <input type="email" placeholder='Email Address' name="email" id="email" value={formValues.email} onChange={(e) => updateForm(e)} />
                            <input type="password" placeholder='password' name="password" id="pass" value={formValues.password} onChange={(e) => updateForm(e)} />
                            <button onClick={handleLogin}>Log In</button>

                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display:grid;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;