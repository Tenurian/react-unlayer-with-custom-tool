import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmailEditor from 'react-email-editor'
import renderHTML from 'react-render-html'
import Collapsible from 'react-collapsible'

class App extends Component {

  state = { html: null, design: null }

  editor = null

  exportHtml = () => {
    this.editor.exportHtml(data => {
      this.setState(data)
      console.log(data)
    })
  }

  renderMode = () => {
    let {html} = this.state
    return renderHTML(html || '')
  }

  addEditorEventListeners = () => {
    let {editor} = this

    let events = [
      'body:modified',
      'row:added',
      'row:modified',
      'row:moved',
      'row:removed',
      'contentModified',
      'content:added',
      'content:modified',
      'content:moved',
      'content:removed'
    ]

    events.map(e => {
      editor.addEventListener(e, data => {
        this.exportHtml()
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Unlayer with Custom-Tools</h1>
        </header>


        {/** All your code should be in this file. No other file should be edited **/}

        <EmailEditor
          ref={editor => this.editor = editor}
          onLoad={this.addEditorEventListeners}
        />

        <hr />

        <div className={'hidden'}>
          <h5>Preview</h5>
          {this.renderMode()}
        </div>

      </div>
    );
  }
}

export default App;
