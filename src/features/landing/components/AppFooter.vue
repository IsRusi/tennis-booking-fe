<script setup lang="ts">
defineProps<{
  links: { label: string; href: string }[]
}>()
</script>

<template>
  <footer class="footer">
    <span class="footer__title">CourtSide</span>

    <div class="footer__content">
      <p class="footer__tagline">
        Premium tennis court reservations. Play when you want, where you want.
      </p>

      <nav class="footer__links">
        <a v-for="link in links" :key="link.label" class="footer__link" :href="link.href">
          {{ link.label }}
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-10) var(--space-4);
  background: var(--color-primary);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
}

.footer__title {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--font-size-xl);
  color: var(--color-text-on-dark);
}

.footer__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  opacity: 0.7;
  text-align: center;
}

.footer__tagline {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text-on-dark);
  max-width: 40ch;
}

.footer__links {
  display: flex;
  gap: var(--space-4);
}

.footer__link {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--font-size-sm);
  letter-spacing: 0.02em;
  color: var(--color-text-on-dark);
}
</style>
