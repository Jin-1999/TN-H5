<template>

</template>

<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

isLogin()

function isLogin() {
    const { token } = useUserStore()
    if (!token) useRouter().push('/login')
}

</script>

<style scoped>

</style>
