import './App.css';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
function App() {

   const responseGoogle = (response) => {
      console.log(response.profileObj);
   }
   const responseFacebook = (response) => {
      console.log(response);
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








         {/* facebook login  */}

         <FacebookLogin
            appId="198912365447335"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook} />

);





      </div>
   );
}

export default App;
