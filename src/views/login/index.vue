<template>
    <main class="bg">
        <van-form @submit="onSubmit" class="form">
            <van-cell-group inset>
                <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </main>
</template>

<script setup>
import { ref } from 'vue';


const username = ref('');
const password = ref('');
const onSubmit = (values) => {
    console.log('submit', values);
};




</script>

<style scoped lang="scss">
.bg {
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    height: 100vh;
    overflow: hidden;
}

.form {
    height: 50vh;
    width: 80vw;
    box-sizing: border-box;
    margin-left: 10vw;
    margin-top: 10vh;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 2px 2px hsl(220deg 60% 50% / 0.2),
        2px 4px 4px hsl(220deg 60% 50% / 0.2),
        4px 8px 8px hsl(220deg 60% 50% / 0.2);
    padding-top: 50px;
}
</style>
