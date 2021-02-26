import { configure } from '@storybook/react';
function loadStories() {
  require('../components/organisms/headerOrg/story.js');
}

configure(loadStories, module);
