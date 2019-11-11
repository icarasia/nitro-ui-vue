<template>
  <div>
    <div class="display-4  u-margin-top-xl">
      Pagination
    </div>
    <div class="text-muted">
      Pagination component for list and table.
    </div>
    <div class="u-margin-top-xl">
      <Pagination
        :current-page="currentPage"
        :page-count="pageCount"
        @nextPage="pageChangeHandle('next')"
        @previousPage="pageChangeHandle('previous')"
        @firstPage="pageChangeHandle('first')"
        @lastPage="pageChangeHandle('last')"
        @loadPage="pageChangeHandle"
        :visiblePagesCount="checkPageCount"
      />
      <Pagination
        :current-page="currentPage"
        :page-count="pageCount"
        :inline="true"
        @nextPage="pageChangeHandle('next')"
        @previousPage="pageChangeHandle('previous')"
        @firstPage="pageChangeHandle('first')"
        @lastPage="pageChangeHandle('last')"
        @loadPage="pageChangeHandle"
        :visiblePagesCount="checkPageCount"
      />
      <div class="u-margin-top-xl">
        Current Page : <b>{{ this.currentPage }}</b>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../../packages/component-paginator/src";

export default {
  name: "PaginationPage",
  components: {
    Pagination
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 21
    };
  },
  props: {
    currentPageValue: Number
  },
  computed: {
    checkPageCount() {
      let visiblePagesCount = this.visiblePagesCount;
      let pageCount = this.pageCount;

      if (pageCount < 2) {
        visiblePagesCount = 1;
      } else if ((pageCount >= 2) & (pageCount <= 5)) {
        visiblePagesCount = pageCount;
      }
      return visiblePagesCount;
    }
  },
  methods: {
    pageChangeHandle(value) {
      switch (value) {
        case "next":
          this.currentPage += 1;
          break;

        case "previous":
          this.currentPage -= 1;
          break;

        case "last":
          this.currentPage = this.pageCount;
          break;

        case "first":
          this.currentPage = 1;
          break;

        default:
          this.currentPage = value;
      }
    }
  }
};
</script>
