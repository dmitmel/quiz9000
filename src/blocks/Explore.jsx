import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Page from './Page';
import { database } from '../firebase';

const styles = theme => ({
  list: {
    background: theme.palette.background.paper
  },
  listItemIcon: {
    borderRadius: 0
  }
});

class Explore extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    quizzes: null
  };

  componentDidMount() {
    const ref = database.ref('quizzes');
    ref.on('value', snapshot => this.setState({ quizzes: snapshot.val() }));
  }

  render() {
    return <Page title="Explore">{this._renderContent()}</Page>;
  }

  _renderContent() {
    const { classes } = this.props;

    if (!this.state) return null;
    const { quizzes } = this.state;
    if (!quizzes) return null;

    return (
      <List className={classes.list}>
        {quizzes.map(quiz => (
          <ListItem key={quiz.name} button>
            {quiz.image ? (
              <Avatar
                src={quiz.image}
                alt="icon"
                className={classes.listItemIcon}
              />
            ) : (
              <Avatar>
                <Icon>book</Icon>
              </Avatar>
            )}
            <ListItemText primary={quiz.name} secondary={quiz.description} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(Explore);
