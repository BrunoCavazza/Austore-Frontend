import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import banner1 from '../../Static/BANNERS Austore/1.png';
import banner2 from '../../Static/BANNERS Austore/2.png';
import banner3 from '../../Static/BANNERS Austore/3.png';

const images = [
  {
    url: banner1,
    //title: 'Novedades',
    width: '100%',
    link: 'https://api.whatsapp.com/send/?phone=5493518130381&text&type=phone_number&app_absent=0',
  },
  {
    url: banner2,
    //title: 'Ofertas',
    width: '60%',
    link: 'https://api.whatsapp.com/send/?phone=5493518130381&text&type=phone_number&app_absent=0',
  },
  {
    url: banner3,
    //title: 'Tendencias',
    width: '40%',
    link: 'https://api.whatsapp.com/send/?phone=5493518130381&text&type=phone_number&app_absent=0',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 1,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

/*
 <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
*/
export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}  href={classes.link}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          href="https://api.whatsapp.com/send/?phone=5493518130381&text&type=phone_number&app_absent=0" target="_blank" // ACA funca el href 
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
         
        </ButtonBase>
      ))}
    </div>
  );
}
