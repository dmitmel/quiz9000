import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';

const styles = {
  image: {
    borderRadius: 0
  }
};

ExploreListItem.propTypes = {
  id: PropTypes.any.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  classes: PropTypes.object.isRequired
};

function ExploreListItem({ id, image, name, description, classes }) {
  return (
    <ListItem button component={Link} to={`/quiz/${id}`}>
      {image ? (
        <Avatar src={image} alt="icon" className={classes.image} />
      ) : (
        <Avatar>
          <Icon>book</Icon>
        </Avatar>
      )}
      <ListItemText primary={name} secondary={description} />
    </ListItem>
  );
}

export default withStyles(styles)(ExploreListItem);
