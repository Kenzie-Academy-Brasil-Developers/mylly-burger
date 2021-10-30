import { Container } from "./style";
import { ButtonHTMLAttributes } from "react"
interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  children:  string,
  blackSchema?: boolean,
}
const Button = ({children, blackSchema = false, ...rest}: IButton) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;