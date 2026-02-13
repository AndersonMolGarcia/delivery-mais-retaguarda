import { useState } from "react";
import Navbar from "../../components/navbar/index.jsx";


function Senha(props) {

    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");

    const [msg, setMsg] = useState("");

    function SalvarDados() {

    };

    return <div className="container-fluid mt-page">
        <Navbar />

        <div className="row col-lg-6 offset-lg-3">
            
            <div className="col-12 mt-4">
                <h2 className="mt-2">Alterar Senha</h2>
            </div>

            <div col-12 mt-5>
                <div>
                    <div className="mb-4">
                        <label htmlFor="InputSenha" className="form-label">Informe a nova senha</label>
                        <input 
                            type="password"
                            id="InputSenha"
                            className="form-control"
                            aria-describedby="senha"
                            onChange={(e) => setSenha(e.target.value)}
                            value={senha}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="InputSenha2" className="form-label">Confirme a nova senha</label>
                        <input 
                            type="password"
                            id="InputSenha2"
                            className="form-control"
                            aria-describedby="confirmar senha"
                            onChange={(e) => setSenha2(e.target.value)}
                            value={senha2}
                        />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger" onClick={SalvarDados}>Alterar Senha</button>
                    </div>

                    {
                        msg.length > 0 ? 
                            <div className="alert alert-success mt-4 text-center" role="alert">{msg}</div>
                        : <div></div>
                    }
                </div>
            </div>

        </div>

    </div>
};


export default Senha;