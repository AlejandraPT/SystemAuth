import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();

  console.log("this is your token", store.token);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await actions.login(email, password);
    console.log(result);
    if (result) {
      navigate("/private ");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="text-center col-12 mb-3 mt-5 titular">
      <h1>Hola socio! Bienvenido de nuevo ;D</h1>
      <div className="logueo position-absolute top-50 start-50 translate-middle">
        <div className="col-12 text-center mt-5">
          <div>
            <div className="row">
              <div className="container_form">
                <form onSubmit={handleSubmit} className="form" id="registration">
                  <div className="col-12 text-center mt-2 mb-3">
                    <input
                      className="input-reg mt-1 relleno"
                      name="email"
                      value={email}
                      placeholder="Email"
                      autoComplete="off"
                      type="text"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="col-12 text-center mb-5">
                    <input
                      className="input-reg relleno"
                      name="Password"
                      value={password}
                      placeholder="contraseña"
                      autoComplete="off"
                      type="password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    {error ? <p className="error">{error}</p> : ""}
                  </div>
                  <div className="col-12 text-center mb-3">
                    <button className="botonI">
                      <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                      </span>
                      <span class="button-text">Iniciar Sesion</span>
                      <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
