import { css } from 'styled-components';

/** Fonts */

export const font = (size: number, weight: number, height: number = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${height}px;
`;
