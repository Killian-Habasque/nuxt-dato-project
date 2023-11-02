<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
function increment() {
    state.count++
}

const items = ["test", "test2"]
const username = ref()

const isActive = ref(true)
const hasError = ref(false)

const showName = () => 'John Doe'
const consoleName = () => console.log('John doe')


function callback() {
    console.log("Component callback")
}
</script>

<template>
    <button @click="increment">
        {{ state.count }}
    </button>
    <br>_________________________________________<br>
    <div v-if="Math.random() > 0.5">
        Now you see me
    </div>
    <div v-else>
        Now you don't
    </div>
    <br>_________________________________________<br>
    <div v-for="item in items" :key="item.id">
        {{ item }}
    </div>
    <br>_________________________________________<br>
    <input type="text" v-model="username" />
    <p>rendu: {{ username }}</p>
    <br>_________________________________________<br>
    <div class="static" :class="{
        active: isActive,
        'text-danger': hasError
    }">Text class</div>

    <br>_________________________________________<br>
    <ComponentsTest greeting-message="hello" />
    <br>_________________________________________<br>
    <p>{{ showName() }}</p>
    <button @click="consoleName()">Console name</button>

    <br>_________________________________________<br>
    <ComponentCallback @some-event="callback" />

    
</template>

<style scoped>
button {
    background: red;
}

.active {
    color: green;
}

.text-danger {
    color: red;
}
</style>