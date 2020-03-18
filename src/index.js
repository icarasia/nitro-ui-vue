import * as niComponents from "./packages";
import niTooltip from "./packages/directive-tooltip/src";
import niToastr from "./packages/component-toast";
import "@nitro-ui/bundle-utilities";
import "@nitro-ui/component-carousel";
import "@nitro-ui/component-tooltip";
import "@nitro-ui/svg-icons-vue/dist/NitroIcon.css";

import NitroIcon from "@nitro-ui/svg-icons-vue";

const install = Vue => {
  // Use Components
  Vue.use(NitroIcon);

  Object.values(niComponents).forEach(niComponent => {
    Vue.use(niComponent);
  });
  Vue.directive("ni-tooltip", niTooltip);

  Vue.use(niToastr);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;

export { default as niAlert } from "./packages/component-alert";
export { default as niAvatar } from "./packages/component-avatar";
export { default as niBreadcrumb } from "./packages/component-breadcrumb";
export { default as niButton } from "./packages/component-button";
export { default as niButtonGroup } from "./packages/component-button-group";
export { default as niCard } from "./packages/component-card";
export { default as niChip } from "./packages/component-chip";
export { default as niCheckbox } from "./packages/component-form-checkbox";
export { default as niCheckboxGroup } from "./packages/component-form-checkbox-group";
export { default as niCol } from "./packages/component-col";
export { default as niContainer } from "./packages/component-container";
export { default as niCollapse } from "./packages/component-collapse";
export { default as niDrawer } from "./packages/component-drawer";
export {
  DropdownComponent as niDropdown,
  DropdownItemComponent as niDropdownItem
} from "./packages/component-dropdown";
export { default as niEmbed } from "./packages/object-embed";
export { default as niFormField } from "./packages/component-form-field";
export { default as niFormFieldFloatLabel } from "./packages/component-form-field-floatlabel";
export { default as niFormFile } from "./packages/component-form-fileupload";
export { default as niFormInput } from "./packages/component-form-input";
export { default as niFormInputFloatLabel } from "./packages/component-form-input-floatlabel";
export { default as niFormInputButton } from "./packages/component-form-input-button";
export { default as niRadio } from "./packages/component-form-radio";
export { default as niRange } from "./packages/component-form-range";
export { default as niRadioGroup } from "./packages/component-form-radio-group";
export { default as niFormSelect } from "./packages/component-form-select";
export { default as niFormSelectFloatLabel } from "./packages/component-form-select-floatlabel";
export { default as niFormTextarea } from "./packages/component-form-textarea";
export { default as niFormTextareaFloatLabel } from "./packages/component-form-textarea-floatlabel";
export { default as niLink } from "./packages/component-link";
export { default as niModal } from "./packages/component-modal";
export { default as niPaginator } from "./packages/component-paginator";
export { default as niPopover } from "./packages/component-popover";
export { default as niRow } from "./packages/component-row";
export { default as niSidebar } from "./packages/component-sidebar";
export {
  StepperComponent as niStepper,
  StepperItemComponent as niStepperItem,
  StepperBodyComponent as niStepperBody,
  StepperHeaderComponent as niStepperHeader,
  StepperHeaderItemComponent as niStepperHeaderItem
} from "./packages/component-stepper";
export { default as niTab } from "./packages/component-tab";
export { default as niTable } from "./packages/component-table";
export { default as niTabs } from "./packages/component-tabs";
export { default as niToolbar } from "./packages/component-toolbar";
