import Navbar from "../../components/navbar/index.jsx";
import "./style.css";


function Estabelecimento(props) {

    return <div className="container fluid mt-page">
        <Navbar />

        <div className="row col-lg-6 offset-lg-3 form-estabelecimento">

            <div className="col-12 mt-4">
                <h2 className="mt-2">Dados do Estabelecimento</h2>
            </div>

            <div className="col-12 mt-4">
                <div className="mb-4">
                    <label htmlFor="InputNome">Nome do estabelecimento</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputNome"
                        aria-describedby="nome"
                    />
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <label htmlFor="cupom">Cupom Desconto</label>
                <div className="form-control mb-2">
                    <select name="cupom" id="cupom">
                        <option value="0000000">10% off</option>
                        <option value="0000001">Entrega Grátis</option>
                        <option value="0000002">Nenhum</option>
                    </select>
                </div>
            </div>

            <div className="col-md-4">
                <div className="mb-4">
                    <label htmlFor="InputVlMin">Vl. Min. Pedido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputVlMin"
                        aria-describedby="valor mínimo"
                    />
                </div>
            </div>

            <div className="col-md-4">
                <div className="mb-4">
                    <label htmlFor="InputVlTaxa">Vl. Taxa Entrega</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputVlTaxa"
                        aria-describedby="valor taxa entrega"
                    />
                </div>
            </div>

            <div className="col-md-8">
                <div className="mb-4">
                    <label htmlFor="InputVlEnd">Endereço</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputVlEnd"
                        aria-describedby="endereço"
                    />
                </div>
            </div>

            <div className="col-md-4">
                <div className="mb-4">
                    <label htmlFor="InputCompl">Compl.</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputCompl"
                        aria-describedby="complemento"
                    />
                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="InputBairro">Bairro</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputBairro"
                        aria-describedby="bairro"
                    />
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <label htmlFor="cidades">Cidade</label>
                <div className="form-control mb-2">
                    <select name="cidades" id="cidades">
                        <option value="0000000">Cidade</option>
                        <option value="0000001">São Paulo - SP</option>
                        <option value="0000002">Rio de Janeiro - RJ</option>
                    </select>
                </div>
            </div>

            <div className="col-md-6">
                <div className="mb-4">
                    <label htmlFor="InputCep">CEP</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputCep"
                        aria-describedby="cep"
                    />
                </div>
            </div>

            <div className="col-md-6 mb-4">
                <label htmlFor="categorias">Categoria</label>
                <div className="form-control mb-2">
                    <select name="categorias" id="categorias">
                        <option value="0000000">Pizza</option>
                        <option value="0000001">Saudável</option>
                        <option value="0000002">Lanche</option>
                    </select>
                </div>
            </div>

            <div className="col-12">
                <div className="mb-4">
                    <label htmlFor="InputUrlFoto">URL Foto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputUrlFoto"
                        aria-describedby="URL da Foto do Estabelecimento"
                    />
                </div>
            </div>

            <div className="col-12">
                <div className="mb-4">
                    <label htmlFor="InputUrlLogo">URL Logotipo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputUrlLogo"
                        aria-describedby="URL do Logotipo do Estabelecimento"
                    />
                </div>
            </div>

            <div className="col-12 mb-5">
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-danger mt-3">Salvar Dados</button>
                </div>
            </div>

        </div>
    </div>
};


export default Estabelecimento;