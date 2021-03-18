import { links } from '../configHeaderOrg/links';

export const top = (mobile, root) => (
  !mobile ? (
    [
      {
        key: 1,
        text: 'Busco Empleo',
        link: `${links.buscoEmpleo}`,
      },
      {
        key: 2,
        text: 'Busco Personal',
        link: `${root.home}/`,
        selected: true,
      },
    ]
  ) : undefined);
