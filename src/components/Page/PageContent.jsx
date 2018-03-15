import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'material-ui/styles/withStyles';
import Container from '../Container';

const contentMarginTop = value => ({
  height: `calc(100vh - ${value}px)`,
  marginTop: value
});

const styles = theme => ({
  content: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    overflow: 'auto',

    ...contentMarginTop(56),
    '@media (orientation: landscape)': contentMarginTop(48),
    [theme.breakpoints.up('sm')]: contentMarginTop(64)
  },
  padding: {
    height: '100%',
    position: 'relative',

    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3
    }
  }
});

const PageContent = ({ classes, children }) => (
  <main className={classes.content}>
    <Container classes={{ container: classes.padding }}>{children}</Container>
  </main>
);

PageContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageContent);
