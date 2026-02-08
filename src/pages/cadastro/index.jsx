import { Navigate, useNavigate } from 'react-router-dom';
import './style.css';
import Fundo from '../../assets/fundo-login.jpg';
import Logo from '../../assets/logo.png';


function Cadastro() {

    const navigate = useNavigate();

    function ProcessaConta() {
        navigate('/');
    }

    return (
        <div className='row'>
            <div className='col-sm-6 d-flex justify-content-center align-items-center text-center'>
                <form className='form-cadastro mt-5'>
                    <h3 className='mb-3'>Crie sua conta agora mesmo.</h3>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="floatingInputNome"
                                    placeholder='Nome completo'
                                />
                                <label htmlFor="floatingInputNome">Nome do contato</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="email"
                                    id="floatingInputEmail"
                                    placeholder='E-mail'
                                />
                                <label htmlFor="floatingInputEmail">E-mail</label>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="password"
                                    id="floatingInputSenha"
                                    placeholder='Senha'
                                />
                                <label htmlFor="floatingInputSenha">Senha</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="password"
                                    id="floatingInputSenha2"
                                    placeholder='Confirme a senha'
                                />
                                <label htmlFor="floatingInputSenha2">Confirme a senha</label>
                            </div>
                        </div>
                    </div>

                    <div className='form-floating'>
                        <input
                            className='form-control'
                            type="text"
                            id="floatingInputEstabelecimento"
                            placeholder='Nome do estabelecimento'
                        />
                        <label htmlFor="floatingInputEstabelecimento">Nome do estabelecimento</label>
                    </div>

                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="floatingInputEndereco"
                                    placeholder='Endereço'
                                />
                                <label htmlFor="floatingInputEndereco">Endereço</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="floatingInputCompl"
                                    placeholder='Compl.'
                                />
                                <label htmlFor="floatingInputCompl">Compl.</label>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"                                    
                                    id="floatingInputBairro"
                                    placeholder='Bairro'
                                />
                                <label htmlFor="floatingInputBairro">Bairro</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-control mb-2'>
                                <select name="cidades" id="cidades">
                                    <option value="0000000">Cidade</option>
                                    <option value="0000001">São Paulo - SP</option>
                                    <option value="0000002">Rio de Janeiro - RJ</option>
                                </select>
                            </div>             
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type="text"                                    
                                    id="floatingInputCep"
                                    placeholder='CEP'
                                />
                                <label htmlFor="floatingInputCep">CEP</label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='form-control mb-2'>
                                <select name="categoria" id="categoria">
                                    <option value="0000000">Categoria</option>
                                    <option value="0000001">Pizza</option>
                                    <option value="0000002">Burguer</option>
                                    <option value="0000003">Japonês</option>
                                </select>
                            </div> 
                        </div>
                    </div>

                    <button onClick={ProcessaConta} className='btn btn-lg btn-danger w-100 '>
                        <span className='ms-2'>Criar Conta</span>
                    </button>

                    <div className='mt-5'>
                        <a  href="/login">Já tenho uma conta. Fazer login!</a>
                    </div>

                    <img className='mt-5' src={Logo} alt="Delivery Mais" />
                    

                </form>

            </div>

            <div className='col-sm-6 px-0 d-none d-sm-block '>
                <img className='background-login' src={Fundo} alt="Delivery Mais" />
            </div>
        </div>
    );
};


export default Cadastro;