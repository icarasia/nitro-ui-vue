<template>
  <div class="u-margin-top-xl">
    <div class="display-4">
      Embed
    </div>
    <div class="text-muted">
      Some awesome description about Embed.
    </div>
    <h4 class="u-margin-top-xl  u-margin-bottom-sm">
        Size
    </h4>
    <div class="o-grid">
        <div class="o-grid__item  u-width-1@mobile">
            <niEmbed size="3x1"/>
            <div class="u-margin-top-xs  u-margin-bottom-lg">.o-embed--3x1</div>
        </div>
        <div class="o-grid__item  u-width-1@mobile">
            <niEmbed size="16x9"/>
            <div class="u-margin-top-xs  u-margin-bottom-lg">.o-embed--16x9</div>
        </div>
        <div class="o-grid__item  u-width-1@mobile">
            <niEmbed size="4x3"/>
            <div class="u-margin-top-xs  u-margin-bottom-lg">.o-embed--4x3</div>
        </div>
        <div class="o-grid__item  u-width-1@mobile">
            <niEmbed size="1x1"/>
            <div class="u-margin-top-xs  u-margin-bottom-lg">.o-embed--1x1</div>
        </div>
    </div>

    <div class="u-flex  u-margin-bottom-lg">
        <niEmbed size="xs"/>
        <div class="u-margin-left-xs">.o-embed--xs</div>
    </div>
    <div class="u-flex  u-margin-bottom-lg">
        <niEmbed size="sm"/>
        <div class="u-margin-left-xs">.o-embed--sm</div>
    </div>
    <div class="u-flex  u-margin-bottom-lg">
        <niEmbed size="md"/>
        <div class="u-margin-left-xs">.o-embed--md</div>
    </div>
    <div class="u-flex  u-margin-bottom-lg">
        <niEmbed size="lg"/>
        <div class="u-margin-left-xs">.o-embed--lg</div>
    </div>
    <div class="u-flex  u-margin-bottom-lg">
        <niEmbed
            size="xl"
            src="https://img1.icarcdn.com/2145606/gallery_used-car-carlist-hyundai-sonata-high-spec-sedan-malaysia_2145606_tXByR3VaauO33dHhbPoZCb.jpg?smia=xTM"
            alt="hyundai"
        />
        <div class="u-margin-left-xs">.o-embed--xl</div>
    </div>
    <div class="u-flex  u-margin-bottom-lg">
        <niEmbed size="xxl">
            Some content
        </niEmbed>
        <div class="u-margin-left-xs">.o-embed--xxl</div>
    </div>

    <h4 class="u-margin-top-xl  u-margin-bottom-sm">
        Variant
    </h4>
    <div class="o-grid">
        <div class="o-grid__item  u-width-1@mobile  u-margin-bottom-lg">
            <niEmbed size="xxl" variant="shade"/>
            <div class="u-margin-left-xs">.o-embed--xxl .o-embed--shade</div>
        </div>
        <div class="o-grid__item  u-width-1@mobile  u-margin-bottom-lg">
            <niEmbed size="xxl" variant="video"/>
            <div class="u-margin-left-xs">.o-embed--xxl .o-embed--video</div>
        </div>
        <div class="o-grid__item  u-width-1@mobile  u-margin-bottom-lg">
            <niEmbed size="xxl" variant="transparent"  class="u-border  u-border-dark"/>
            <div class="u-margin-left-xs">.o-embed--xxl .o-embed--transparent</div>
        </div>
    </div>
  </div>
</template>

<script>
import niEmbed from "../../packages/object-embed/src/index";

export default {
  name: "EmbedPage",
  components: {
    niEmbed
  },
  data() {
    return {
      // variants: ['blue','blue-light','green','orange','pink','purple','red','yellow']
    };
  }
};
</script>
