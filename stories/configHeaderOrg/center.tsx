import { NavPosition } from '@occmundial/atomic/components/NavTab';
import { NavPositionIcon } from '../../components/organisms/headerOrg/config/center';
import { localRoot, r12links, links } from '../configHeaderOrg/links';

const goTo = (url) => {
  window.location.assign(url);
};

export const center = (mobile = false, root = localRoot, tabSelected = 0): NavPosition => (
  mobile ? (
    [
      {
        key: 0,
        type: 'icon',
        iconName: 'occDartGrey',
        onClick: () => goTo(`${root.r12}/${r12links.sightMainPage}`),
      },
    ]
  ) : (
    [
      {
        key: 0,
        type: 'icon',
        iconName: 'panel',
        label: 'Actividad',
        onClick: () => goTo(`${root.r12}/${r12links.sightMainPage}`),
        selected: tabSelected === 1,
        showBar: tabSelected === 1,
      },
      {
        key: 1,
        type: 'icon',
        iconName: 'publications',
        label: 'Vacantes',
        onClick: () => goTo(`${root.jobAds}/${links.sightJobAdmin}`),
        selected: tabSelected === 2,
        showBar: tabSelected === 2,
      },
      {
        key: 2,
        type: 'icon',
        iconName: 'search',
        label: 'Talento',
        onClick: () => goTo(`${root.talentSearch}/${links.talent}`),
        selected: tabSelected === 3,
        showBar: tabSelected === 3,
      },
    ]
  )
);

export const centerMobile = (root = localRoot, tabSelected = 0): Array<NavPositionIcon> => (
[
  {
    key: 0,
    type: 'icon',
    iconName: 'panel',
    label: 'Actividad',
    direction: 'col',
    width: 72,
    onClick: () => goTo(`${root.r12}/${r12links.sightMainPage}`),
    selected: tabSelected === 1,
    showBar: tabSelected === 1,
  },
  {
    key: 1,
    type: 'icon',
    iconName: 'publications',
    label: 'Vacantes',
    direction: 'col',
    width: 72,
    onClick: () => goTo(`${root.jobAds}/${links.sightJobAdmin}`),
    selected: tabSelected === 2,
    showBar: tabSelected === 2,
  },
  {
    key: 2,
    type: 'icon',
    iconName: 'search',
    label: 'Talento',
    direction: 'col',
    width: 72,
    onClick: () => goTo(`${root.talentSearch}/${links.talent}`),
    selected: tabSelected === 3,
    showBar: tabSelected === 3,
  },
]);