import Steeper from "./src";
import StepperItem from "./src/StepperItem";
import StepperBody from "./src/StepperBody";
import StepperHeaderItem from "./src/StepperHeaderItem";
import StepperHeader from "./src/StepperHeader";

const StepperComponent = Vue => {
  Vue.component(Steeper.name, Steeper);
};

const StepperItemComponent = Vue => {
  Vue.component(StepperItem.name, StepperItem);
};

const StepperBodyComponent = Vue => {
  Vue.component(StepperBody.name, StepperBody);
};

const StepperHeaderItemComponent = Vue => {
  Vue.component(StepperHeaderItem.name, StepperHeaderItem);
};

const StepperHeaderComponent = Vue => {
  Vue.component(StepperHeader.name, StepperHeader);
};

export {
  StepperComponent,
  StepperItemComponent,
  StepperBodyComponent,
  StepperHeaderItemComponent,
  StepperHeaderComponent
};
