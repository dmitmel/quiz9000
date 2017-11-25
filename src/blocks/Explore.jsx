import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
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

const quizzesPerPage = 1;

class Explore extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    quizzes: null
  };

  pages = 1;
  _fetchedRef = null;

  componentDidMount() {
    this._quizzesRef = database.ref('quizzes');
    this._fetchCurrent();
  }

  _fetchCurrent() {
    // clean up prev ref
    if (this._fetchedRef) this._fetchedRef.off('value');

    this._fetchedRef = this._quizzesRef.limitToFirst(
      quizzesPerPage * this.pages
    );
    this._fetchedRef.on('value', snapshot =>
      this.setState({ quizzes: snapshot.val() })
    );
  }

  _fetchMore = () => {
    this.pages += 1;
    this._fetchCurrent();
  };

  render() {
    return <Page title="Explore">{this._renderContent()}</Page>;
  }

  _renderContent() {
    const { classes } = this.props;

    if (!this.state) return null;
    const { quizzes } = this.state;
    if (!quizzes) return null;

    return (
      <div>
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

        <div>
          <Button onClick={this._fetchMore}>Fetch more</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Explore);
