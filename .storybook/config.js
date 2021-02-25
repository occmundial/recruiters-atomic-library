import { configure } from '@storybook/react';
function loadStories() {
  // You can require as many stories as you need.
  require('../components/molecules/menu/story.js');
  require('../components/organisms/headerOrg/story.js');
}

configure(loadStories, module);
