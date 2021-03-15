<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/31/1470313974-screen-shot-2016-08-04-at-133459.jpg?resize=480:*" alt="CodeWorks Logo">
    <h1 class="my-5 bg-warning text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Pokeman</span>
    </h1>
    <h5>Goota grab 'em</h5>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
