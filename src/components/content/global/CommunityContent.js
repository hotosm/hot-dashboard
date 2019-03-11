/** Natives **/
import React, { Component } from 'react';

/** CSS **/
import './CommunityContent.css';

/** Logos **/
import mapIMG        from '../../../assets/images/logos/map.png';
import mapathonsIMG  from '../../../assets/images/logos/mapathons.png';
import projectsIMG   from '../../../assets/images/logos/projects.png';
import trainingIMG   from '../../../assets/images/logos/training.png';

/** Material UI **/
import Typography       from '@material-ui/core/Typography';
import Card             from '@material-ui/core/Card';
import CardContent      from '@material-ui/core/CardContent';
import Grid             from '@material-ui/core/Grid';

/** Components **/
import WidgetIndicator from '../../widget/Indicator';
import WidgetGraph     from '../../widget/Graph';

/** Plugins **/
import { VictoryPie   }  from 'victory';
import { VictoryChart }  from 'victory';
import { VictoryLine  }  from 'victory';
import { VictoryBar   }  from 'victory';
import { VictoryAxis   }  from 'victory';
import { VictoryTooltip   }  from 'victory';
import { VictoryStack   }  from 'victory';
import { VictoryGroup   }  from 'victory';
import { VictoryScatter   }  from 'victory';
import CardHeader from "@material-ui/core/CardHeader/CardHeader";

class CommunityContent extends Component {
  //------------------------------------------------------------------------//
  //-------------------------------- Render --------------------------------//
  //------------------------------------------------------------------------//
  render() {
    return (
      <div style={{ padding: 12 }}>
        {this.props.importedData.global &&
        (<div>
            {/* First row */}
            <Grid container spacing={24} className="content-row">
              <Grid item xs={12} sm={6} md={3}>
                {this.props.importedData && (<WidgetIndicator title="This is a 'WidgetIndicator'"
                                                              img={mapIMG}
                                                              data={200}/>)}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {this.props.importedData && (<WidgetIndicator title="Indicator example 2"
                                                              img={trainingIMG}
                                                              data={125}/>)}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {this.props.importedData && (<WidgetIndicator title="Indicator example 3"
                                                              img={projectsIMG}
                                                              data={47859856}/>)}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                {this.props.importedData && (<WidgetIndicator title="Indicator example 4"
                                                              img={mapathonsIMG}
                                                              data={42}/>)}
              </Grid>
            </Grid>
            {/* En of the first row */}

            {/* Second row */}
            <Grid container spacing={24} className="content-row">
              {/* Bar diagram example */}
              <Grid item xs={12} sm={6} md={4}>
                {this.props.importedData.global.capacitybuilding.attendeesAndInstitutions &&
                (<WidgetGraph title = "Bar diagram example"
                              graph = {<VictoryChart domainPadding={15}>
                                <VictoryAxis
                                  style={{ tickLabels: { padding: 20, angle: -0 } }}
                                />
                                <VictoryAxis
                                  dependentAxis
                                />
                                {<VictoryBar
                                  labelComponent={<VictoryTooltip/>}
                                  style  = {{ data: { fill: "#D73F3F" } }}
                                  data   = {[
                                    { x: "Jan 2015",
                                      y: 12,
                                      label: 12 + " institutions trained"
                                    },
                                    { x: "Apr 2015",
                                      y: 11,
                                      label: 11 + " institutions trained"
                                    },
                                    { x: "May 2018",
                                      y: 42,
                                      label: 42 + " institutions trained"
                                    },
                                    { x: "Aug 2018",
                                      y: 58,
                                      label: 58 + " institutions trained"
                                    },
                                  ]}
                                />}
                              </VictoryChart>
                              }/>

                )}
              </Grid>

              {/* Custom widget */}
              <Grid item xs={12} sm={6} md={4}>
                {this.props.importedData && (
                  <Card className="widget-container">
                    <CardHeader
                      title="Custom widget"
                    />
                    <CardContent className="widget-text">
                      <div className="widget-mappedElements-text">
                        <Typography className="widget-mappedElements-text-item-green" color="primary">
                          {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits : 0,
                            maximumFractionDigits : 0
                          }).format(142535689)} Buildings</Typography>
                        <Typography className="widget-mappedElements-text-item-grey">
                          {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits : 0,
                            maximumFractionDigits : 0
                          }).format(35648698948)} Roads</Typography>
                      </div>
                    </CardContent>
                  </Card>)}
              </Grid>

              {/* Double bar chart example */}
              <Grid item xs={12} sm={6} md={4}>
                {this.props.importedData &&
                (<WidgetGraph title = "Double bar chart example"
                              graph = {<VictoryChart domainPadding={15}>
                                <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
                                  <VictoryStack>
                                    {<VictoryBar
                                      labelComponent={<VictoryTooltip/>}
                                      style  = {{ data: { fill: "#D73F3F" } }}
                                      data   = {[
                                        { x: "Jan 2012",
                                          y: 15,
                                          label: 15 + " people trained"
                                        },
                                      ]}
                                    />}
                                  </VictoryStack>
                                  <VictoryStack>
                                    {<VictoryBar
                                      labelComponent={<VictoryTooltip/>}
                                      style  = {{ data: { fill: "#FAA71E" } }}
                                      data   = {[
                                        { x: "Jan 2012",
                                          y: 7,
                                          label: 7 + " institutions trained"
                                        },
                                      ]}
                                    />}
                                  </VictoryStack>
                                </VictoryGroup>
                              </VictoryChart>
                              }/>

                )}
              </Grid>

              {/* Line chart example */}
              <Grid item xs={12} sm={6} md={4}>
                {this.props.importedData.global &&
                (<WidgetGraph title = "Line chart example"
                              graph = {<VictoryChart domainPadding={15}>
                                <VictoryLine
                                  style={{
                                    data   : { stroke: "#FAA71E" },
                                    parent : { border: "1px solid #ccc"}
                                  }}
                                  data = {[
                                    { x: '2014', y: 133 },
                                    { x: '2015', y: 230 },
                                    { x: '2016', y: 274 },
                                    { x: '2017', y: 138 },
                                    { x: '2018', y: 54 }
                                  ]}
                                />
                              </VictoryChart>}/>
                )}
              </Grid>

              {/* Pie chart example */}
              <Grid item xs={12} sm={6} md={4}>
                {this.props.importedData.global && (
                  <WidgetGraph title = "Pie chart example"
                               graph = {<VictoryPie
                                 padAngle    = {2}
                                 innerRadius = {100}
                                 width       = {475}
                                 colorScale  = {[ "#FAA71E", "#D73F3F"]}
                                 style={{ labels: {fontSize: 18} }}
                                 data = {[
                                   { x: "Women", y: 51 },
                                   { x: "Men",   y: 49 },
                                 ]}
                               />}/>)}
              </Grid>

              {/* Scatter plot example */}
              <Grid item xs={12} sm={6} md={4}>
                {this.props.importedData.global && (
                  <WidgetGraph title = "Scatter plot example"
                               graph = {<VictoryChart domainPadding={15}>
                                 <VictoryScatter
                                   style={{ data: { fill: "#D73F3F" } }}
                                   size={4}
                                   data={[
                                     { x: '2014', y: 133 },
                                     { x: '2015', y: 230 },
                                     { x: '2016', y: 274 },
                                     { x: '2017', y: 138 },
                                     { x: '2018', y: 54 }
                                   ]}
                                 />
                               </VictoryChart>}/>)}
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default CommunityContent;