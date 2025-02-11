<script lang="ts" setup>
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale" class="bg-transparent outline outline-1 rounded-lg w-14">
        <option value="en">Ru</option>
        <option value="th">Uz</option>
      </select>
    </form>
  </div>
</template>

<style scoped></style>
