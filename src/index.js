import * as niComponents from "./packages";
import niTooltip from "./packages/directive-tooltip/src";
import "@nitro-ui/utility";
import "@nitro-ui/svg-icons-vue/dist/NitroIcon.css";

import NitroIcon from "@nitro-ui/svg-icons-vue";

const install = Vue => {
  // Use Components
  Vue.use(NitroIcon);

  Object.values(niComponents).forEach(niComponent => {
    Vue.use(niComponent);
  });
  Vue.directive("ni-tooltip", niTooltip);
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
export { default as niCol } from "./packages/component-col";
export { default as niContainer } from "./packages/component-container";
export { default as niDrawer } from "./packages/component-drawer";
export { default as niDropdown } from "./packages/component-dropdown";
export { default as niFormField } from "./packages/component-form-field";
export { default as niInput } from "./packages/component-input";
export { default as niLink } from "./packages/component-link";
export { default as niModal } from "./packages/component-modal";
export { default as niPaginator } from "./packages/component-paginator";
export { default as niPopover } from "./packages/component-popover";
export { default as niRow } from "./packages/component-row";
export { default as niSidebar } from "./packages/component-sidebar";
export { default as niStep } from "./packages/component-step";
export { default as niTable } from "./packages/component-table";
export { default as niTabs } from "./packages/component-tabs";
export { default as niTextarea } from "./packages/component-textarea";
export { default as niToolbar } from "./packages/component-toolbar";
//export { default as niTooltip } from "./packages/directive-tooltip";
