import Modal from "react-modal/lib/components/Modal";
import closeIcon from "../../assets/close.png";


function CategoriaModal(props) {

    return <Modal 
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" onClick={props.onRequestClose} className="react-modal-close">
            <img src={closeIcon} alt="Fechar" />
        </button>

        <h4>Categoria</h4>

        <div className="row">
            <div className="col-12 mt-4 mb-4">
                <div className="form-floating">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="floatingInputCategoria" 
                        placeholder="Categoria"
                    />
                    <label htmlFor="floatingInputCategoria">Categoria</label>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mt-3 d-flex justify-content-end">
                    <button className="btn btn-danger ms-4">Salvar</button>
                    <button className="btn btn-outline-danger ms-2" onClick={props.onRequestClose}>Cancelar</button>
                </div>
            </div>
        </div>

    </Modal>
};


export default CategoriaModal;