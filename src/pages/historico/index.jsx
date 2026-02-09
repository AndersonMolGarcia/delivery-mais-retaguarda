import './style.css';
import Navbar from '../../components/navbar/index.jsx';
import Pedido from '../../components/pedido/index.jsx';


function Historico() {
    const pedidos = [
        {
            id_pedido: 524556,
            dt_pedido: "03/02/2026 19:00:01",
            status: "F",
            nome: "Anderson Molina Garcia",
            endereco: "Rua Antenor Guici, 24",
            vl_total: "52.90",
            itens: [
                { id_item: 1, url_foto: "https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome: "X-Salada", qtd: 2, vl_unit: 29, detalhes: [{ nome: "Bacon" }, { nome: "Cebola" }] },
                { id_item: 2, url_foto: "https://jornada-dev2.s3.amazonaws.com/xtudo.png", nome: "X-Tudo", qtd: 1, vl_unit: 18, detalhes: [] },
                { id_item: 3, url_foto: "https://jornada-dev2.s3.amazonaws.com/coca-cola.png", nome: "Coca-Cola", qtd: 3, vl_unit: 12, detalhes: [] },
                { id_item: 4, url_foto: "https://jornada-dev2.s3.amazonaws.com/dog1.png", nome: "Hot Dog", qtd: 1, vl_unit: 35, detalhes: [] },
                { id_item: 5, url_foto: "https://jornada-dev2.s3.amazonaws.com/xbacon.jpg", nome: "X-Bacon", qtd: 2, vl_unit: 20, detalhes: [] },
                { id_item: 6, url_foto: "https://jornada-dev2.s3.amazonaws.com/xegg.jpg", nome: "X-Egg", qtd: 1, vl_unit: 22, detalhes: [] }
            ]
        },
        {
            id_pedido: 524556,
            dt_pedido: "04/02/2026 20:35:45",
            status: "F",
            nome: "Carla Soares da Silva",
            endereco: "Rua Magalhães Ruis, 288",
            vl_total: "37.7",
            itens: [
                { id_item: 1, url_foto: "https://jornada-dev2.s3.amazonaws.com/xsalada.jpg", nome: "X-Salada", qtd: 2, vl_unit: 29, detalhes: [{ nome: "Bacon" }, { nome: "Cebola" }] },
                { id_item: 2, url_foto: "https://jornada-dev2.s3.amazonaws.com/xtudo.png", nome: "X-Tudo", qtd: 1, vl_unit: 18, detalhes: [] }
                
            ]
        },
        {
            id_pedido: 524556,
            dt_pedido: "07/02/2026 19:45:27",
            status: "F",
            nome: "Mariana Gaspar Coutin",
            endereco: "Rua Alameda dos Anjos, 471",
            vl_total: "127.9",
            itens: [               
                { id_item: 3, url_foto: "https://jornada-dev2.s3.amazonaws.com/coca-cola.png", nome: "Coca-Cola", qtd: 3, vl_unit: 12, detalhes: [] },
                { id_item: 4, url_foto: "https://jornada-dev2.s3.amazonaws.com/dog1.png", nome: "Hot Dog", qtd: 1, vl_unit: 35, detalhes: [] },
                { id_item: 5, url_foto: "https://jornada-dev2.s3.amazonaws.com/xbacon.jpg", nome: "X-Bacon", qtd: 2, vl_unit: 20, detalhes: [] },
                { id_item: 6, url_foto: "https://jornada-dev2.s3.amazonaws.com/xegg.jpg", nome: "X-Egg", qtd: 1, vl_unit: 22, detalhes: [] }
            ]
        },
    ];

    return <>
        <Navbar tela="historico" />

        <div className='container-fluid mt-page'>
            <div className='m-2 mt-4 mb-4 d-flex justify-content-between'>
                <h2>Histórico de Pedidos</h2>
                <button className='btn btn-outline-danger'><i className='fas fa-sync'></i>Atualizar</button>
            </div>

            <div className='row ms-0 me-1'>
                {
                    pedidos.map(pedido => {
                        return <Pedido
                            key={pedido.id_pedido}
                            id_pedido={pedido.id_pedido}
                            dt_pedido={pedido.dt_pedido}
                            status={pedido.status}
                            nome={pedido.nome}
                            endereco={pedido.endereco}
                            vl_total={pedido.vl_total}
                            itens={pedido.itens}


                        />
                    })
                }
            </div>

        </div>
    </>

};


export default Historico;