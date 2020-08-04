import React, { Component } from "react";
import { render } from "react-dom";
import CanvasDraw from "react-canvas-draw";
import "./index.css";
import classNames from "./my.module.css";

class Annotator extends Component {
	
  // Initial Settings
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 3,
    lazyRadius: 0
  };
  
  render() {
	return (
	<div>	
	
		<div className={classNames.header}>
			<h1>Header</h1>
			<p>My supercool header</p>
		</div>
		
		<div className={classNames.sidenav}> 
			<p> Hello SideBar </p>
		</div>

		
		<div className={classNames.main}>
		  <p> Hello World! </p>
		</div>

	</div>
	);	// End Return
	
  } // End Render

} // End class

export default Annotator;