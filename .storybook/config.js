import { configure, addDecorator, addParameters } from "@storybook/react";
import "@storybook/addon-console";
import { withConsole } from "@storybook/addon-console";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";


const req = require.context("../src/", true, /\.stories\.js$/);



addDecorator(withInfo);
addDecorator(ThemeStoreDecorator);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
  options: {
    brandName: "NailsJS"
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
