import './style.css';
import Logo from '../../assets/logo.png';
import Fundo from '../../assets/fundo-login.jpg';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    function ProcessaLogin() {
        navigate('/');
    }

    return (
        <div className='row'>
            <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>
                <form className='form-login mt-5'>
                    <h3 className='mb-4'>Administre seu delivery agora mesmo.</h3>   
                    <h6 className='mb-3'>Acesse sua conta</h6>  

                    <div className='form-floating'>
                        <input 
                            className='form-control'
                            type="email" 
                            name="floatingInputEmail" 
                            id="floatingInputEmail" 
                            placeholder='E-mail'
                        />
                        <label htmlFor="floatingInputEmail">E-mail</label>
                    </div>  
                    <div className='form-floating'>
                        <input 
                            className='form-control'
                            type="password" 
                            name="floatingInputSenha" 
                            id="floatingInputSenha" 
                            placeholder='Senha'
                        />
                        <label htmlFor="floatingInputSenha">Senha</label>
                    </div> 

                    <button onClick={ProcessaLogin} className='w-100 btn btn-lg btn-danger mt-3'>
                        <span className='ms-2'>Acessar</span>    
                    </button>  

                    <div className='mt-5'>
                        <a href="/registro">Não tenho uma conta. Criar agora!</a>
                    </div>

                    <img src={Logo} alt="Delivery Mais" className='mt-5' />
                </form>
            </div>
            <div className='col-sm-6 px-0 d-none d-sm-block bg-danger'>
                <img className='background-login' src={Fundo} alt="Delivery Mais" />
            </div>
        </div>
    )
};


export default Login;