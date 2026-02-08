import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo2.png';


function Navbar(props) {

    let classDefault = "btn btn-outline-light me-3";
    let classSelecionado = "btn btn-light me-3";  

    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src={Logo} className='mt-1' alt="Delivery Mais" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class={props.tela === "/" ? classSelecionado  : classDefault } aria-current="page" to="/">
                                <i className='fas fa-home'></i>Início
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class={props.tela === "pedidos" ? classSelecionado  : classDefault } aria-current="page" to="/pedidos">
                                <i className='fas fa-utensils'></i>Acompanhar Pedidos
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class={props.tela === "cardapio" ? classSelecionado  : classDefault } aria-current="page" to="/cardapio">
                                <i className='fas fa-bars'></i>Cardápio
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class={props.tela === "historico" ? classSelecionado  : classDefault } aria-current="page" to="/historico">
                                <i className='fas fa-clock'></i>Histórico de Pedidos
                            </Link>
                        </li>

                    </ul>
                    <div class="btn-group" role="group" aria-label="Button group with nested dropdown" >        
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='fas fa-user'></i>Heber Mazutti
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
                                <li><a class="dropdown-item" href="#">Estabelecimento</a></li>
                                <li><hr className='dropdown-divider'/></li>
                                <li><a href="/login" className='dropdown-item'>Sair</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;