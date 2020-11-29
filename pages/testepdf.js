import React from 'react'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
//import logo from '../assets/logo.png'
import Impressao from '../classes/impressao'
import {data} from '../classes/data'

pdfMake.vfs = pdfFonts.pdfMake.vfs

function TestePdf() {

    const visualizarImpressao = async () => {
      console.log('report', data);
      const classeImpressao = new Impressao(data);
      const documento = await classeImpressao.PreparaDocumento();
      pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Criando documentos PDF com ReactJS
          </p>        
        </header>
        <section className="App-body">
          <button className="btn" onClick={visualizarImpressao}>
            Visualizar documento
          </button>
        </section>
      </div>
    );
  }
  
  export default TestePdf

  //<img src={logo} className="App-logo" alt="logo" />