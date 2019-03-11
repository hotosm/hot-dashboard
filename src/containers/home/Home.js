/** Natives **/
import React from 'react';

/** Containers **/
import Header             from '../../components/header/Header'
import Footer             from '../../components/footer/Footer'
import FilterTabs         from '../../components/filter/ContentFilter'
import MappingContentGlobal        from '../../components/content/global/MappingContent'

/** CSS **/
import './Home.css';

/** Services **/
import Reader from "../../core/utils/Reader";

/** Material **/
import Divider         from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

// This will be used to retrieve the stored data
const reader = new Reader();

/**
 * This component will be composed of multiple parts
 */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.selectProjectFromHeader     = this.selectProjectFromHeader.bind(this);
    this.selectContentFromFilterTabs = this.selectContentFromFilterTabs.bind(this);
    this.state = {
      MappingContent                  : MappingContentGlobal, // Only one component for the global project
      CapacityBuildingContent         : null,
      AwarenessContent                : null,
      CommunityContent                : null,
      menuLeft                        : false,    // State of the left menu.
      mappingContentSelected          : true,     // When Mapping Content is selected (selected by default)
      capacityBuildingContentSelected : false,    // When Capacity Building Content is selected
      awarenessContentSelected        : false,    // When Awareness Content is selected
      CommunitySelected               : false,    // When Community Content is selected

      //By default, the global project and the main content are displayed
      projectName : 'Global', // Name of the actual project
      contentName : 'Main',   // Name of the actual content

      importedProjects : [],
      importedData     : [],
      loading          : true, // In order to use the loader
    };
  }

  //------------------------------------------------------------------------//
  //---------------------------------- Init --------------------------------//
  //------------------------------------------------------------------------//
  /** Call the data from the amazon bucket once the page is rendered **/
  async componentDidMount() {
    this.setState({importedData : await new Promise((resolve,reject) => {
        // Getting data from the preprocessed file
        reader.getJsonFromAWS()
          .then((data) =>{
            // Getting the projects names available
            let projectsNames = data.projectNames;
            // This push is only here to add the demo project manually to the project list don't forget to remove it
            projectsNames["demo"] = "demo";
            this.setState({
              importedProjects: projectsNames,
              loading: false
            });
            resolve(data);
          })
          .catch((error) =>{
            this.setState({importedProjects: []});
            reject(error);
          });
      })
      // This .then function is only here to add fake content in order to display the menu buttons on the demo dashboard
      // Don't forget to remove it too
        .then(function(res) {
            res["demo"] = {
              mapping: {data : "yes"},
              capacitybuilding: {data : "yes"},
              awareness: {data : "yes"},
              community: {data : "yes"}
            };
            return res;
          }
        )
    });
  }

  //------------------------------------------------------------------------//
  //---------------------- Project & Content display -----------------------//
  //------------------------------------------------------------------------//
  /** Selecting the project from the header button **/
  async selectProjectFromHeader(selectedProjectFromHeader){
    // Because the title can have spaces, the names are stored in an object that is used as a mapper
    // with the right attributes
    const projectSelected = this.state.importedData.projectNames[selectedProjectFromHeader];
    this.setState({
      loading: true
    });
    import('../../components/content/'+projectSelected+'/MappingContent')
      .then((res) => this.setState({MappingContent : res.default}));
    import('../../components/content/'+projectSelected+'/CapacityBuildingContent')
      .then((res) => this.setState({CapacityBuildingContent : res.default}));
    import('../../components/content/'+projectSelected+'/AwarenessContent')
      .then((res) => this.setState({AwarenessContent : res.default}));
    import('../../components/content/'+projectSelected+'/CommunityContent')
      .then((res) => this.setState({CommunityContent : res.default}));
    projectSelected === "global" ?
      this.setState({
        contentName                     : 'Main',
        mappingContentSelected          : true,
        capacityBuildingContentSelected : false,
        awarenessContentSelected        : false,
        communityContentSelected        : false,
        projectName                     : selectedProjectFromHeader,
        loading: false
      }) :
      this.setState({
        contentName                     : 'Mapping',
        mappingContentSelected          : true,
        capacityBuildingContentSelected : false,
        awarenessContentSelected        : false,
        communityContentSelected        : false,
        projectName                     : selectedProjectFromHeader,
        loading: false
      });
  }

  /** Selecting the new content chosen in the filter tabs component **/
  async selectContentFromFilterTabs(selectedContent){
    this.setState({
      loading: true
    });
    this.setState({
      contentName                     : selectedContent[0].contentName,
      mappingContentSelected          : selectedContent[0].mappingContent,
      capacityBuildingContentSelected : selectedContent[0].capacityBuildingContent,
      awarenessContentSelected        : selectedContent[0].awarenessContent,
      communityContentSelected        : selectedContent[0].communityContent,
      loading: false
    });
  }

  //------------------------------------------------------------------------//
  //-------------------------------- Render --------------------------------//
  //------------------------------------------------------------------------//
  render() {
    const { mappingContentSelected }          = this.state;
    const { capacityBuildingContentSelected } = this.state;
    const { awarenessContentSelected }        = this.state;
    const { communityContentSelected }        = this.state;
    const { importedData }                    = this.state;

    return (
      <div className="Home">
        {/* Header */}
        <Header sendToHome={this.selectProjectFromHeader} contentName={this.state.contentName} importedProjects={this.state.importedProjects}/>

        {/* Filter Tabs */}
        {this.state.contentName !== "Main"          && (<FilterTabs sendToHome={this.selectContentFromFilterTabs} contentName={this.state.contentName} importedData={importedData[this.state.importedData.projectNames[this.state.projectName]]}></FilterTabs>)}
        {/* Line between filter component & content*/}
        {this.state.contentName !== "Main"          && (<Divider />)}

        {/* Loader waiting for the data */}
        {this.state.loading          && (<CircularProgress id="loader" className={"loader"} thickness={7} />)}
        {/* Contents */}
        {!this.state.loading         && mappingContentSelected          && (<this.state.MappingContent          importedData = {importedData}/>)}
        {!this.state.loading         && capacityBuildingContentSelected && (<this.state.CapacityBuildingContent importedData = {importedData}/>)}
        {!this.state.loading         && awarenessContentSelected        && (<this.state.AwarenessContent        importedData = {importedData}/>)}
        {!this.state.loading         && communityContentSelected        && (<this.state.CommunityContent        importedData = {importedData}/>)}

        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default Home;
