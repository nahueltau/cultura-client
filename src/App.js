import CardPage from "./components/CardPage"
import {
  Switch,
  Route,
} from "react-router-dom";
function App(){
  return (
    <div className="App">
      <header className="header"><h2 className="header-title">Ultimas Convocatorias 2021</h2></header>
      <main>
            <article className="container">
            <h3>Convocatorias Ministerio de Cultura</h3>
            <p>Ultimas convocatiorías difundidas por el Ministerio de Cultura de la Nacion Argentina</p>
      <Switch>
        
        <Route path="/:page">
         
        <CardPage></CardPage>
          
        </Route>
        <Route exact path="/">
           <CardPage></CardPage>
            
        </Route>
      
      </Switch>



            </article>
            
        </main>
        <footer>Web Services</footer>
    </div>
  );
}

export default App;
