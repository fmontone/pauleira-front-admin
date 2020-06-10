// ** Attention for mobile query - max-with **
// *Ls for Landscape ;)

export const windowSize = {
  mobile: '599',
  tablet: '650',
  tabletLs: '770',
  laptop: '1200',
  desktop: '1800',
};

export const device = {
  mobile: `(max-width: ${windowSize.mobile}px)`,
  tablet: `(min-width: ${windowSize.tablet}px)`,
  tabletLs: `(min-width: ${windowSize.tabletLs}px)`,
  laptop: `(min-width: ${windowSize.laptop}px)`,
  desktop: `(min-width: ${windowSize.desktop}px)`,
  desktopL: `(min-width: ${windowSize.desktop}px)`,
};
