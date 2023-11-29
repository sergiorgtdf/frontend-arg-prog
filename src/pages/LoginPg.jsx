import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { useAuth } from "../context/authContext";

const LoginPg = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signin, isAuth, errorBack } = useAuth();

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) navigate("/task");
    }, [isAuth]);

    const onSubmit = handleSubmit(async (value) => {
        signin(value);
    });

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="bg-zinc-900 max-w-md p-8 rounded-md ">
                    <form className="" action="">
                        <h1 className="text-3xl text-center font-semibold mb-5 text-white">
                            Login
                        </h1>

                        {errorBack.map((err, i) => (
                            <div
                                key={i}
                                className="ErrLogin font-semibold text-red-600">
                                {err}
                            </div>
                        ))}

                        <input
                            className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-300 text-xs">
                                toast.error({"Email is required"}); Email is
                                required
                            </p>
                        )}
                        <input
                            className="w-full bg-zinc-700 text-white px4  py-2 rounded-md my-2"
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />

                        {errors.password && (
                            <p className="text-red-300 text-xs">
                                toast.error({"Password is required"}); Password
                                is required
                            </p>
                        )}
                        <button
                            onClick={onSubmit}
                            className="h-10 px-6  font-semibold rounded-md bg-green-500 text-white my-3 align-content">
                            Ingresar
                        </button>
                    </form>
                    <p className="flex-justify-between mt-5">
                        <Link
                            to="/register"
                            className="px-3 font-semibold rounded-md  text-white">
                            No tengo una cuenta
                        </Link>
                    </p>
                </div>
                <Toaster position="top-center" />
            </div>
            <Toaster />
        </>
    );
};

export default LoginPg;
