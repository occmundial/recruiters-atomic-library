import { NavPosition } from '@occmundial/atomic/components/NavTab';
import { ReactNode } from 'react';
import { localRoot, r12links, links } from '../config/links';

const goTo = (url) => {
  window.location.assign(url);
};

export interface NavPositionIcon {
  key: string | number;
  type: 'button' | 'link' | 'dropdownLink' | 'icon' | 'custom' | 'logo';
  text?: string;
  label?: string;
  onClick?: () => void;
  selected?: boolean;
  link?: string;
  theme?: 'primary' | 'secondary' | 'tertiary' | 'tertiaryWhite' | 'ghostPink' | 'ghostGrey' | 'ghostWhite';
  iconName?: string;
  showBar?: boolean;
  custom?: ReactNode;
  testId?: string;
  direction: 'col' | 'row'
  width: number
}

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
        onClick: () => goTo(`${root.jobAds}/`),
        selected: tabSelected === 2,
        showBar: tabSelected === 2,
      },
      {
        key: 2,
        type: 'icon',
        iconName: 'search',
        label: 'Talento',
        onClick: () => goTo(`${root.talentSearch}/`),
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