import React, { Component } from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom"

import CanvasDraw from "react-canvas-draw";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ClearIcon from '@material-ui/icons/Clear';
import UndoIcon from '@material-ui/icons/Undo';
import BrushIcon from '@material-ui/icons/Brush';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



import { SketchPicker } from 'react-color';


const drawerWidth = 240;
//const reader = new FileReader();

const useStyles = theme => ({ 
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
});

class MyCanvas extends Component {
		
	state = {
    color: "#000000",
    width: 400,
    height: 400,
    brushRadius: 3,
    lazyRadius: 0,
	img: "",
	pic: new Image(),
	show: false
  };
  
    
   handleChangeComplete = (c, event) => {
   this.setState({ color: c.hex }); }
   
       
   resize = (event) => {
   let temp = this;
   let canvas = this.saveableCanvas;
   let headerHeight=0;
   let footerHeight=0;
   var node = ReactDOM.findDOMNode(this.refs[AppBar]);
   
   var promise = new Promise(function(resolve, reject) {
		   	//Find height of header and footer
		console.log(node);
		if (node){
			headerHeight = node.clientHeight;
			console.log(headerHeight);
		}	
		
		/*var node2 = ReactDOM.findDOMNode(this.refs[Footer]);
		if (node2){
			var footerHeight = node.clientHeight;
			console.log(footerHeight);
		}	*/
	
			  if (headerHeight > 0) {
				resolve("Stuff worked!");
			  }
			  else {
				reject(Error("It broke"));
			  }
		});
		
		//UPDATE
	promise.then(function(result) {
		  console.log(result); // "Stuff worked!"
		  if(temp.state.width >= temp.state.height) {
			var ratio = (window.screen.availWidth-240)/temp.state.width;
			
			temp.setState({width: (window.screen.availWidth-240)});
			temp.setState({height: (temp.state.height *ratio)});
		  }
		  else {
			var ratio = (window.screen.availHeight - headerHeight)/temp.state.height;
			
			temp.setState({height: (window.screen.availHeight - headerHeight)});
			temp.setState({width: (temp.state.width*ratio)});
			
		  }
		
		canvas.clear();
		canvas.drawImage();
		}, function(err) {
		  console.log(err); // Error: "It broke"
		});
   }
   
		
onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();
	let test = new Image()
	let canvas = this.saveableCanvas;
	let temp = this;
	
	

    reader.onload = (e) => {
		 this.setState({img: e.target.result});
		  
		//Promise to setup the new image Test
		var promise = new Promise(function(resolve, reject) {
		   	test.src = e.target.result;
			console.log(test.width);
			  if (test.src != null) {
				resolve("Stuff worked!");
			  }
			  else {
				reject(Error("It broke"));
			  }
		});
		
		
	promise.then(function(result) {
		  console.log(result); // "Stuff worked!"
		//  console.log(test.width);
		  temp.setState({width: test.width});
		  temp.setState({height: test.height});
		 canvas.clear();
		 canvas.drawImage();
		}, function(err) {
		  console.log(err); // Error: "It broke"
		});
		
		//Then set the width and height and draw the canvas
		
		
	};
    reader.readAsDataURL(event.target.files[0]);
  }

}



/* WORKING VERSION
onImageChange = (event) => {
  if (event.target.files && event.target.files[0]) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({img: e.target.result});
	  
	  let test = new Image();
	  test.src = e.target.result;
	  
	 // this.setState({width: test.width});
	  console.log(test.width);
	  
	  console.log(this.state.width);
	  
	  
	  
	  this.saveableCanvas.drawImage();
	  
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  
} */
      
/*componentDidUpdate(prevProps, prevState) {
			if (prevState.pic !== this.state.pic) {
				console.log(this.state.pic.src);
				this.setState({img: this.state.pic.src});
				//this.setState({width: document.getElementById('target').naturalWidth});
				
			}
			console.log(this.state.img);
			this.saveableCanvas.drawImage();
			
		} */

	
	render(){
		const { classes } = this.props;
		
		var style = {};
		if (!this.state.show) {
		  style.display = 'none'
		}
	  
		return(	
			   <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
		<List>
			<ListItem button key='clear'
				onClick={() => {
				this.saveableCanvas.clear()}}>
				<ListItemIcon> <ClearIcon/> </ListItemIcon>
				<ListItemText primary='Clear' />
			</ListItem>
			
			
			<ListItem button key='undo'
				onClick={() => {
				this.saveableCanvas.undo();}}>
				<ListItemIcon> <UndoIcon/> </ListItemIcon>
				<ListItemText primary='Undo' />
			</ListItem>
			
			<ListItem key='brushRadius' >
				<ListItemIcon> <BrushIcon/> </ListItemIcon>
				<ListItemText primary='Brush Radius:'/>
			</ListItem>
			<ListItem>
				<input
				  type="number"
				  value={this.state.brushRadius}
				  onChange={e =>
					this.setState({ brushRadius: parseInt(e.target.value, 10) })
				  }
				/>
			</ListItem>
			
			<ListItem key='color'>
			<ListItemText primary = 'Color' />
			</ListItem>
			<ListItem key='ColorPicker'>
				<SketchPicker 
				 color={ this.state.color }
				onChangeComplete={ this.handleChangeComplete }/>
			</ListItem>
			
			
			<ListItem key ='upload'>
			<ListItemText primary = 'Upload' />
			<input type="file" onChange={this.onImageChange} className="filetype" id="group_image"/>
			</ListItem>
			
			<ListItem button key='resize'
				onClick={() => {
				this.resize()}} >
				<ListItemIcon> <UndoIcon/> </ListItemIcon>
				<ListItemText primary='Fit to Screen' />
			</ListItem>
			
		</List>
        </div>
      </Drawer>
					
		<Container maxWidth="lg" className={classes.container}>
					 
        
       
        <p>Try it out! Draw something, hit "Save" and then "Load".</p>
       
		
		
        <CanvasDraw style = {{zIndex: 2}}
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          brushRadius={this.state.brushRadius}
          lazyRadius={this.state.lazyRadius}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
		  imgSrc = {this.state.img}
        />
        <p>
          The following is a disabled canvas with a hidden grid that we use to
          load & show your saved drawing.
        </p>
        <button
          onClick={() => {
            this.loadableCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Load what you saved previously into the following canvas. Either by
          calling `loadSaveData()` on the component's reference or passing it
          the `saveData` prop:
        </button>
        <CanvasDraw
          disabled
          hideGrid
          ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
          saveData={localStorage.getItem("savedDrawing")}
        />
		</Container>
				
	</div>

		);
	}

} 
export default withStyles(useStyles)(MyCanvas);