import './App.css';
import { GoogleLogin } from 'react-google-login';
function App() {

   const responseGoogle = (response) => {
      console.log(response.profileObj);
   }
   return (

      <div className="App">
         <GoogleLogin
            clientId="274074637494-s2fbta7752oii5904is867d05eiff735.apps.googleusercontent.com"
            buttonText="Sign Up With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
         />
      </div>
   );
}

export default App;
