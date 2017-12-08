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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  classes: PropTypes.object.isRequired
};

function ExploreListItem({ id, name, description, image, classes }) {
  return (
    <ListItem button component="a" href={`#/quiz/details/${id}`}>
      {/* eslint-disable indent */}
      {image ? 
        <Avatar src={image} alt="icon" className={classes.quizImage} />
       : (
        <Avatar>
          <Icon>book</Icon>
        </Avatar>
      )}
      {/* eslint-enable indent */}
      <ListItemText primary={name} secondary={description} />
    </ListItem>
  );
}

export default withStyles(styles)(ExploreListItem);
