import React from 'react';
import './terminal.css';

const terminal = {
	prefix: "root:~$",
	commands: {
		test: function() {
			alert()
		}
	}
}

class Terminal extends React.Component {

	constructor(props) {
		super(props);
	}

	updateTerminal = line => {
		document.getElementById('terminal-input-line')
			.insertAdjacentHTML('beforebegin', `<span>${line}</span><br/>`);
	}

	handleKeyPress = e => {
    if (e.key === "Enter") {		
			let inputLine = e.target.value;
			this.updateTerminal(terminal.prefix + inputLine)

			if (inputLine) {
				if (inputLine in terminal.commands) {
					terminal.commands[inputLine]()
				} else {
					this.updateTerminal(`${inputLine}: command not found`);
				}
			}
			e.target.value = "";
		}
  }

	render() {
		return (
			<div>
				<div className="terminal">
					<div id="terminal-input-line" onClick={() => document.getElementById('terminal-input').focus()}>
						<span>{terminal.prefix}</span><input type="text" id="terminal-input" onKeyPress={this.handleKeyPress}/>
					</div>
				</div>	
			</div>
		)
	}
}

export default Terminal;