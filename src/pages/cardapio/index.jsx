import './style.css';
import Navbar from '../../components/navbar/index.jsx';
import Produto from '../../components/produto/index.jsx';


function Cardapio() {

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
        <Navbar tela="cardapio" />

        <div className='container-fluid mt-page'>
            <Produto 
                id_produto = "123"
                url_foto = "https://jornada-dev2.s3.amazonaws.com/xtudo.png"
                nome = "X-Tudo"
                valor_unit = "29.90"
            />  
            <Produto 
                id_produto = "123"
                url_foto = "https://jornada-dev2.s3.amazonaws.com/xtudo.png"
                nome = "X-Tudo"
                valor_unit = "29.90"
            />    
            <Produto 
                id_produto = "123"
                url_foto = "https://jornada-dev2.s3.amazonaws.com/xtudo.png"
                nome = "X-Tudo"
                valor_unit = "29.90"
            />      
        </div>
    </>
};


export default Cardapio;