import notification from "./src/wrapper.vue";

function plugin(Vue, options) {
  const defaultOptions = {
    defaultPosition: "right",
    defaultType: "success",
    defaultTimeout: 5000
  };

  options = Object.assign(defaultOptions, options || {});

  const Comp = Vue.extend(notification);
  const vm = new Comp({
    data: {
      defaultPosition: options.defaultPosition,
      defaultType: options.defaultType,
      defaultTimeout: options.defaultTimeout
    }
  }).$mount();
  document.body.appendChild(vm.$el);

  Vue.prototype.$niToast = {
    success(title, msg, options) {
      vm.successToastr(msg, title, options);
    },
    error(title, msg, options) {
      vm.errorToastr(msg, title, options);
    },
    info(title, msg, options) {
      vm.infoToastr(msg, title, options);
    },
    warning(title, msg, options) {
      vm.warningToastr(msg, title, options);
    },
    tips(title, msg, options) {
      vm.tipsToastr(msg, title, options);
    }
  };
}

// Install by default if using the script tag
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
