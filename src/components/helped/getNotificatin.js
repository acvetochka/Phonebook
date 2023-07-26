import Notiflix from 'notiflix';

export const getNotification = message => {
  Notiflix.Report.warning('Warning', message);
};

Notiflix.Report.init({
  svgSize: '50px',
  messageFontSize: '20px',
  warning: {
    svgColor: '#44728f',

    buttonBackground: '#44728f',
    backOverlayColor: 'rgba(0,0, 0,0.2)',
  },
});
