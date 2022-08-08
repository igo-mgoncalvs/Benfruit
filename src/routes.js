import Header from 'components/Header'
import Home from 'pages/Home'
import Produtos from 'pages/Produto'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter () {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Produtos' element={<Produtos />} />
            </Routes>
        </Router>
    )
}