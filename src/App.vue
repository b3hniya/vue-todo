<template>
  <div id="app">
    <navbar id="nav"/>  
    <router-view id="view" />
  </div>
</template>
<style lang="sass">
#nav
  position: fixed

#view
  left: 64px
  position: relative
  width: calc(100vw - 64px)


body
  margin: 0
  background-color: $main-light
</style>
