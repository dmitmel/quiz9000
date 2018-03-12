import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from 'material-ui/styles/withStyles';
import Card from 'material-ui/Card/Card';
import CardContent from 'material-ui/Card/CardContent';
import CardMedia from 'material-ui/Card/CardMedia';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    flexGrow: 1
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: theme.spacing.unit * 2,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    }),
    '&:hover': {
      '@media (hover: hover)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  },
  image: {
    width: 56,
    height: 56,
    marginRight: theme.spacing.unit * 2
  },
  text: {
    padding: 0,
    alignSelf: 'flex-start'
  }
});

const QuizListItem = ({ id, image, name, description, classes }) => (
  <Card className={classes.root}>
    <ButtonBase className={classes.button} component={Link} to={`/quiz/${id}`}>
      <CardMedia
        component="img"
        image={image}
        alt="icon"
        className={classes.image}
      />
      <CardContent className={classes.text}>
        <Typography variant="headline">{name}</Typography>
        <Typography variant="subheading" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </ButtonBase>
  </Card>
);

QuizListItem.propTypes = {
  id: PropTypes.any.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(QuizListItem);
