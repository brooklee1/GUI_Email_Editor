
import React, { Component } from 'react'
import EmailEditor from 'react-email-editor'


class EmailEditorComponent extends Component {
    render() {
        return <div>
            <button onClick={this.exportHtml}>Export HTML</button>

            <EmailEditor
                ref={editor => this.editor = editor}
            />
        </div>
    }

    exportHtml = () => {
        this.editor.exportHtml(data => {
            const { design, html } = data
            console.log('exportHtml', html)
        })
    }
}

export default EmailEditorComponent;