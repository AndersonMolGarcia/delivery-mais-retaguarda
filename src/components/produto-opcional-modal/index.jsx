import Modal from "react-modal";
import CloseIcon from "../../assets/close.png";
import { useEffect, useState } from "react";
import "./style.css";

function ProdutoOpcionalModal(props) {

    const [jsonDados, setJsonDados] = useState([]);

    function AddOpcional(id_opcao) {

    };

    useEffect(() => {
        setJsonDados([
            {
                id_opcao: 1,
                descricao: "Escolha sua batata",
                ind_obrigatorio: "S",
                qtd_max_escolha: 1,
                ind_ativo: "S",
                itens: [
                    {
                        id_item: 10,
                        nome: "Batata média",
                        vl_item: 0
                    },
                    {
                        id_item: 11,
                        nome: "Batata grande",
                        vl_item: 3.99
                    },
                ]
            },
            {
                id_opcao: 2,
                descricao: "Escolha sua bebida",
                ind_obrigatorio: "S",
                qtd_max_escolha: 1,
                ind_ativo: "S",
                itens: [
                    {
                        id_item: 12,
                        nome: "Coca-cola",
                        vl_item: 5.50
                    },
                    {
                        id_item: 13,
                        nome: "Guaraná",
                        vl_item: 4.50
                    },
                    {
                        id_item: 14,
                        nome: "Cerveja",
                        vl_item: 7.00
                    },
                ]
            },
        ]);

    }, []);

    return <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" onClick={props.onRequestClose} className="react-modal-close">
            <img src={CloseIcon} alt="Fechar" />
        </button>

        <div className="m-2 mt-4 d-flex justify-content-between">
            <h4>Opcionais do Produto</h4>
            <button className="btn btn-outline-danger ms-4">
                <i className="fas fa-plus"></i>Adicionar Grupo
            </button>


        </div>
        <div className="scroll">
            <div className="row mt-4 mb-3">
                <div className="col-12 mb-2">
                    {
                        jsonDados.map((op, indexOpcao) => {
                            return <ul className="list-group mb-5" key={op.id_opcao}>
                                <li className="list-group-item produto-opcional p4">

                                    <div className="row">
                                        <div className="col-9">
                                            <input type="text" className="form-control" placeholder="Grupo dos opcionais" id="inputGrupoOpcional" />
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-danger"><i className="fas fa-trash"></i>Excluir</button>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-sm-5">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon3">Qtd. Max</span>
                                                </div>
                                                <input type="text" className="form-control input-small" id="basic-addon3" placeholder="0" />
                                            </div>
                                        </div>

                                        <div className="col-sm-3 mt-2">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    defaultChecked={op.ind_ativo == "S" ? true : false}
                                                    id="defaultCheck1"
                                                />
                                                <label className="form-check-label" htmlFor="defaultCheck1">Ativo</label>
                                            </div>
                                        </div>

                                        <div className="col-sm-3 mt-2">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    defaultChecked={op.ind_obrigatorio == "S" ? true : false}
                                                    id="defaultCheck2"
                                                />
                                                <label className="form-check-label" htmlFor="defaultCheck2">Obrigatório</label>
                                            </div>
                                        </div>
                                    </div>

                                </li>

                                {
                                    op.itens.map((item, indexItem) => {

                                        return <li className="list-group-item pt-3 border-buttom-0" key={item.id_item}>
                                            <div className="row">
                                                <div className="col-1 pe-0">

                                                </div>
                                                <div className="col-8 pe-0">
                                                    <input type="text" className="form-control" placeholder="Nome do opcional" id="inputNomeOpcional" />
                                                </div>
                                                <div className="col-2 pe-0">
                                                    <input type="text" className="form-control" placeholder="Valor" id="inputValor" />
                                                </div>
                                                <div className="col-1 pe-0">
                                                    <button className="btn"><i className="fas fa-trash me-0"></i></button>
                                                </div>
                                            </div>
                                        </li>
                                    })
                                }

                                <div className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="btn btn-outline-danger" onClick={(e) => AddOpcional(op.id_opcao)}>
                                                <i className="fas fa-plus"></i>Adicionar Opção
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </ul>
                        })
                    }
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


export default ProdutoOpcionalModal;