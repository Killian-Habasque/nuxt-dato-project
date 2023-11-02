<script setup>
const imageSrc = ref("MicrosoftTeams-image.png")
</script>

<template>
    <div>
        <NuxtLink to="/store">About page</NuxtLink>
        <h1>Welcome to the homepage</h1>
        <AppInfo>
            This is an auto-imported component
        </AppInfo>
        <div class="image">
            <img :src="imageSrc" alt="chat" />
        </div>
    </div>
</template>