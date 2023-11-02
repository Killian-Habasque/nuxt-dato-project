<script setup>
import Post from '@/cms/queries/post'
const { data, pending, error } = await useLazyAsyncQuery(Post)

console.log(data)
</script>

<template>
    <div v-if="!pending">
        <div v-for="(item, index) in data.allPosts" :key="index">
            {{ item.title }}
        </div>
    </div>
</template>