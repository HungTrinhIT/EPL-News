import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import { DataGrid} from '@material-ui/data-grid';
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
import Netherland from "./netherland.png"
import Tot from "../../images/club18.png"
import Arsernal from "../../images/club7.png"
import MU from "../../images/club5.png"
import MC from "../../images/club6.png"
import Chelsea from "../../images/club10.png"
import Liverpool from "../../images/club15.png"
import AstonVilla from "../../images/club19.png"
import Leisester from "../../images/club14.png"

const columnFields= [
  {
    field: "name", 
    headerName: "Tên cầu thủ",
    flex:1
  },
  {
    field: "avatar", 
    filterable: false,
    disableColumnMenu: true,
    headerName: "Quốc tịch", 
    sortable: false,
    flex:0.5,
    renderCell: (params) => (
      <>
        <img src={params.value} style={{width:'50px',height:'40px'}}/>
      </>
    )
  },
  { 
    field: 'club', 
    headerName: "Câu lạc bộ",
    flex:0.5,
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
                    Arsernal
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
    headerName: "Giá trị cầu thủ",
    flex:1
  },
]

const dataFields = [
  {id:'1',avatar: Belgium,name:'Kevin De Bruyne',club:'Manchester City',goal:'€120.00m'},
  {id:'2',avatar: Egypt,name:'Mohamed Salah',club:'Liverpool',goal:'€120.00m'},
  {id:'3',avatar: England,name:'Harry Kane',club:'Tottemham Hostpur',goal:'€120.00m'},
  {id:'4',avatar: Senegal,name:'Sadio Mane',club:'Liverpool',goal:'€120.00m'},
  {id:'5',avatar: England,name:'Trent Alexander-Arnold',club:'Liverpool',goal:'€110.00m'},
  {id:'6',avatar: England,name:'Raheem Sterling',club:'Manchester City',goal:'€110.00m'},
  {id:'7',avatar: Korea, name:'Son Heugh-min',club:'Tottemham Hostpur',goal:'€90.00m'},
  {id:'8',avatar: Portugal,name:'Bruno Fernandes',club:'Manchester United',goal:'€90.00m'},
  {id:'9',avatar: Germany,name:'Kai Havertz',club:'Chelsea',goal:'€81.00m'},
  {id:'10',avatar: Netherland,name:'Virgil van Dijk',club:'Liverpool',goal:'€80.00m'},
  {id:'11',avatar: England,name:'Marcus Rashford',club:'Manchester United',goal:'€80.00m'},
  {id:'12',avatar: Brazil,name:'Roberto Firmino',club:'Liverpool',goal:'€72.00m'},
  {id:'13',avatar: Portugal,name:'Bernardo Silva',club:'Manchester City',goal:'€70.00m'},
  {id:'14',avatar: Germany,name:'Timo Werner',club:'Chelsea',goal:'€70.00m'},
  {id:'15',avatar: France,name:'Paul Pogba',club:'Manchester United',goal:'€65.00m'},
  {id:'16',avatar: Spain,name:'Rodri',club:'Manchester City',goal:'€64.00m'},
  {id:'17',avatar: France,name:'Aymeric Laporte',club:'Manchester United',goal:'€60.00m'},
  {id:'18',avatar: England,name:'Phil Foden',club:'Manchester City',goal:'€60.00m'},
  {id:'19',avatar: Portugal,name:'Ruben Dias',club:'Manchester City',goal:'€60.00m'},
  {id:'20',avatar: France,name:"N'Golo Kante",club:'Chelsea',goal:'€60.00m'},
  {id:'21',avatar: Brazil,name:'Gabriel Jesus',club:'Manchester City',goal:'€60.00m'}
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
