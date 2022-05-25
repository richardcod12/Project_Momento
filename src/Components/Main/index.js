import './style.css';
import Button from 'react-bootstrap/Button';
import  'bootstrap/dist/css/bootstrap.min.css' ;


function Main() {
    return (

        <main className="main-container">
               <div className="main-context">
                        <p className="context-font1">Sua Mente saudavel com, Okulos!</p>  <br/>
                        <p className="context-font2">O segredo para seu controle mental foi revelado.</p> <br/><br/><br/>
                        <p className="context-font3">Okulos é uma tecnologia desenvolvida pela empresa Momento em parceria com o Instituto PROA, com o intuito de melhorar o bem estar e saúde mental dos adolescentes Brasil a fora.</p>
               </div>

               <div className="container-buttons">
                    <Button variant="outline-secondary">Primary</Button>
                    <Button variant="outline-secondary">Primary</Button>
               </div>
        </main>

    
)}

export default Main