const getComponent = function getComponent(self, componentName) {
  let component = null;
  let parent = self.$parent;
  while (parent && !component) {
    if (parent.$options.name === componentName) {
      component = parent;
    }
    parent = parent.$parent;
  }
  return component;
};

export { getComponent };
