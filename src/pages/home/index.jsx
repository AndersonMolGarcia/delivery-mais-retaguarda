import './style.css';
import Navbar from '../../components/navbar/index.jsx';


function Home() {

    const pedidos = [
        {
            id_pedido: 1,
            nome: "Heber Stein Mazutti",
            status: "Aguardando",
            bairro: "Bela Vista",
            valor_total: 112
        },
        {
            id_pedido: 2,
            nome: "Maria Oliveira",
            status: "Em preparo",
            bairro: "Centro",
            valor_total: 89.5
        },
        {
            id_pedido: 3,
            nome: "João Pereira",
            status: "Entregue",
            bairro: "Jardim América",
            valor_total: 156.9
        },
        {
            id_pedido: 4,
            nome: "Ana Souza",
            status: "Cancelado",
            bairro: "Vila Nova",
            valor_total: 42
        },
        {
            id_pedido: 5,
            nome: "Carlos Mendes",
            status: "Aguardando",
            bairro: "Boa Vista",
            valor_total: 73.3
        },
        {
            id_pedido: 6,
            nome: "Fernanda Lima",
            status: "Em preparo",
            bairro: "São Cristóvão",
            valor_total: 98
        },
        {
            id_pedido: 7,
            nome: "Ricardo Alves",
            status: "Entregue",
            bairro: "Centro",
            valor_total: 210
        },
        {
            id_pedido: 8,
            nome: "Juliana Rocha",
            status: "Aguardando",
            bairro: "Jardim das Flores",
            valor_total: 64.8
        },
        {
            id_pedido: 9,
            nome: "Paulo Henrique",
            status: "Em preparo",
            bairro: "Santa Rita",
            valor_total: 45.35
        }
    ];


    return <>
        <Navbar tela="/" />

        <div className='container-fluid mt-page'>

            <div className='m-2 mt-4 d-flex justify-content-between'>
                <h2>Dashboard</h2>
            </div>

            <div className='row'>
                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            Pedidos do dia
                        </div>
                        <div className='card-body text-center'>
                            <h2 className='card-title'>27</h2>
                            <p className='card-text'>R$ 650,00</p>
                        </div>
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='card'>
                        <div className='card-header'>
                            Clientes novos
                        </div>
                        <div className='card-body text-center'>
                            <h2 className='card-title'>03</h2>
                            <p className='card-text'>(mês atual)</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='m-2 mt-5 d-flex justify-content-between'>
                <h2>Últimos Pedidos</h2>
            </div>

            <div className='row ms-3 me-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Pedido</th>
                            <th scope='col'>Cliente</th>
                            <th scope='col'>Status</th>
                            <th scope='col'>Bairro</th>
                            <th scope='col'>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pedidos.map((pedido) => {
                                return <tr key={pedido.id_pedido}>
                                    <th scope='row'>{pedido.id_pedido}</th>
                                    <td>{pedido.nome}</td>
                                    <td>{pedido.status}</td>
                                    <td>{pedido.bairro}</td>
                                    <td>
                                        {
                                            new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(pedido.valor_total)
                                        }
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>

};


export default Home;