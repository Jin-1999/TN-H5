<script setup>
import { ref } from 'vue'

const open = ref(false)
const handleClick = () => {
    setTimeout(() => {
        open = false
    }, 4000);
}
</script>

<template>
    <button @click="open = true">Open Modal</button>

    <Teleport to="body">
        <Suspense>
            <div v-if="open" class="modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>

            <template #fallback>
                LOADING...
            </template>
        </Suspense>
    </Teleport>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>