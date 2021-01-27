import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import { DataGrid } from '@material-ui/data-grid';
import Korea from "./son.jpg"
import England from "./england.png"
import Egypt from "./aicap.png"
import Portugal from "./portugal.png"
import Senegal from "./senegal.png"
import Belgium from "./belgium.png"
import Gabon from "./gabon.jpg"
import Germany from "./germany.png"
import France from "./france.png"
import Brazil from "./brasil.png"
import Spain from "./tbn.png"
import Tot from "../../images/club18.png"
import Arsernal from "../../images/club7.png"
import MU from "../../images/club5.png"
import MC from "../../images/club6.png"
import Chelsea from "../../images/club10.png"
import Liverpool from "../../images/club15.png"
import AstonVilla from "../../images/club19.png"
import Leisester from "../../images/club14.png"
import Everton from "../../images/club11.png"
import WestHam from "../../images/club19.png"
import Leed from "../../images/club13.png"

const columnFields= [
  {
    field: "name", 
    headerName: "Tên cầu thủ",
    flex:0.3
  },
  {
    field: "avatar", 
    filterable: false,
    disableColumnMenu: true,
    headerName: "Quốc tịch", 
    sortable: false,
    flex:0.2,
    renderCell: (params) => (
      <>
        <img src={params.value} style={{width:'50px',height:'40px'}}/>
      </>
    )
  },
  { 
    field: 'club', 
    headerName: "Câu lạc bộ",
    flex:0.3,
    renderCell: (params) => (
      <>
        <span><img src={
          params.value == "Tottemham Hostpur" ? Tot:
          (params.value == "Leisester City" ? Leisester :
          (
            params.value == "Liverpool" ?  Liverpool :
            (
              params.value == "Manchester United" ? MU:
              (
                params.value == "Manchester City" ? MC :
                (
                  params.value == "Aston Villa" ? AstonVilla :
                  (
                    params.value == "Chelsea" ? Chelsea :
                    (
                      params.value == "Everton"?Everton :(
                        params.value == "West Ham United"? WestHam :  Arsernal
                      )
                    )
                  
                  )
                 
                )
              )
            )
          ))
        } 
        style={{width:'30px',marginTop:'15px'}}/></span>
        <span style={{marginLeft:5}}>{params.value}</span>
      </>
    )
  },
  {
    field: "goal", 
    headerName: "Số kiến tạo",
    flex:0.2
  },
]

const dataFields = [
  {id:'1',avatar: England,name:'Harry Kane',club:'Tottemham Hostpur',goal:11},
  {id:'2',avatar: Belgium,name:'Kevin De Bruyne',club:'Manchester City',goal:10},
  {id:'3',avatar: England,name:'Jack Grealish',club:'Aston Villa',goal:8},
  {id:'4',avatar: Portugal,name:'Bruno Fernandes',club:'Manchester United',goal:7},
  {id:'5',avatar: Korea, name:'Son Heugh-min',club:'Tottemham Hostpur',goal:6},
  {id:'6',avatar: England,name:'Aaron Cresswell',club:'West Ham United',goal:5},
  {id:'7',avatar: France,name:'Lucas Digne',club:'Everton',goal:5},
  {id:'8',avatar: England,name:'Marcus Rashford',club:'Manchester United',goal:5},
  {id:'9',avatar: England,name:'Andrew Robertson',club:'Liverpool',goal:5},
  {id:'10',avatar: England,name:'Jamie Vardy',club:'Leisester City',goal:5},
  {id:'11',avatar: England,name:'Ben Chiwell',club:'Chelsea',goal:4},
  {id:'12',avatar: Gabon,name:'Pierre-Emerick Aubameyang',club:'Arsernal',goal:4},
  {id:'13',avatar: Germany,name:'Timo Werner',club:'Chelsea',goal:3},
  {id:'14',avatar: France,name:'Paul Pogba',club:'Manchester United',goal:3},
  {id:'15',avatar: England,name:'Trent Alexander-Arnold',club:'Liverpool',goal:3},
  {id:'16',avatar: England,name:'Jesse Lingard',club:'Manchester United',goal:1},
  {id:'18',avatar: Germany,name:'Antonio Rüdiger',club:'Chelsea',goal:1},
  {id:'19',avatar: Spain,name:'Thiago Alcantara',club:'Liverpool',goal:1},
  {id:'20',avatar: Brazil,name:'Thiago Silva',club:'Chelsea',goal:1}
]

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingLeft: 20,
  },
});

function RatingInputValue(props) {
  const classes = useStyles();
  const { item, applyValue } = props;

  const handleFilterChange = (event) => {
    applyValue({ ...item, value: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Rating
        name="custom-rating-filter-operator"
        placeholder="Filter value"
        value={Number(item.value)}
        onChange={handleFilterChange}
        precision={0.5}
      />
    </div>
  );
}

RatingInputValue.propTypes = {
  applyValue: PropTypes.func.isRequired,
  item: PropTypes.shape({
    columnField: PropTypes.string,
    id: PropTypes.number,
    operatorValue: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
};

const filterModel = {
  items: [{ columnField: 'club'}],
};

export default function CustomRatingFilterOperator() {


  // React.useEffect(() => {
  //   if (data.columns.length > 0) {
  //     const ratingColumn = data.columns.find((column) => column.field === 'rating');

  //     ratingColumn.filterOperators = getNumericColumnOperators().map((operator) => ({
  //       ...operator,
  //       InputComponent: RatingInputValue,
  //     }));

  //     setColumns(data.columns);
  //   }
  // }, [data.columns]);

  return (
    <div style={{ height: '40rem', width: '100%' }}>
      <DataGrid 
      rows={dataFields} 
      columns={columnFields} 
      filterModel={filterModel} 
      rowsPerPageOptions={[10,20,30]}
      pageSize={10}
      
      />
    </div>
  );
}
