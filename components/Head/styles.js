import { COLORS } from '../../constants';

const rgba = (hex, alpha) => {
  const pairs = [...hex.slice(1, hex.length)];
  const rgb = [];
  pairs.forEach((char, index) => {
    if (index % 2 !== 0) return;
    const pair = `${char}${pairs[index + 1]}`;
    rgb.push(parseInt(pair, 16));
  });

  return `rgba(${rgb.join(', ')}, ${alpha})`;
};

export default `
  @font-face {
    font-family: 'Open Sans';
    font-weight: 400;
    src: url(/static/fonts/OpenSans-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Open Sans';
    font-weight: 500;
    src: url(/static/fonts/OpenSans-SemiBold.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Titillium Web';
    font-weight: 400;
    src: url(/static/fonts/TitilliumWeb-Regular.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Titillium Web';
    font-weight: 500;
    src: url(/static/fonts/TitilliumWeb-SemiBold.woff2) format('woff2');
  }

  html,
  body {
    margin: 0;
    font-size: 10px;
  }

  body {
    padding: 80px 0 0 80px;
    font-family: 'Open Sans', 'Helvetica', 'Arial', 'sans-serif';
    font-weight: 400;
  }

  body *::selection {
    text-shadow: none;
    color: ${COLORS.WHITE};
    background-color: ${rgba(COLORS.CARISE_PINK, 0.75)};
  }

  input,
  button,
  textarea {
    font-family: 'Open Sans', 'Helvetica', 'Arial', 'sans-serif';
    color: ${COLORS.FUSCOUS_GRAY};
  }
`;
