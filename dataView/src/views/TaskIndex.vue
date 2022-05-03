<template>
  <div class="main">
    <!-- <h1>Welcome to Vue-cli3 Clean Template!</h1> -->
    <demo/>
  </div>
</template>

<script>
import demo from '@/components/TaskIndex'
export default {
  name: 'TaskIndex',
  components: {demo},
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style>
.main{
  height:100% !important;
}
</style>