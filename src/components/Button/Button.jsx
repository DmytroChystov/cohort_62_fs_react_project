import "./styles.css";

// function Button({ name = "Send" }) {
//   return <button className="button_component">{name}</button>;
//   <Button text="Sign in" />
// }

// export default Button;

// function Button({ text, type = "button" }) {
//   return (
//     <button type={type} className="button_component">
//       {text}
//     </button>
//   );
// }

// export default Button;


function Button({ name = "Send", type = "button", onClick }) {
  return (
    <button className="button_component" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;