import Notiflix from 'notiflix';

export const getNotification = message => {
  Notiflix.Report.warning('Warning', message);
};

Notiflix.Report.init({
  svgSize: '50px',
  messageFontSize: '20px',
  warning: {
    svgColor: '#0f596b',

    buttonBackground: '#0f596b',
    backOverlayColor: 'rgba(0,0, 0,0.2)',
  },
});
