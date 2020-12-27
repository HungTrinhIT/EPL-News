import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./style.css";
import Logo1 from "../../../images/club1.png"
import Logo2 from "../../../images/club2.png"
import Logo3 from "../../../images/club3.png"
import Logo4 from "../../../images/club4.png"
import Logo5 from "../../../images/club5.png"
import Logo6 from "../../../images/club6.png"
import Logo7 from "../../../images/club7.png"
import Logo8 from "../../../images/club8.png"
import Logo9 from "../../../images/club9.png"
import Logo10 from "../../../images/club10.png"
import Logo11 from "../../../images/club11.png"
import Logo12 from "../../../images/club12.png"
import Logo13 from "../../../images/club13.png"
import Logo14 from "../../../images/club14.png"
import Logo15 from "../../../images/club15.png"
import Logo16 from "../../../images/club16.png"
import Logo17 from "../../../images/club17.png"
import Logo18 from "../../../images/club18.png"
import Logo19 from "../../../images/club19.png"
import Logo20 from "../../../images/club20.png"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from "./card"

let list = [
  { club1:Logo1,name1: "NewCastle",club2: Logo2, name2:"Crystal Palace",time:"06/12 - 19h00"},
  { club1:Logo3,name1: "Brighton",club2: Logo4, name2:"Southamton",time:"06/12 - 19h00"},
  { club1:Logo5,name1: "Manchester United",club2: Logo6, name2:"Manchester City",time:"06/12 - 19h00"},
  { club1:Logo7,name1: "Arsernal",club2: Logo8, name2:"Aston Villa",time:"06/12 - 19h00"},
  { club1:Logo9,name1: "Burley",club2: Logo10, name2:"Chelsea",time:"06/12 - 19h00"},
  { club1:Logo11,name1: "Eveton",club2: Logo12, name2:"Lee United",time:"06/12 - 19h00"},
];

const MenuItem = (props) => {
  return  <Card data={props.data}/>;
};

export const Menu = (list, selected) =>
  list.map((el,index) => {
   

    return <MenuItem data={el} key={index} selected={selected} />;
  });

const Arrow = ({ text, className }) => {
  return text == "<" ? <ArrowBackIosIcon/> : <ArrowForwardIosIcon/>
  
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class App extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    scrollToSelected: false,
    selected: "item1",
    translate: 0,
    transition: 0.3,
    wheel: true
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  onFirstItemVisible = () => {
    console.log("first item is visible");
  };

  onLastItemVisible = () => {
    console.log("last item is visible");

    // const newItems = Array(5)
    //   .fill(1)
    //   .map((el, ind) => ({ name: `item${list.length + ind + 1}` }));
    // list = list.concat(newItems);
    // this.menuItems = Menu(list, list.slice(-1)[0].name);
    // this.setState({
    //   itemsCount: list.length,
    //   selected: this.state.selected
    // });
  };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;

    const checkboxStyle = {
      margin: "5px 10px"
    };
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };

    return (   
      <div >
      <h2>Lịch thi đấu</h2>
        <ScrollMenu
          alignCenter={false}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />

       
      </div>
     
    );
  }
}

export default App;
