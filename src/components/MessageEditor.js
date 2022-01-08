import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";


class MessageEditor extends Component {
  render() {
    return (
      <Fragment>
        <section className=" h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
          <form
            action=""
            className="form container flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 p-4 w-2/6 m-auto mx-2 h-2/3 justify-end"
          >
            <div className="flex justify-end">
              <div className="text-space relative w-full mr-4">
                <textarea
                  name="messages"
                  id="messages"
                  className="resize-none w-full "
                />
                <div className="info absolute top-0">140</div>
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
