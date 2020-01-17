import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Card.scss';
import { useDarkMode } from './Components/useDarkMode';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 5,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const { datas } = props;
  // console.log(props)

  return (
    <div className="card" id="darkmode">
      {datas.map((data, index) => (
        <Card className={classes.card} key={index}>
          <CardActionArea

            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          >
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.country}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Searches: {data.searches}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ID: {data.id}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
