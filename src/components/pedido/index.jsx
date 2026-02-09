import './style.css';



function Pedido(props) {

    function Status(st) {
        switch (st) {
            case "P": return "Pedido em produção";
            case "E": return "Saiu para entrega";
            case "A": return "Aguardando...";
            default: return "";
        }
    }

    return <>
        <div className='d-flex justify-content-between shadow-lg pedido me-4'>
            <div className=''>
                <span><b>Pedido #{props.id_pedido}</b></span>
                <span className='badge rounded-pill bg-secondary ms-3'>{props.dt_pedido}</span>
                <span className='badge rounded-pill bg-danger ms-3'>{Status(props.status)}</span>
                <small className='d-block mt-1 mb-3 text-secondary'>
                    {props.nome} - {props.endereco} -
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.vl_total)}
                </small>

                {
                    props.itens.map(item => {
                        return <div className='col-12'>
                            <div className='row p-3 ps-0 border-top'>
                                <div className='col-3'>
                                    <img className='img-fluid rounded img-produto' src={item.url_foto} alt="Produto" />
                                </div>

                                <div className='col-9'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <small><b>{item.nome}</b></small>
                                        <small>
                                            <b>
                                                {
                                                    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.vl_unit * item.qtd)
                                                }
                                            </b>
                                        </small>

                                    </div>

                                    <div className='d-block mb-2'>
                                        {item.qtd.toLocaleString('pt-BR', { minimumIntegerDigits: 2 })} x
                                        {
                                            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.vl_unit)
                                        }
                                    </div>

                                    {
                                        item.detalhes ?
                                            item.detalhes.map(detalhe => {
                                                return <small className='d-block text-secondary' key={detalhe.nome}>{detalhe.nome}</small>
                                            })
                                            : null
                                    }
                                </div>
                            </div>


                        </div>
                    })
                }

            </div>

            <div className='d-flex align-items-center me-4'>
                {
                    props.status !== "F" ?
                        <div class="dropdown">
                            <a 
                                class="btn btn-secondary dropdown-toggle" 
                                href='#'
                                role='button'
                                id={`dropdownMenuLink${props.id_pedido}`}
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                
                            >
                                Status
                            </a>
                            <ul class="dropdown-menu" aria-labelledby={`dropdownMenuLink${props.id_pedido}`}>
                                <li><a class="dropdown-item">Aguardando</a></li>
                                <li><hr className='dropdown-divider'/></li>
                                <li><a class="dropdown-item">Em produção</a></li>
                                <li><a class="dropdown-item">Saiu pra entrega</a></li>
                                <li><hr className='dropdown-divider'/></li>
                                <li><a class="dropdown-item">Finalizar</a></li>
                            </ul>
                        </div>
                        :
                        <button className='btn btn-outline-danger'><i className='fas fa-arrow-left'></i>Reabrir Pedido</button>
                }
            </div>
        </div>
    </>

};


export default Pedido;