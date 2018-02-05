import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-router";
import HeaderBar from "displays/HeaderBar";
import Bedrooms from "displays/Bedrooms";

storiesOf("Display components", module)
  .addDecorator(StoryRouter())
  .add("HeaderBar", () => <HeaderBar />)
  .add("Bedrooms", () => <Bedrooms />);
