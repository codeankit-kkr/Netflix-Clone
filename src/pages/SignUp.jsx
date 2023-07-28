import React, { useState } from 'react'
import { styled } from 'styled-components'
import Backgroundimg from '../Components/Backgroundimg'
import Header from '../Components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';



export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleSignin = async () => {

        try {
            const { email, password } = formValues;
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
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

                <Header login />
                <div className="body flex column a-left j-center">
                    <div className="text flex column">
                        <h1>Unlimited Movies, TV shows and more</h1>
                        <h4>Watch anywhere, Cancel Anytime</h4>
                        <h6>Ready to watch ? Enter you email to create or restart membership</h6>

                    </div>
                    <div className="form">
                        <input type="email" placeholder='Email Address' name="email" id="email" value={formValues.email} onChange={(e) => updateForm(e)} />
                        {showPassword && (<input type="password" placeholder='password' name="password" id="pass" value={formValues.password} onChange={(e) => updateForm(e)} />)}
                        {!showPassword && (<button onClick={() => setShowPassword(true)}>Get Started</button>)}
                    </div>
                    <button className='signup' onClick={handleSignin}>Sign Up</button>
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
    position:relative;
    .content{
        position:absolute;
        top:0px;
        left:0;
        background-color:rgba(0,0,0,0.5);
        height:100vh;
        width:100vw;
        display:grid;
        grid-template-row:15vh 85vh;
        .body{
            gap:1rem;
            .text{
                gap: 1rem;
                font-size: 2rem;

            }
            .form {
                display: grid;
                grid-template-columns: ${({ showPassword }) => showPassword ? "1fr 1fr" : "2fr 1fr"};
                width: 60%;
                input {
                color: black;
                border: none;
                padding: 1.5rem;
                font-size: 1.2rem;
                border: 1px solid black;
                &:focus {
                    outline: none;
                }
                }
                button {
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                font-weight: bolder;
                font-size: 1.05rem;
                }
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
`;