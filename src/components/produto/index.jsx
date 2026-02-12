import './style.css';


function Produto(props) {

    return <>

        <li className='list-group-item'>
            <div className='col-12 mt-3 mb-3'>
                <div className='row d-flex align-items-center'>
                    <div className='col-8'>.
                        <div className='dropdown d-inline me-3'>
                            <a className='btn btn-outline-secondary'
                                href="#" role='button'
                                id={`dropdownMenuLinks${props.id_produto}`}
                                data-bs-toggle='dropdown'
                                aria-expanded="false"
                            >
                                <div className='ps-2'><i className='fas fa-ellipsis-v'></i></div>
                            </a>
                            <ul className='dropdown-menu pointer-cursor' aria-labelledby={`dropdownMenuLinks${props.id_produto}`}>
                                <li><a className='dropdown-item' onClick={(e) => props.onClickEditar(props.id_produto)}>Editar Produto</a></li>
                                <li><a className='dropdown-item' onClick={(e) => props.onClickOpcional(props.id_produto)}>Opcionais</a></li>
                                <li><hr className='dropdown-divider' /></li>
                                <li><a className='dropdown-item' onClick={(e) => props.onClickExcluir(props.id_produto)}>Excluir Produto</a></li>
                            </ul>
                        </div>
                        <img className='img-fluid rounded img-produto me-4' src={props.url_foto} alt="Produto" />
                        {props.nome}
                    </div>
 
                    <div className='col-4 text-end'>
                        <div className='me-4'>
                            {
                                new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(Number(props.valor_unit))
                            }
                        </div>
                    </div>



                </div>
            </div>
        </li>

    </>
};


export default Produto;