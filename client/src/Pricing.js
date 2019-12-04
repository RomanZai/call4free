import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MyInput from './Autocomplete';
import CardMedia from '@material-ui/core/CardMedia'
import device from './twilio-device';



const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
    body:{
        backgroundColor: "#10A4E2" 
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#FEFAEE"
  },
  card: {
    maxWidth: 345,

  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff'],
  },
  {
    title: 'Resources',
    description: ['Resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();
  const [location, setLocation] = useState ({});
  const [code, setCode] = useState ("");


const callback = (code) =>{
setCode(code)
}

const callNow = () =>{
  console.log(code)
  device.connect({number: code})
}
const disconnect = () =>{
  device.disconnectAll()
}
 console.log(location)
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="130" 
          image="https://i.ibb.co/cLSDNxZ/Logo.png"
          title="Contemplative Reptile"
        />
        </Card>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Insert mobile number
        </Typography>
        <MyInput setLocation={setLocation} callback={callback}/>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" >
      <Box display="flex" justifyContent="center" m={1} p={1} >
      <Grid item key="1" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={6} >
      <Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="Make a call now"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.twilio}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                    </Typography>
                  </div>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                       Test
                      </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained"  onClick={callNow} color="primary">
                  Call now
                  </Button>
                  <Button fullWidth variant="contained"  onClick={disconnect} color="secondary">
                  End Call
                  </Button>
                </CardActions>
              </Box>
              
              </Grid>
              </Box>
              <br/>
      <Grid container spacing={5} alignItems="flex-end">

<Grid item key="2" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={4}>
<Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="Boss Revolution"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.boss}
                      <br/>
                      ${location.bossunlim}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                      <br/>
                      /unlim
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined"  href="https://www.bossrevolution.com/en-us/services/international-calling" color="primary">
                    More info
                  </Button>
                </CardActions>
              </Box>
              </Grid>

              <Grid item key="3" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={4}>
              <Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="Viber"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.viber}
                      <br/>
                      ${location.viberunlim}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                      <br/>
                      /unlim
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined"  href="https://account.viber.com/en/" color="primary">
                    More info
                  </Button>
                </CardActions>
              </Box>
              </Grid>

              <Grid item key="4" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={4}>
              <Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="Sprint"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.sprint}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                    </Typography>
                  </div>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                       *No addition services
                      </Typography>
                      <br/>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined"  href="https://support.sprint.com/support/international/calling" color="primary">
                    More info
                  </Button>
                </CardActions>
              </Box>
              </Grid> 

              <Grid item key="5" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={4}>
              <Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="Verizon"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.verizon}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                    </Typography>
                  </div>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                      *No addition services
                      </Typography>
                      <br/>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined"  href="https://www.verizonwireless.com/solutions-and-services/international-long-distance-in-us/" color="primary">
                    More info
                  </Button>
                </CardActions>
              </Box>
              </Grid> 

              <Grid item key="6" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={4}>
              <Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="AT&T"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.att}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                    </Typography>
                  </div>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                      *No addition services
                      </Typography>
                      <br/>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined"  href="https://www.att.com/offers/international-plans.html" color="primary">
                    More info
                  </Button>
                </CardActions>
              </Box>
              </Grid>

              <Grid item key="7" xs={12} sm={"1" === 'Enterprise' ? 12 : 6} md={4}>
              <Box boxShadow={24}
      bgcolor="background.paper" borderRadius={12}>
                <CardHeader
                  title="T-Mobile"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${location.tmobile}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /min
                    </Typography>
                  </div>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                      *No addition services
                      </Typography>
                      <br/>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="outlined"  href="https://www.t-mobile.com/coverage/roaming" color="primary">
                    More info
                  </Button>
                </CardActions>
              </Box>
              </Grid>
        </Grid>      

              </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}