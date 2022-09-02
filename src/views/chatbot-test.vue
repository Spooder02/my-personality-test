<template>
    <div style="display: flex; justify-content: center;">
        <div id="chatWrap">
            <div id="chatHeader">MBTI봇</div>
            <div id="chatLog">
                <div class="anotherMsg">
                    <span class="anotherName">MBTI봇</span>
                    <span class="msg">안녕하세요. 현재 개발 중으로 서비스가 불가능합니다. 양해 부탁드립니다.</span>
                </div>
                <component :is="click" :sendmsg="sendmsg"></component>
            </div>
            <div id="chatForm">
                <input type="text" autocomplete="off" size="30" id="message" placeholder="메시지를 입력하세요">
                <button v-on:click="send()">보내기</button>
            </div>
        </div>
    </div>
</template>
<style>
#chatWrap {
    width: 600px;
    border: 1px solid #ddd;
}

#chatHeader {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 25px;
    font-weight: 900;
    border-bottom: 1px solid #ddd;
}

#chatLog {
    height: 700px;
    overflow-y: auto;
    padding: 10px;
}

.myMsg {
    text-align: right;
}

.anotherMsg {
    text-align: left;
    margin-bottom: 5px;
}

.msg {
    display: inline-block;
    border-radius: 15px;
    padding: 7px 15px;
    margin-bottom: 10px;
    margin-top: 5px;

}

.anotherMsg > .msg {
    background-color: #f1f0f0;

}

.myMsg > .msg {
    background-color: #0084FF;
    color: #fff;
}

.anotherName {
    font-size: 12px;
    display: block;
}

#chatForm {
    display: block;
    width: 100%;
    height: 50px;
    border-top: 2px solid #f0f0f0;
}

#message {
    width: 85%;
    height: calc(100% - 1px);
    border: none;

    padding-bottom: 0;

}

#message:focus {
    outline: none;
}

#chatForm > input[type=submit] {
    outline: none;
    border: none;
    background: none;
    color: #0084FF;
    font-size: 17px;
}
</style>
<script>
    import chatbox from '@/components/chatbox.vue'
    export default {
        name: 'chatbot-test',
        data() {
            return {
                sendmsg: String,
                click: ''
            }
        },
        methods: {
            send() {
                sendmsg = document.getElementById("message");
                click = chatbox;
            }
        },
        components: {
            chatbox
        }
    }
</script>