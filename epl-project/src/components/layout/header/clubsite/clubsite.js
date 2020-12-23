import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./style.css";
import Logo1 from "./images/club1.png"
import Logo2 from "./images/club2.png"
import Logo3 from "./images/club3.png"
import Logo4 from "./images/club4.png"
import Logo5 from "./images/club5.png"
import Logo6 from "./images/club6.png"
import Logo7 from "./images/club7.png"
import Logo8 from "./images/club8.png"
import Logo9 from "./images/club9.png"
import Logo10 from "./images/club10.png"
import Logo11 from "./images/club11.png"
import Logo12 from "./images/club12.png"
import Logo13 from "./images/club13.png"
import Logo14 from "./images/club14.png"
import Logo15 from "./images/club15.png"
import Logo16 from "./images/club16.png"
import Logo17 from "./images/club17.png"
import Logo18 from "./images/club18.png"
import Logo19 from "./images/club19.png"
import Logo20 from "./images/club20.png"
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
let list = [
  { name: Logo1 },
  { name: Logo2 },
  { name: Logo3 },
  { name: Logo4},
  { name: Logo5 },
  { name: Logo6 },
  { name: Logo7 },
  { name: Logo8 },
  { name: Logo9},
  { name: Logo10 },
  { name: Logo11 },
  { name: Logo12 },
  { name: Logo13 },
  { name: Logo14 },
  { name: Logo15 },
  { name: Logo16},
  { name: Logo17 },
  { name: Logo18 },
  { name: Logo19 },
  { name: Logo20 }
];

const MenuItem = ({ text, selected }) => {
  return  <Avatar style={{margin:'20px'}}  alt="Cindy Baker" src={text} />;
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return <MenuItem text={name} key={name} selected={selected} />;
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
      <div className="App">
        <ScrollMenu
          alignCenter={alignCenter}
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
