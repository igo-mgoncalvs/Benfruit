import Banner from 'components/Banner'
import Header from 'components/Header'
import Carrinho from 'pages/Carrinho'
import Home from 'pages/Home'
import Produtos from 'pages/Produto'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter () {
    return(
        <Router>
            <Header />
            <Banner />
            <Routes>
                <Route path='/Benfruit' element={<Home />}/>
                <Route path='/Benfruit/Produtos' element={<Produtos />} />
                <Route path='/Benfruit/Carrinho' element={<Carrinho />} />
            </Routes>
        </Router>
    )
}