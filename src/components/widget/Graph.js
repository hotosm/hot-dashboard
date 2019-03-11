/** Natives **/
import React, { Component } from 'react';

/** Material UI **/
import Card           from '@material-ui/core/Card';
import CardHeader     from '@material-ui/core/CardHeader';
import CardContent    from '@material-ui/core/CardContent';
import IconButton     from "@material-ui/core/IconButton/IconButton";
import MoreVertIcon   from '@material-ui/icons/MoreVert';
import CloseIcon      from '@material-ui/icons/Close';
import Dialog         from "@material-ui/core/Dialog/Dialog";
import DialogContent  from "@material-ui/core/DialogContent/DialogContent";
import Button         from "@material-ui/core/Button/Button";
import DialogActions  from "@material-ui/core/DialogActions/DialogActions";

/** CSS **/
import './Widget.css';

class WidgetGraph extends Component {
  constructor(props) {
    super(props);
    this.displayInfos = this.displayInfos.bind(this);
    this.hideInfos    = this.hideInfos.bind(this);
    this.state = {
      anchorProject : null,
    };
  }

  //------------------------------------------------------------------------//
  //--------------------------- Content display ----------------------------//
  //------------------------------------------------------------------------//
  /** Open the panel that display the informations **/
  displayInfos = () => {
    this.setState({
      anchorProject: true
    });
  };

  /** Hide the panel that display the informations **/
  hideInfos = () => {
    this.setState({ anchorProject: false });
  };

  //------------------------------------------------------------------------//
  //-------------------------------- Render --------------------------------//
  //------------------------------------------------------------------------//
  render() {
    const dataDesc = function (data) {
      let res = [];
      for (let i=0; i<data.length; i++)
      {
        res.push(
            <tr key={i}>
              <td>{data[i].label}</td>
              <td width="40px"/>
              <td>{data[i].extend}</td>
            </tr>
        );
      }
      return res;
    };

    const { anchorProject } = this.state;

    return (
      <div>
        <Card className="widget-container">
          <CardHeader
              action={this.props.data !== undefined ?
                    (<IconButton
                        aria-owns={anchorProject ? 'DisplayInfos' : null}
                        variant="contained"
                        component="span"
                        onClick={this.displayInfos}>
                      <MoreVertIcon/>
                    </IconButton>)
                    : ""
              }
              title={this.props.title}
          />
          <CardContent className="widget-text">
            {this.props.graph}
          </CardContent>
        </Card>
        {this.state.anchorProject &&
        (<Dialog
            open={this.state.anchorProject}
            onClose={this.hideInfos}
            aria-labelledby="DisplayInfos">
              <DialogActions>
              <Button onClick={this.hideInfos} autoFocus>
                <CloseIcon />
              </Button>
              </DialogActions>
              <DialogContent>
                <table>
                  <tbody>
                    {dataDesc(this.props.data)}
                  </tbody>
                </table>
              </DialogContent>
            </Dialog>
        )}
      </div>
    );
  }
}

export default WidgetGraph;
