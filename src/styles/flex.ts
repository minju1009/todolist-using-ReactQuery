import { css } from 'styled-components';

/** types */

type IJustifyContent =
  | ''
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';
type IAlignItems =
  | ''
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';
type IDirection = 'column' | 'row' | 'column-reverse';

/** flex */

export const flex = (
  justify: IJustifyContent,
  align: IAlignItems,
  direction: IDirection = 'row',
) => css`
  display: flex;
  align-items: ${align};
  flex-direction: ${direction};
  justify-content: ${justify};
`;
