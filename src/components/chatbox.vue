<template>
    <div class="myMsg">
        <span class="msg">{{sendmsg}}</span>
    </div>
</template>

<script>
    export default {
        name: 'chatbox',
        props: {
            sendmsg: String
        }
    }
</script>