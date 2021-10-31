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
}
const SignUp = ({ authenticated }: ILoginProps) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email invalido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: any) => {
      console.log(data)
    axios
      .post("https://burguer-api-leonam.herokuapp.com/register", data)
      .then((response) => {
        toast.success("Sucesso ao criar a conta!");
        return history.push("/login");
      })
      .catch((_) => toast.error("Email ou Senha invalidos"));
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Background>
        <h1>
          Mylly <span>Burguer</span>
        </h1>
        <div>
          <BsFillBagCheckFill />
          <p>
            A vida é como um sanduiche, é preciso recheá-la com os melhores
            ingredientes.
          </p>
        </div>
      </Background>
      <Content>
        <AnimationContainer>
          <h1>
            Mylly <span>Burguer</span>
          </h1>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Cadastro</h2>
            <div>
              <TextField
                label="Nome"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>
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
            <div>
              <TextField
                label="Confirme sua senha"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                type="password"
                {...register("confirmPassword")}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </div>
            <Button type="submit">Cadastro</Button>
            <p>
              Já possui uma conta? Faça seu <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
