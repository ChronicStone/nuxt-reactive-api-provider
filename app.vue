<script setup lang="ts">
import AppProvider from './appProvider.vue';
import FilePreviewProvider from './file-preview/components/FilePreviewProvider.vue';
</script>

<template>
  <FilePreviewProvider>
    <AppProvider />
  </FilePreviewProvider>
</template>
