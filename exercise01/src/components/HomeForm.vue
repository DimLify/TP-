<template>
  <div>
    <div class="container2">
      <div class="home">
        <h3>Welcome to Home Page</h3>
        <div>You will automatically logged out</div>
        <div>Keep refreshing your paage</div>
        <a href="/"><button type="submit" id="btn_logout">Log Out</button></a>
      </div>
    </div>
  </div>
</template>

<style>
header {
  display: none;
}
h3 {
  background-color: #aaa;
  text-align: center;
  margin-bottom: 20px;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#btn_logout {
  cursor: pointer;
  background-color: rgba(239, 54, 54);
  color: white;
  border-style: outset;
  border-color: #0066a2;
  height: 2rem;
  width: 4rem;
  font: sans-serif;
  text-shadow: none;
  margin-top: 0.645rem;
  border-radius: 0.165rem;
  margin: 0.5rem 0 0.67rem 0;
}
</style>
