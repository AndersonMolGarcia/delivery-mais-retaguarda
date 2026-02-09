import './style.css';

function Categoria(props) {
    return <li className="list-group-item produto-categoria">
        <div className="m-2, d-flex justify-content-between align-items-center">
            <b>{props.nome}</b>

            <div className="dropdown">
                <a href="#" className="btn btn-outline-secondary" role="button" id={`dropdownMenuLink${props.id_categoria}`} data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="ps-2"> <i className="fas fa-ellipsis-v"></i> </div>
                </a>
                <ul className="dropdown-menu pointer-cursor" aria-labelledby={`dropdownMenuLink${props.id_categoria}`} >
                    <li><a className="dropdown-item ">Editar Categoria</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item">Excluir Categoria</a></li>
                </ul>
            </div>

        </div>        
    </li>
};


export default Categoria;