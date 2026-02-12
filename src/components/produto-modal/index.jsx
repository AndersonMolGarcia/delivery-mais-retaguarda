import Modal from "react-modal";
import CloseIcon from '../../assets/close.png';
import { useState } from "react";
import './style.css';

function ProdutoModal(props) {

    const [id_categoria, setIdCategoria] = useState(props.id_categoria);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [url_foto, setUrlFoto] = useState("");
    const [vl_produto, setVlProduto] = useState(0);
    const [vl_promocao, setVlPromocao] = useState(0);
    const [ind_ativo, setIndAtivo] = useState(false);
    



    function HandleCategoria(e) {
        setIdCategoria(e.target.value)
    }

    return <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" onClick={props.onRequestClose} className="react-modal-close">
            <img src={CloseIcon} alt="Fechar" />
        </button>

        <h4>Produto</h4>

        <div className="row">
            <div className="col-12 mb-2">
                <div className="form-control form-produto  mb-2">
                    <select name="categoria" id="categoria" onChange={HandleCategoria}>
                        {
                            props.categorias.map(c => {
                                return c.id_categoria === props.id_categoria ?
                                    <option value={c.id_categoria} selected>{c.categoria}</option>
                                    : <option value={c.id_categoria}>{c.categoria}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-floating mb-2">
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        id="nome"
                        placeholder="Nome"
                    />
                    <label htmlFor="nome">Nome Produto</label>
                </div>
                <div className="form-floating mb-2">
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao}
                        id="descricao"
                        placeholder="Descrição Produto"
                    />
                    <label htmlFor="nome">Descrição Produto</label>
                </div>
                <div className="form-floating mb-2">
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => setUrlFoto(e.target.value)}
                        value={url_foto}
                        id="url_foto"
                        placeholder="URL da Foto"
                    />
                    <label htmlFor="url_foto">URL da Foto</label>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-floating mb-2">
                            <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setVlProduto(e.target.value)}
                                value={new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(vl_produto)}
                                id="floatingInputVlProduto"
                                placeholder="Valor Produto"
                            />
                            <label htmlFor="floatingInputVlProduto">Valor Produto</label>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="form-floating mb-2">
                            <input
                                className="form-control"
                                type="text"
                                onChange={(e) => setVlPromocao(e.target.value)}
                                value={new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(vl_promocao)}
                                id="floatingInputVlPromocao"
                                placeholder="Valor Promoção"
                            />
                            <label htmlFor="floatingInputVlPromocao">Valor Promoção</label>
                        </div>

                    </div>

                </div>

                <div className="row">
                    <div className="col-12 mb-2 mt-2">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                onClick={(e) => setIndAtivo(e.target.checked)}
                                id="defaultCheckStatus"
                                defaultChecked={ind_ativo}
                            />
                            <label className="form-check-label" htmlFor="defaultCheckStatus">Ativo</label>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <div className="row">
            <div className="col-12 mt-3 d-flex justify-content-end">
                <div>
                    <button className="btn btn-danger ms-4">Salvar</button>
                    <button className="btn btn-outline-danger ms-2" onClick={props.onRequestClose}>Cancelar</button>

                </div>
            </div>
        </div>

    </Modal>
};


export default ProdutoModal;