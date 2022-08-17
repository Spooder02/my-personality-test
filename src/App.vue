<template>
  <div id="app">
    <navi/>
    <router-view/>
  </div>
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

p {
	font-family: 'Noto Sans KR', sans-serif;
}

.card {
  width: 47.5%;
  height: auto;
}

.contentss {
	padding: 3%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	align-content: space-between;
}

.test-contents {
	padding-top: 5%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

.survey-contents {
	padding-top: 1%;
	padding-bottom: 1%;
}

.survey-desc {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

p.green {
  color: rgb(0, 240, 52);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

</script>