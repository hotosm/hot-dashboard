/** Natives **/
import React, { Component } from 'react';

/** CSS **/
import './CapacityBuildingContent.css';

/** Logos **/
import mapathonsIMG from "../../../assets/images/logos/mapathons.png";

/** Material UI **/
import Grid           from '@material-ui/core/Grid';

/** Components **/
import WidgetIndicator from "../../widget/Indicator";
import WidgetGraph from "../../widget/Graph";

/** Plugins **/
import { VictoryChart }  from 'victory';
import { VictoryAxis  }  from 'victory';
import { VictoryBar  }  from 'victory';
import { VictoryTooltip }  from 'victory';
import { VictoryStack }  from 'victory';

class CommunityContent extends Component {
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
            {/* Events conducted */}
            <Grid item xs={12} sm={6} md={3}>
              {this.props.importedData.dummyproject.community.nbEvents &&
              (<WidgetIndicator title={this.props.importedData.dummyproject.community.nbEvents.title}
                                img={mapathonsIMG}
                                data={this.props.importedData.dummyproject.community.nbEvents.value}/>)}
            </Grid>
          </Grid>

          {/* Second row */}
          <Grid container spacing={24} className="content-row">  {/* Spacing = space between cards */}
            {/* Number of people participating in an event */}
            <Grid item xs={12} sm={6} md={4}>
              {this.props.importedData.dummyproject.community.nbParticipantsGender &&
              (<WidgetGraph title = {this.props.importedData.dummyproject.community.nbParticipantsGender.title}
                            graph = {<VictoryChart domainPadding={18}>
                              <VictoryAxis
                                  style={{ tickLabels: { padding: 20 } }}
                              />
                              <VictoryAxis
                                  dependentAxis
                              />
                              <VictoryStack>
                                <VictoryBar
                                    labelComponent={<VictoryTooltip/>}
                                    style  = {{ data: { fill: "#D73F3F" } }}
                                    data   = {tableToData(this.props.importedData.dummyproject.community.nbParticipantsGender.data, "women participants", "female")}
                                />
                                <VictoryBar
                                    labelComponent={<VictoryTooltip/>}
                                    style  = {{ data: { fill: "#FAA71E" } }}
                                    data   = {tableToData(this.props.importedData.dummyproject.community.nbParticipantsGender.data, "men participants", "male")}
                                />
                              </VictoryStack>
                            </VictoryChart>
                            }/>
              )}
            </Grid>

            {/* Number of people participating in an event */}
            <Grid item xs={12} sm={6} md={4}>
              {this.props.importedData.dummyproject.community.nbParticipantsNew &&
              (<WidgetGraph title = {this.props.importedData.dummyproject.community.nbParticipantsNew.title}
                            graph = {<VictoryChart domainPadding={18}>
                              <VictoryAxis
                                  style={{ tickLabels: { padding: 20 } }}
                              />
                              <VictoryAxis
                                  dependentAxis
                              />
                              <VictoryStack>
                                <VictoryBar
                                    labelComponent={<VictoryTooltip/>}
                                    style  = {{ data: { fill: "#D73F3F" } }}
                                    data   = {tableToData(this.props.importedData.dummyproject.community.nbParticipantsNew.data, "new participants", "new")}
                                />
                                <VictoryBar
                                    labelComponent={<VictoryTooltip/>}
                                    style  = {{ data: { fill: "#FAA71E" } }}
                                    data   = {tableToData(this.props.importedData.dummyproject.community.nbParticipantsNew.data, "old participants", "old")}
                                />
                              </VictoryStack>
                            </VictoryChart>
                            }/>
                  )}
                </Grid>

                {/* Number of people participating in an event aggregated by training type */}
                <Grid item xs={12} sm={6} md={4}>
                  {this.props.importedData.dummyproject.community.nbParticipantsType &&
                  (<WidgetGraph title = {this.props.importedData.dummyproject.community.nbParticipantsType.title}
                                graph = {<VictoryChart domainPadding={15}>
                                  <VictoryAxis
                                      style={{ tickLabels: { padding: 30 } }}
                                  />
                                  <VictoryAxis
                                      dependentAxis
                                  />
                                  <VictoryBar
                                      labelComponent={<VictoryTooltip/>}
                                      style  = {{ data: { fill: "#D73F3F" } }}
                                      data   = {tableToData(this.props.importedData.dummyproject.community.nbParticipantsType.data, "participants", "value")}
                                  />
                                </VictoryChart>
                                }/>
                  )}
                </Grid>
              </Grid>
            </div>
          )}
        </div>
    );
  }
}

export default CommunityContent;
