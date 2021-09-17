import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import './app.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/NewProduct/NewProduct'
import Login from './pages/login/Login'
import { useContext } from 'react'
import { AuthContext } from './context/authContext/AuthContext'
import ListList from './pages/listList/ListList'
import NewList from './pages/NewList/NewList'
import List from './pages/list/List'

function App() {
    const {user} = useContext(AuthContext);
    
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                {user ? (
                    <>
                        <Topbar />
                        <div className="container">
                            <Sidebar />
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/users">
                                <UserList />
                            </Route>
                            <Route path="/user/:id">
                                <User />
                            </Route>
                            <Route path="/newUser">
                                <NewUser />
                            </Route>
                            <Route path="/movies">
                                <ProductList />
                            </Route>
                            <Route path="/product/:productsId">
                                <Product />
                            </Route>
                            <Route path="/newproduct">
                                <NewProduct />
                            </Route>
                            <Route path="/lists">
                                <ListList />
                            </Route>
                            <Route path="/list/:listId">
                                <List />
                            </Route>
                            <Route path="/newlist">
                                <NewList />
                            </Route>
                        </div>
                    </>
                ) : <Redirect to="/login" />}
            </Switch>
        </Router>
    )
}

export default App
