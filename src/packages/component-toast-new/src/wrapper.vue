<template>
  <div>
    <div
      class="c-toast-stage"
      v-for="position in positions"
      v-bind:key="position"
      :data-position="position"
    >
      <template v-for="(optionsArray, index) in list">
        <vue-toastr
          :data="optionsArray"
          :key="index"
          v-if="optionsArray.position === position"
        >
        </vue-toastr>
      </template>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/component-toast";
import VueToastr from "./vue-toastr.vue";
export default {
  components: { VueToastr },
  data() {
    return {
      positions: [
        "right",
        "left",
        "center",
        "bottom-right",
        "bottom-left",
        "bottom-center"
      ],
      list: []
    };
  },
  methods: {
    addToast(data) {
      this.list.push(data);
      // if have onCreated
      if (typeof data.onCreated !== "undefined") {
        // wait doom update after call cb
        this.$nextTick(() => {
          data.onCreated();
        });
      }
    },
    removeToast(data) {
      // if have onClosed
      if (data.onClosed !== undefined) {
        data.onClosed();
      }
      this.list.splice(this.list.indexOf(data), 1);
    },
    Add(data) {
      return this.AddData(this.processObjectData(data));
    },
    AddData(data) {
      if (typeof data !== "object") {
        return;
      }
      this.addToast(data);
    },
    processObjectData(data) {
      // if Object
      if (typeof data === "object" && data.msg !== undefined) {
        if (data.position === undefined) {
          data.position = this.defaultPosition;
        }
        if (data.type === undefined) {
          data.type = this.defaultType;
        }
        if (data.timeout === undefined) {
          data.timeout = this.defaultTimeout;
        }
        if (data.closeOnHover === undefined) {
          data.closeOnHover = this.defaultCloseOnHover;
        }
        return data;
      }
      // if String
      return {
        msg: data.toString(),
        position: this.defaultPosition,
        type: this.defaultType,
        timeout: this.defaultTimeout,
        closeOnHover: this.defaultCloseOnHover
      };
    },
    errorToastr(msg, title) {
      const data = this.processObjectData(msg);
      data["type"] = "error";
      if (title !== undefined) {
        data["title"] = title;
      }
      return this.AddData(data);
    },
    tipsToastr(msg, title) {
      const data = this.processObjectData(msg);
      data["type"] = "tips";
      if (title !== undefined) {
        data["title"] = title;
      }
      return this.AddData(data);
    },
    successToastr(msg, title, options) {
      let data = this.processObjectData(msg);
      data["type"] = "success";
      data = Object.assign(data, options);
      if (title !== undefined) {
        data["title"] = title;
      }
      return this.AddData(data);
    },
    warningToastr(msg, title) {
      const data = this.processObjectData(msg);
      data["type"] = "warning";
      if (title !== undefined) {
        data["title"] = title;
      }
      return this.AddData(data);
    },
    infoToastr(msg, title) {
      const data = this.processObjectData(msg);
      data["type"] = "info";
      if (title !== undefined) {
        data["title"] = title;
      }
      return this.AddData(data);
    },
    Close(data) {
      this.removeToast(data);
    }
  }
};
</script>
