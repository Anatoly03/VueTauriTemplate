<script setup lang="ts">
import ViewFooter from './components/ViewFooter.vue';
import ViewHeader from './components/ViewHeader.vue';
</script>

<template>
    <ViewHeader />
    <main class="view-application-content">
        <router-view />
    </main>
    <ViewFooter />
</template>

<style lang="scss" scoped>
.view-application-content {
    flex: 1;
}
</style>
