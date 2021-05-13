<template>
  <button v-on="$listeners" v-bind="$attrs" :class="buttonClassBinder()">
    <router-link :to="route" :class="routeClassBinder()">
      <slot> </slot>
    </router-link>
  </button>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: true,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    buttonClassBinder() {
      let cls = "";
      
      cls += this.buttonClassWrapper(cls); 

      cls += this.buttonAnimClassWrapper(cls)

      return cls;
    },

    routeClassBinder() {
      let cls = "";

      cls += this.routeClassWrapper(cls)

      return cls;
    },

    routeClassWrapper(cls){
      if (this.icon) cls += "icon";
      else cls += " text";
      
      return cls; 
    },


    buttonClassWrapper(cls) {
      if (this.icon) this.text = false;

      if (this.icon) cls += " icon-btn";
      else cls += " text-btn";

      return cls; 
    },

    buttonAnimClassWrapper(cls){
      
      if (this.ghost) cls += " ghost btn-hover";
      if (this.icon & !this.ghost) cls += " icon-btn-hover";
      if (this.text && !this.icon && !this.ghost) cls += " btn-hover";

      return cls; 
    },

  },

  inheritAttrs: false,
};
</script>

<style lang="sass">
.btn-hover
  @include main-hover-anim //from _animation.sass file



.ghost
  transition: $main-transition
  border: 1px solid $border-color
  background-color: transparent !important



.text //uses for routerlink to wrap text
  color: $main-dark
  text-decoration: none

.text-btn
  font-weight: 700
  border-radius: 8px
  @extend .text-btn-md
  text-transform: capitalize
  background-color: $primary
  @include text //from _typography.sass file
  @extend .text-md //from _typography.sass file

.text-btn-sm
  padding: 8px 16px

.text-btn-md
  padding: 12px 24px

.text-btn-lg
  padding: 16px 32px




.icon //uses for routerlink to wrap icon
  color: $main-dark
  text-decoration: none
  transition: $main-transition

.icon-btn //class passes when icon props passed to component
  border-radius: 8px
  @extend .icon-btn-sm
  transition: $main-transition

.icon-btn-sm //option for button size itself
  width: 40px
  height: 40px

.icon-btn-md //option for button size itself
  width: 44px
  height: 44px

.icon-btn-lg //option for button size itself
  width: 48px
  height: 48px

.icon-btn-hover //special hover effect for icon buttons
  &:hover
    background-color: $primary
    .icon
      color: $main-light
</style>
