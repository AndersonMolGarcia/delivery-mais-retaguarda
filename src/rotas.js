import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home      from './pages/home/index.jsx';
import Login     from './pages/login/index.jsx';
import Cadastro  from './pages/cadastro/index.jsx';
import Cardapio  from './pages/cardapio/index.jsx';
import Pedidos   from './pages/pedidos/index.jsx';
import Historico from './pages/historico/index.jsx';
import Perfil from "./pages/perfil/index.jsx";


function Rotas() {
    return <BrowserRouter>
        <Routes>
            <Route path="/"          element={<Home/>}/>
            <Route path="/login"     element={<Login/>}/>
            <Route path="/registro"  element={<Cadastro/>}/>
            <Route path="/cardapio"  element={<Cardapio/>}/>
            <Route path="/pedidos"   element={<Pedidos/>}/>
            <Route path="/historico" element={<Historico/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
    </BrowserRouter>
};


export default Rotas;