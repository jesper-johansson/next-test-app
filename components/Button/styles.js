import { COLORS } from '../../constants';

export default `
  button {
    margin: 2px;
    padding: 7px 14px 9px;
    display: inline-block;
    appearance: none;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-shadow: 0 0 0 1px ${COLORS.MERCURY};
    transition: 0.16s cubic-bezier(0.69, 0.16, 0.39, 0.77);
  }

  button:hover {
    box-shadow: 0 0 0 2px ${COLORS.CARISE_PINK};
  }
`;
