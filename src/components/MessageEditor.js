import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";

class MessageEditor extends Component {
  state = {
    caractereCounter: 0,
    message: "",
  };

  // Ecrire un message 
  createMessage = () =>{
    const {addMessage, pseudo } = this.props
    
    let timestamp = Date.now()
    let message = this.state.message
    addMessage(message, timestamp)

    // RESET - Efface le message une foi valider et repasse le compteur de caracteres à 0
    this.setState({message : ''})
    this.setState({caractereCounter : 0})
  }

  // Permet de creer le message au click sur le bouton envoyer
  handleSubmit = (event) => {
    event.preventDefault();
    this.createMessage()
  };

  // Permet de creer le message aen pressant la touche Enter du clavier
  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.createMessage()
    }
  }

  // Ecoute les changements du texte afin de capturer la saisie et de compter le nombre de caracteres
  handleChange = (event) => {
    this.state.caractereCounter = event.target.value.length 
    const message = event.target.value;
    this.setState({ message });
  };

  render() {
    return (
      <Fragment>
        <section>
          <form className="form" onSubmit={(e)=> this.handleSubmit(e)}>
            <div className="flex justify-end">
              <div className="text-space relative w-full mr-4">
                <textarea
                  value={this.state.message}
                  name="messages"
                  id="messages"
                  maxLength="140"
                  className="resize-none w-full h-full rounded-full px-4 focus:outline-none focus:placeholder-gray-400 "
                  onChange={(e)=>this.handleChange(e)}
                  onKeyUp={this.handleKeyUp}
                />
                <p className="info absolute bottom-1 right-3 text-gray-400 text-xs">
                  {this.state.caractereCounter}/140
                </p>
              </div>
              <button
                className="w-2/6 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide :hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-blue-700 hover:text-gray-300"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default MessageEditor;
