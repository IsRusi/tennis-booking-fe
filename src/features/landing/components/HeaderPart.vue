<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineEmits<{ book: [] }>()
</script>

<template>
  <header class="header-container">
    <button class="header-container__burger-menu" :aria-label="t('header.menuLabel')">
      <span class="burger-icon" />
    </button>

    <p class="header-container__title">{{ t('header.brandName') }}</p>

    <button class="header-container__button" @click="$emit('book')">
      {{ t('header.bookButton') }}
    </button>
  </header>
</template>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  border-radius: 0 0 10px 10px;
  background-color: var(--color-primary);
  height: 3.5rem;
  padding: 0 1em;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.header-container__burger-menu {
  justify-self: start;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
}

.burger-icon {
  display: block;
  width: 1.125rem;
  height: 2px;
  background: var(--color-text-on-dark);
  box-shadow: 0 6px 0 var(--color-text-on-dark), 0 -6px 0 var(--color-text-on-dark);
}

.header-container__title {
  justify-self: center;
  margin: 0;
  color: var(--color-text-on-dark);
  font-size: var(--font-size-lg);
  font-family: var(--font-heading);
  font-weight: 600;
}

.header-container__button {
  justify-self: end;
  padding: 0.4em var(--space-4);
  border-radius: var(--radius-pill);
  border: 0;
  background-color: var(--color-mint-pill);
  color: var(--color-text);
  font-size: var(--font-size-sm);
  font-family: var(--font-heading);
  font-weight: 600;
  box-shadow: var(--shadow-card);
  transition: color 0.15s ease;
}

.header-container__button:active {
  color: var(--color-primary-muted);
}

@media screen and (min-width: 500px) {
  .header-container {
    padding: 0 2em;
  }
}
</style>