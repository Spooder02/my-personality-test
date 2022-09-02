<template>
<div>
    <div class="box">
		<p class="title is-1" style="text-align: center; padding-top: 1.5%;">
			{{ testname }}
		</p>
	</div>
		<div class="box">
        <div class="survey-desc">
			<div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img :src="require('@/assets/' + bannerlink)" width="100%" height=auto alt="Placeholder image">
                </figure>
            </div>
            </div>
        <div class="card">
        <div class="card-content">
            <p class="subtitle">
            소요시간 : {{ esttime }}<br>
            테스트 요약: <br>{{ testdesc }}<br>
            테스트 제작자 : {{ author }}
            </p>
        </div>
        <footer class="card-footer">
            <p class="card-footer-item">
            <span>
                <router-link :to="dir"><p class="green">테스트 시작</p></router-link>
            </span>
            </p>
            <p class="card-footer-item">
            <span>
                <a href="https://www.instagram.com/">테스트 공유하기</a>
            </span>
            </p>
        </footer>
        </div>
		</div>
	</div>
    <div class="box">
        <img :src="require('@/assets/' + imagelink)" width="90%" height=auto></image>
    </div>
</div>
</template>

<script>
    export default {
        name: 'surveyguide',
        props: {
            bannerlink: String,
            testname: String,
            esttime: String,
            testdesc: String,
            author: String,
            dir: String,
            imagelink: String
        }
    }
</script>