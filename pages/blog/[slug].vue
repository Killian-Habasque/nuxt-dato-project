<script setup>
const route = useRoute()
if (route.params.slug === 'admin') {
    console.log('This is admin page')
}
</script>

<template>
    <p>Blog - {{ $route.params.slug }}</p>
</template>