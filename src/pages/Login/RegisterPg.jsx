import { useForm } from "react-hook-form";
import { registerRequest } from "../../api/auth";

//  import { useAuth } from "../../context/authContext";

export const RegisterPg = () => {
    const { register, handleSubmit } = useForm();

    // const { signup } = useAuth();

    const onSubmit = handleSubmit(async (value) => {
        // conexion al servidor y elvia al usuario
        console.log(value);
        const respuesta = await registerRequest(value);
        console.log(respuesta);
    });

    return (
        <div className="box">
            <div id="logo" className="logo-Pg" title="task">
                <img src="../../img/task.svg" height="50px" alt="" />
            </div>
            <h2>Register</h2>
            <p>Registrese para poder acceder</p>
            <form>
                <div className="inputBox">
                    <input
                        type="text"
                        name="username"
                        required=""
                        placeholder=" "
                        {...register("username", { required: true })}
                    />
                    <label>Username </label>
                </div>

                <div className="inputBox">
                    <input
                        type="email"
                        name="email"
                        required=""
                        placeholder=" "
                        {...register("email", { required: true })}
                    />
                    <label>E-mail </label>
                </div>
                <div className="inputBox">
                    <input
                        type="password"
                        name="pasword"
                        required=""
                        placeholder=" "
                        {...register("password", { required: true })}
                    />
                    <label>Password</label>
                </div>

                <div className="forgot">
                    <button type="button">
                        <a to="/LoginPg">I Have an Account</a>
                    </button>
                </div>
                <button onClick={onSubmit} className="Boton-enviar">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default RegisterPg;
