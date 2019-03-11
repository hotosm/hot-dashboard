/** Natives **/
import React, { Component } from 'react';

/** Material UI **/
import Typography     from '@material-ui/core/Typography';
import Card           from '@material-ui/core/Card';
import CardContent    from '@material-ui/core/CardContent';
import CardMedia      from '@material-ui/core/CardMedia';

/** CSS **/
import './Widget.css';

/**
 * This Indicator is used to display a title and a number with an image
 */
class WidgetIndicator extends Component {
  render() {
    return (
      <div>
        <Card className="indicator-container">
          <CardMedia className = "widget-image"
                     image     = {this.props.img}
                     title     = {this.props.img}
          />
          <CardContent className="widget-text">
            <Typography variant="caption"> {this.props.title} </Typography>
            <Typography> {new Intl.NumberFormat('en-GB', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                          }).format(this.props.data)}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default WidgetIndicator;
