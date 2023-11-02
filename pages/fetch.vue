<script setup>
// SSR
const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains')
console.log(data._rawValue)
</script>

<template>
    <div>
        <h1>Fetch</h1>
        <div v-for="(item, index) in data" :key="index">
            {{ item.title }}
            <img :src="item.image" alt="" />
        </div>
    </div>
</template>