<template>
  <div id="swagger-ui"></div>
</template>

<script setup lang="ts">
import "swagger-ui-dist/swagger-ui.css";
import type { SwaggerUIBundle, Spec } from "swagger-ui-dist";

window.setTimeout(() => {
  // we need to make sure, that swagger-ui exists, otherwise the following command will fail
  // therefore waiting is effective
  import("swagger-ui-dist").then(({ SwaggerUIBundle }) =>
    SwaggerUIBundle({
      url: "/openapi.yaml",
      dom_id: "#swagger-ui",
      presets: [SwaggerUIBundle.presets.apis],
    })
  );
}, 10);
</script>