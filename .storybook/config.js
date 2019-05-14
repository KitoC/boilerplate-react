import { configure, addDecorator, addParameters } from "@storybook/react";
import "@storybook/addon-console";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

const req = require.context("../src/", true, /\.stories\.js$/);

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addParameters({
  options: {
    brandName: "Reinventing the wheel"
  }
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
