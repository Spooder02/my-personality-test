<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to="/" class="navbar-item" href="../index.html">
      <img src="@/assets/RD_logo.png">
    </router-link>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item" href="../index.html">
        <p>
			메인
		  </p>
      </router-link>
      <router-link to="/personality-tests" class="navbar-item">
		  <p>
			심리테스트
		  </p>
      </router-link>
	  <router-link to="/chatbot-test" class="navbar-item">
        <p>
			챗봇 심리테스트	
		</p>
      </router-link>
    </div>
    <div class="navbar-end">
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'navi',
  }
</script>