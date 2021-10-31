import React from "react";
import { TextField } from "@material-ui/core";
import { Container, Background, Content, AnimationContainer } from "./style";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";
import { toast } from "react-hot-toast";
import axios from "axios";
import { BsFillBagCheckFill } from "react-icons/bs";

interface ILoginProps {
    authenticated: boolean;
    setAuthenticated: any;
}
const Login = ({authenticated, setAuthenticated}: ILoginProps) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
    axios
      .post("https://burguer-api-leonam.herokuapp.com/login", data)
      .then((response) => {
        const { accessToken } = response.data;
        localStorage.setItem("@Hamburguer:token", JSON.stringify(accessToken));
        setAuthenticated(true)
        return history.push("/");
      })
      .catch((_) => toast.error("Email ou Senha invalidos"));
  };

    if (authenticated) {
      return <Redirect to="/" />;
    }
  return (
    <Container>
      <Content>
        <AnimationContainer>
        <h1>
          Mylly <span>Burguer</span>
        </h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Login</h2>
            <div>
              <TextField
                label="E-mail"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <TextField
                label="Senha"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <Button type="submit">Login</Button>
            <p>
              Crie sua conta para saborear muitas delicias e matar sua fome!{" "}
              <br />{" "}
              <span>
                <Link to="/signup">Cadastro</Link>
              </span>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background>
        <h1>
          Mylly <span>Burguer</span>
        </h1>
        <div>
        <BsFillBagCheckFill/> 
          <p>
            A vida é como um sanduiche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </div>
      </Background>
    </Container>
  );
};
export default Login;
