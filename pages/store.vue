<template>
    <h2>Store pinia</h2>
    <NuxtLink to="/">Home</NuxtLink>
    <button @click="increment">increment</button>
    <p>{{ count }}</p>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'
const inputVal = ref('')
const counterStore =  useCounterStore()
const { increment } = counterStore
const { count } = storeToRefs(counterStore)
</script>