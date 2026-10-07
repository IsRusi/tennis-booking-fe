<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="amenity-card">
    <div class="amenity-card__icon">
      <slot name="icon" />
    </div>
    <h3 class="amenity-card__title">{{ title }}</h3>
    <p class="amenity-card__desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.amenity-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  text-align: center;
}

.amenity-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--color-mint-pill);
  border-radius: var(--radius-md);
  color: var(--color-primary-soft);
}

.amenity-card__title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text);
}

.amenity-card__desc {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
  max-width: 32ch;
}
</style>
