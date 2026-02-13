import { useState } from "react";
import Navbar from "../../components/navbar/index.jsx";


function Perfil(props) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const [msg, setMsg] = useState("");

    function SalvarDados() {

    };

    return <div className="container-fluid mt-page">
        <Navbar />

        <div className="row col-lg-6 offset-lg-3">
            
            <div className="col-12 mt-4">
                <h2 className="mt-2">Meu Perfil</h2>
            </div>

            <div col-12 mt-5>
                <div>
                    <div className="mb-4">
                        <label htmlFor="InputNome" className="form-label">Nome</label>
                        <input 
                            type="text"
                            id="InputNome"
                            className="form-control"
                            aria-describedby="nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="InputEmail" className="form-label">E-mail</label>
                        <input 
                            type="email"
                            id="InputEmail"
                            className="form-control"
                            aria-describedby="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="d-flex justify-content-end">
                        <button className="btn btn-danger" onClick={SalvarDados}>Salvar Dados</button>
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


export default Perfil;