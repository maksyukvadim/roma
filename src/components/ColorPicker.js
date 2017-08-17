import React from 'react'
import PropTypes from 'prop-types'
import './ColorPicker.css';
import List from  './List'
import ColorRange from './ColorRange'
const arr =  [{name: 'red', value: '#ff0000'}, {name: 'blue', value: '#0066ff'}, {name: 'yellow', value: '#fff58a'}]

class ColorPicker extends React.Component {
	state = {
		listVisible: false,
		colorRangeVisible: false,
		currentColor: arr[0],
    draftColor: arr[0],
	};
	// value, onChange, color
	select = (item) => {
		this.props.selected = item;
	};


	show = (param) => {
	  //debugger;
	  // param === 'list' && this.setState({listVisible: true});
		// param === 'range' && this.setState({colorRangeVisible: true});
		// window.addEventListener("click", (e) =>{  this.hide(param, e)}, true);
	};

	hide = (param='list', e) => {
	  console.log(e);
		 param === 'list' && this.setState({listVisible: false});
		 param === 'range' && this.setState({colorRangeVisible: false});
		// window.removeEventListener("click", (e) => console.log(e, 'xx'));
	};

	toggleDrop = () => {
		this.setState((prevState) => (
		  { listVisible: !prevState.listVisible} ),
      () => { this.state.listVisible ? this.show('list') : this.hide('list')})
	};

	toggleRange = () => {
		this.setState((prevState) => (
		  { colorRangeVisible: !prevState.colorRangeVisible } ),
			() => { this.state.colorRangeVisible ? this.show('range') : this.hide('range')})
	};

	setColor = (color) => {
		this.setState({currentColor: color, draftColor: color});
	};

	setDraftColor = (color) => {
		this.setState({draftColor: color});
	};

	saveCurrentColor = () => {
		this.setState((prevState) => ({currentColor: prevState.draftColor}))
		this.toggleRange();
	};

	cancel = () => {
	  this.setState((prevState) => ({ draftColor: prevState.currentColor}));
		this.toggleRange();
	};

	closePopup = () => {
		this.setState({listVisible: false, colorRangeVisible: false,});
	}








	render() {
	  const { currentColor, draftColor, colorRangeVisible, listVisible } = this.state;

		return <div className="container">
		{(colorRangeVisible || listVisible) && <div className="back-drop" onClick={this.closePopup}></div>}
      <div className="content">
        <div className="current-color">
          {currentColor.value}
        </div>
        <div className="hexColor" >
          <div style={{backgroundColor: draftColor.value}} onClick={this.toggleRange}>xx</div>
					{this.state.colorRangeVisible &&
          <ColorRange color={draftColor.value}
                      onChange={this.setDraftColor}
                      saveCurrentColor={this.saveCurrentColor}
                      cancel={this.cancel}
          />}
        </div>
        <div className="dropRGB " onClick= {  (e) => {e.preventDefault(); this.toggleDrop()}} >
          <div className="fa fa-angle-down"></div>
        </div>
				{this.state.listVisible && <List arr={arr} onChange={this.setColor}/>}
      </div>
    </div>;
	}
}
// ColorPicker.propTypes = {
// 	onClick: PropTypes.func.isRequired,
// 	completed: PropTypes.bool.isRequired,
// 	text: PropTypes.string.isRequired
// };

export default ColorPicker