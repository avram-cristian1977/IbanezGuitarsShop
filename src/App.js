import './App.css';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Search from './pages/Search';
import { useState } from 'react';
import Admin from './pages/Admin'
import Footer from './components/Footer'
import GuitarDetails from './pages/GuitarDetails'
import CategoryGuitars from './components/CategoryGuitars';
import PageNotFound from './pages/PageNotFound';


const App = () => {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
  })

  const [term, setTerm] = useState("")

  const getGuitarByModelTerm = (term) => {
    setTerm(term)
  }
  return <ApolloProvider client={client}>
    <div className="page-container">
      <Navigation onSaveGetGuitarByModel={getGuitarByModelTerm} />
      <Switch>

        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/search" >
          <Search term={term} />
        </Route>

        <Route path="/admin" >
          <Admin />
        </Route>

        <Route path="/category/:id"  >
          <CategoryGuitars />
        </Route>

        <Route path="/:slug" >
          <GuitarDetails />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>
    <Footer />
  </ApolloProvider>

}

export default App;
