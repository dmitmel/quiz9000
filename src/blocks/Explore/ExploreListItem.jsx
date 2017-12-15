import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  quizImage: {
    borderRadius: 0
  }
});

ExploreListItem.propTypes = {
  quiz: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

function ExploreListItem({ quiz, classes }) {
  return (
    <ListItem button component="a" href={`#/quiz/${quiz.id}`}>
      {/* eslint-disable indent */}
      {quiz.image ? ( // eslint-disable-line no-extra-parens
        <Avatar src={quiz.image} alt="icon" className={classes.quizImage} />
      ) : (
        <Avatar>
          <Icon>book</Icon>
        </Avatar>
      )}
      {/* eslint-enable indent */}
      <ListItemText primary={quiz.name} secondary={quiz.description} />
    </ListItem>
  );
}

export default withStyles(styles)(ExploreListItem);
