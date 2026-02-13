import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo2.png';


function Navbar(props) {

    let classDefault = "btn btn-outline-light me-3";
    let classSelecionado = "btn btn-light me-3";  

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={Logo} className='mt-1' alt="Delivery Mais" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={props.tela === "/" ? classSelecionado  : classDefault } aria-current="page" to="/">
                                <i className='fas fa-home'></i>Início
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={props.tela === "pedidos" ? classSelecionado  : classDefault } aria-current="page" to="/pedidos">
                                <i className='fas fa-utensils'></i>Acompanhar Pedidos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={props.tela === "cardapio" ? classSelecionado  : classDefault } aria-current="page" to="/cardapio">
                                <i className='fas fa-bars'></i>Cardápio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={props.tela === "historico" ? classSelecionado  : classDefault } aria-current="page" to="/historico">
                                <i className='fas fa-clock'></i>Histórico de Pedidos
                            </Link>
                        </li>

                    </ul>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown" >        
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='fas fa-user'></i>Heber Mazutti
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/perfil">Meu Perfil</Link></li>
                                <li><Link className='dropdown-item' to="/senha">Alterar Senha</Link></li>
                                <li><a className="dropdown-item" href="#">Estabelecimento</a></li>
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