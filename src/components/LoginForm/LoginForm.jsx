import Input from "../Input/Input";
import Button from "../Button/Button";
import "./styles.css";

function LoginForm({}) {
//   const login = () => {
//     console.log("Login successfull");
//   };

const Login =(event) => {
  event.preventDefault();
  console.log("Login successful");
};
  return (
   
    <div className="login_form_wrapper">
      <h2 className="login_form_title">Login form</h2>

      <form onSubmit={login} className="login_form_wrapper">
      {/* <form className="login_form"> */}
        <Input
          name="Email"
          type="Email"
          label="Email"
          placeholder="Enter your Email"
        />
        <Input
          name="Password"
          type="Password"
          label="Password"
          placeholder="Enter your Password"
        />
              {/* <Button text="Login" /> */}
              <button onClick={login} id="clickme_button" type="button">
        Click me
      </button>
      </form>
    </div>
  );
}
export default LoginForm;
