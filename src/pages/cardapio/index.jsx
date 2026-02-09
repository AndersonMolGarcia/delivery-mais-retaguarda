import './style.css';
import Navbar from '../../components/navbar/index.jsx';
import Produto from '../../components/produto/index.jsx';
import Categoria from '../../components/categoria/index.jsx';


function Cardapio() {

    const cardapio = [
        {
            id_categoria: 1,
            categoria: "Lanches",
            produtos: [
                { id_produto: 1, descricao: 'X-Salada', valor: 19.90, url_foto: "https://jornada-dev2.s3.amazonaws.com/xsalada.jpg" },
                { id_produto: 2, descricao: 'X-Tudo', valor: 19.90, url_foto: "https://jornada-dev2.s3.amazonaws.com/xtudo.png" },
                { id_produto: 3, descricao: 'Hot Dog', valor: 19.90, url_foto: "https://jornada-dev2.s3.amazonaws.com/dog1.png" },
            ]
        },
        {
            id_categoria: 2,
            categoria: "Bebidas",
            produtos: [
                { id_produto: 4, descricao: 'Coca-Cola', valor: 6.00, url_foto: "https://jornada-dev2.s3.amazonaws.com/coca-cola.png" },
                { id_produto: 5, descricao: 'Água 300ml', valor: 3.50, url_foto: "https://jornada-dev2.s3.amazonaws.com/agua.png" }
            ]
        },
        {
            id_categoria: 3,
            categoria: "Sobremesa",
            produtos: []
        }

    ];

    return <>
        <Navbar tela="cardapio" />

        <div className='container-fluid mt-page'>

            <div className='m-2 mt-4 mb-4 d-flex justify-content-between'>
                <h2>Cardápio</h2>
                <button className='btn btn-outline-danger ms-4'><i className='fas fa-plus'></i>Adicionar Categoria</button>
            </div>

            <div className='m-2 mt-4'>
                {

                    cardapio.map(item => {

                        return <>
                            <ul className='list-group'>

                                <Categoria 
                                    key={item.categoria}
                                    id_categoria={item.id_categoria}
                                    nome={item.categoria}
                                />



                                {
                                    item.produtos.map(produto => {
                                        return <Produto
                                            key={produto.id_produto}
                                            id_produto={produto.id_produto}
                                            url_foto={produto.url_foto}
                                            nome={produto.descricao}
                                            valor_unit={produto.valor}
                                        />
                                    })
                                }


                            </ul>
                            <button className='btn btn-outline-danger mt-2 mb-5'>Adicionar Produto</button>
                        </>


                    })

                }
            </div>
        </div>
    </>
};


export default Cardapio;