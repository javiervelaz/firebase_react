import react from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebaseApp();
    const [usuario,setUser] = useState('ddd');
   
    const submit =  async () =>{
    const auth = getAuth();
    //console.log(auth)
        
        await createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            setUser(user.email);
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
        //
    }
    return ( 
           <div>
               {usuario}
                      
           <div>
                
            <label htmlFor="email">Correo electronivo</label>
            <input type="email" id="email" onChange={(e)=> setEmail(e.target.value) }/>
            <label htmlFor="password"></label>
            <input type="password" id="password" onChange={(e)=> setPassword(e.target.value) } />
            <button onClick={submit}>Inicio session </button>
        </div>
        </div> 
     );
}
 
export default Auth;