<template>
  <ul class="c-pagination" :class="classes">
    <!--First Button-->
    <Pagination-button
      :first="true"
      :useButton="true"
      :btnLabel="firstLabel ? firstLabel : 'First'"
      :disabled="isFirstButtonDisabled"
      @click.native="firstPage"
    />
    <!--Previous Button-->
    <Pagination-button
      :prev="true"
      :useButton="true"
      :btnLabel="prevLabel ? prevLabel : 'Prev'"
      :disabled="isPreviousButtonDisabled"
      @click.native="previousPage"
    />
    <!--Pagination Button-->
    <Pagination-button
      v-for="(paginationTrigger, key) in paginationTriggers"
      :key="key"
      :class="{
        'is--active': paginationTrigger === currentPage
      }"
      :pageNumber="paginationTrigger"
      :item="true"
      @click="onLoadPage"
    />
    <!--Next Button-->
    <Pagination-button
      :next="true"
      :useButton="true"
      :btnLabel="nextLabel ? nextLabel : 'Next'"
      :disabled="isNextButtonDisabled"
      @click.native="nextPage"
    />
    <!--Last Button-->
    <Pagination-button
      :last="true"
      :useButton="true"
      :btnLabel="lastLabel ? lastLabel : 'Last'"
      :disabled="isLastButtonDisabled"
      @click.native="lastPage"
    />
  </ul>
</template>

<script>
import "@nitro-ui/component-pagination";
import PaginationButton from "./PaginationButton";

export default {
  name: "niPaginator",
  components: { PaginationButton },
  data() {
    return {
      ellipis: "..."
    };
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    currentPage: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      required: true
    },
    visiblePagesCount: {
      type: Number,
      default: 5
    },
    addEllipsis: {
      type: Boolean,
      default: false
    },
    addEllipsisBefore: {
      type: Boolean,
      default: false
    },
    addEllipsisAfter: {
      type: Boolean,
      default: false
    },
    firstLabel: {
      type: String,
      default: null
    },
    prevLabel: {
      type: String,
      default: null
    },
    nextLabel: {
      type: String,
      default: null
    },
    lastLabel: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return [this.inline ? `c-pagination--inline` : ""];
    },

    isFirstButtonDisabled() {
      return this.currentPage <= 1;
    },
    isPreviousButtonDisabled() {
      return this.currentPage <= 1;
    },
    isNextButtonDisabled() {
      return this.currentPage >= this.pageCount;
    },
    isLastButtonDisabled() {
      return this.currentPage >= this.pageCount;
    },
    paginationTriggers() {
      // let addEllipsisBefore = this.addEllipsisBefore;
      // let addEllipsisAfter = this.addEllipsisAfter;
      const currentPage = this.currentPage;
      const pageCount = this.pageCount;
      const visiblePagesCount = this.visiblePagesCount;
      const visiblePagesThreshold = Math.ceil((visiblePagesCount - 1) / 2);
      const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(
        0
      );

      if (currentPage <= visiblePagesThreshold + 1) {
        pagintationTriggersArray[0] = 1;
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pagintationTriggersArray[0] + index;
          }
        );
        //Show first page only if page count more than 1
        if (pageCount > 1) {
          if (this.addEllipsis && visiblePagesCount < pageCount) {
            pagintationTriggers.push(this.ellipis);
            pagintationTriggers.push(pageCount);
          } else {
            pagintationTriggers.push(pageCount);
          }
        }
        return pagintationTriggers;
      }

      if (currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pageCount - index;
          }
        );

        if (this.addEllipsis && visiblePagesCount < pageCount) {
          pagintationTriggers.reverse().unshift(1);
          pagintationTriggers[1] = this.ellipis;
        } else {
          pagintationTriggers.reverse().unshift(1);
        }
        return pagintationTriggers;
      }

      pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1;
      const pagintationTriggers = pagintationTriggersArray.map(
        (paginationTrigger, index) => {
          return pagintationTriggersArray[0] + index;
        }
      );

      if (this.addEllipsis && visiblePagesCount < pageCount) {
        pagintationTriggers.unshift(1);
        pagintationTriggers[1] = this.ellipis;
      } else {
        pagintationTriggers.unshift(1);
      }

      if (this.addEllipsis && visiblePagesCount < pageCount) {
        pagintationTriggers[pagintationTriggers.length - 2] = this.ellipis;
        pagintationTriggers[pagintationTriggers.length - 1] = pageCount;
      } else {
        pagintationTriggers[pagintationTriggers.length - 1] = pageCount;
      }

      return pagintationTriggers;
    }
  },
  methods: {
    firstPage() {
      this.$emit("firstPage");
    },
    nextPage() {
      if (this.currentPage >= this.pageCount) {
        this.$emit("lastPage");
      } else {
        this.$emit("nextPage");
      }
    },
    previousPage() {
      if (this.currentPage <= 1) {
        this.$emit("firstPage");
      } else {
        this.$emit("previousPage");
      }
    },
    lastPage() {
      this.$emit("lastPage");
    },
    onLoadPage(value) {
      this.$emit("loadPage", value);
    }
  }
};
</script>
