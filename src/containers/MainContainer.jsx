import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

/* Components */
import NavBar from '../components/NavBar';
import ItemCard from '../components/ItemCard';
import ModaView from '../components/ModaView';
import Grid from '@material-ui/core/Grid';

/* Import API IPMA */
import RequestIPMAService from "../providers/api";

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sStateValueSearch: '',
      bShowHideDetails: false,
      aItemDetail: [],
      aDistrictsOptionsORING: [],
      aDistrictsOptions: []
    };

    this.loadingDistricts = this.loadingDistricts.bind(this);
    this.openDistrictDetails = this.openDistrictDetails.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    //load the districts data from IPMA
    this.loadingDistricts();
  }

  loadingDistricts() {
    let aArrayTemp = [];
    RequestIPMAService.getDistricts().then(data => {
      for (let i = 0; i < data.data.length; i++) {
        aArrayTemp.push(data.data[i]);
      }
      this.setState({
        aDistrictsOptions: aArrayTemp,
        aDistrictsOptionsORING: aArrayTemp
      });
    });
    aArrayTemp = [];
  }

  openDistrictDetails(e, item){
    
    RequestIPMAService.getWeatherByDistrict(item.globalIdLocal).then(data => {      
      //add some important data to the object that will send to the modalview.
      item.forecast = data.data;
      item.forecastDataUpdate = new Date(data.dataUpdate).toLocaleString();
      
      this.setState({
        bShowHideDetails: true,
        aItemDetail: item
      });

    }).catch(error => {
      alert("Forecast for this district is not available right now. Please try again later.");
    });
  }

  handleSearch(evt){
    if(evt.target.value !== ""){
      let aResult = this.state.aDistrictsOptionsORING.filter((item)=>{
        return item.local.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1;
      });
      this.setState({ aDistrictsOptions: aResult });
    }else{
      this.setState({ aDistrictsOptions: this.state.aDistrictsOptionsORING });
    }
  };

  handleClose(){
    this.setState({ bShowHideDetails: false });
  };

  render() {
    return (
      <div>
        <NavBar onChangeSearch={evt => this.handleSearch(evt)}/>
        <Typography component="h2" variant="display1" gutterBottom style={this.state.aDistrictsOptions.length === 0 ? {margin: '20px'} : { display: 'none' }}>
          No district found
        </Typography>
        <Grid container >
          {this.state.aDistrictsOptions.map(item => (
            <Grid item xs={12} sm={6} md={3} key={item.globalIdLocal} onClick={e => this.openDistrictDetails(e, item)}>
              <ItemCard name={item.local} globalID={item.globalIdLocal}/>
            </Grid>            
          ))}
        </Grid>
        <ModaView open={this.state.bShowHideDetails} onClose={this.handleClose} item={this.state.aItemDetail}/>
      </div>
    );
  }
}

export default MainContainer;
