import Dropdown from "./src";
import DropdownItem from "./src/DropdownItem";

const DropdownComponent = Vue => {
  Vue.component(Dropdown.name, Dropdown);
};

const DropdownItemComponent = Vue => {
  Vue.component(DropdownItem.name, DropdownItem);
};

export { DropdownComponent, DropdownItemComponent };
