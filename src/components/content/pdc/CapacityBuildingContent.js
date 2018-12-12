/** Natives **/
import React, { Component } from 'react';

/** CSS **/
import './CapacityBuildingContent.css';

/** Logos **/
import mapIMG from "../../../assets/images/logos/map.png";

/** Material UI **/
import Grid           from '@material-ui/core/Grid';

/** Components **/
import WidgetGraph from "../../widget/Graph";
import WidgetIndicator from "../../widget/Indicator";

/** Plugins **/
import { VictoryChart }  from 'victory';
import { VictoryAxis  }  from 'victory';
import { VictoryBar  }  from 'victory';
import { VictoryTooltip }  from 'victory';

class CapacityBuildingContent extends Component {
  //------------------------------------------------------------------------//
  //-------------------------------- Render --------------------------------//
  //------------------------------------------------------------------------//
  render() {
    /**
     * This function is used to create the data for the graphs
     */
    const tableToData = function (data, customLabel, dataDisplayed, sortingChoice) {
      let dataSort = function (a, b) {
        if (a.y < b.y) {
          return -1;
        } else if (a.y > b.y) {
          return 1;
        } else {
          return 0;
        }
      };
      let res = [];
      for (let i=data.length-1; i>=0; i--)
      {
        res.push({
          x: data[i].label,
          y: data[i][dataDisplayed],
          label: data[i][dataDisplayed] + " " + customLabel
        })
      }
      switch (sortingChoice) {
        case "data":
          res.sort(dataSort);
          break;
        default:
      }
      return res;
    };

    return (
        // The padding prevent the page to be too wide because of the option spacing
        <div style={{ padding: 12 }}>
          {this.props.importedData &&
          (
              <div>
                {/* First row */}
                <Grid container spacing={24} className="content-row">  {/* Spacing = space between cards */}
                  {/* Organizations supported */}
                  <Grid item xs={12} sm={6} md={3}>
                    {this.props.importedData.pdc.capacitybuilding.nborganizations &&
                    (<WidgetIndicator title={this.props.importedData.pdc.capacitybuilding.nborganizations.title}
                                      img={mapIMG}
                                      data={this.props.importedData.pdc.capacitybuilding.nborganizations.data.length}/>)}
                  </Grid>

                </Grid>

                {/* Second row */}
                <Grid container spacing={24} className="content-row">  {/* Spacing = space between cards */}
                  {/* Number of attendees monthly */}
                  <Grid item xs={12} sm={6} md={4}>
                    {this.props.importedData.pdc.capacitybuilding.nbAttendeesMonthly &&
                    (<WidgetGraph title = {this.props.importedData.pdc.capacitybuilding.nbAttendeesMonthly.title}
                                  graph = {<VictoryChart domainPadding={15}>
                                    <VictoryAxis
                                        style = {{ tickLabels: { padding: 20 } }}
                                    />
                                    <VictoryAxis
                                        dependentAxis
                                        style = {{ tickLabels: { padding: 20 } }}
                                    />
                                    {<VictoryBar
                                        barRatio={0.5}
                                        labelComponent={<VictoryTooltip/>}
                                        style  = {{ data: { fill: "#D73F3F" } }}
                                        data   = {tableToData(this.props.importedData.pdc.capacitybuilding.nbAttendeesMonthly.data, "people trained", "value")}
                                    />}
                                  </VictoryChart>
                                  }/>

                    )}
                  </Grid>

                  {/* Number of attendees trained per institutions */}
                  <Grid item xs={12} sm={6} md={4}>
                    {this.props.importedData.pdc.capacitybuilding.nbAttendeesInstitutions &&
                    (<WidgetGraph title = {this.props.importedData.pdc.capacitybuilding.nbAttendeesInstitutions.title}
                                  graph = {<VictoryChart domainPadding={15}>
                                    <VictoryAxis
                                        style={{ tickLabels: { padding: 20, angle: 315, verticalAnchor: "middle" } }}
                                    />
                                    <VictoryAxis
                                        dependentAxis
                                    />
                                    {<VictoryBar vertical
                                                 labelComponent={<VictoryTooltip/>}
                                                 style  = {{ data: { fill: "#D73F3F" } }}
                                                 data   = {tableToData(this.props.importedData.pdc.capacitybuilding.nbAttendeesInstitutions.data, "attendees", "value", "data")}
                                    />}
                                  </VictoryChart>}
                                  data = {this.props.importedData.pdc.capacitybuilding.nbAttendeesInstitutions.data}
                        />

                    )}
                  </Grid>

                     {/* Number of attendees trained per institutions */}
                     <Grid item xs={12} sm={6} md={4}>
                    {this.props.importedData.pdc.capacitybuilding.nbAttendeesTraining &&
                    (<WidgetGraph title = {this.props.importedData.pdc.capacitybuilding.nbAttendeesTraining.title}
                                  graph = {<VictoryChart domainPadding={15}>
                                    <VictoryAxis
                                        style={{ tickLabels: { padding: 20, angle: 315, verticalAnchor: "middle" } }}
                                    />
                                    <VictoryAxis
                                        dependentAxis
                                    />
                                    {<VictoryBar
                                        barRatio={0.5}
                                        labelComponent={<VictoryTooltip/>}
                                        style  = {{ data: { fill: "#D73F3F" } }}
                                        data   = {tableToData(this.props.importedData.pdc.capacitybuilding.nbAttendeesTraining.data, "trainings", "value")}
                                    />}
                                  </VictoryChart>}
                                  data = {this.props.importedData.pdc.capacitybuilding.nbAttendeesTraining.data}
                        />

                    )}
                  </Grid>

                  {/* Number of workshops per month */}
                  <Grid item xs={12} sm={6} md={4}>
                    {this.props.importedData.pdc.capacitybuilding.nbWorkshopsMonthly &&
                    (<WidgetGraph title = {this.props.importedData.pdc.capacitybuilding.nbWorkshopsMonthly.title}
                                  graph = {<VictoryChart domainPadding={15}>
                                    <VictoryAxis
                                        style={{ tickLabels: { padding: 20 } }}
                                    />
                                    <VictoryAxis
                                        dependentAxis
                                    />
                                    <VictoryBar
                                        barRatio={0.5}
                                        labelComponent={<VictoryTooltip/>}
                                        style  = {{ data: { fill: "#D73F3F" } }}
                                        data   = {tableToData(this.props.importedData.pdc.capacitybuilding.nbWorkshopsMonthly.data, "workshops", "value")}
                                    />
                                  </VictoryChart>}
                        />

                    )}
                  </Grid>
                </Grid>
              </div>
          )}
        </div>
    );
  }
}

export default CapacityBuildingContent;
