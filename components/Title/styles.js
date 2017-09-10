import { COLORS } from '../../constants';

export default `
  .title {
    color: ${COLORS.BASTILLE}
  }

  .title h1,
  .title h2,
  .title h3,
  .title h4,
  .title h5,
  .title h6 {
    margin: 0;
    font-family: 'Titillium Web';
    font-weight: 500;
  }

  .title h1 {
    font-size: 3.2rem;
    line-height: 4.8rem;
  }
`;
