<script setup lang="ts">
withDefaults(defineProps<{
  imageUrl: string
  name: string
  rating: string
  address: string
  statusLabel: string
  statusVariant?: 'open' | 'closed' | 'premium'
  ctaLabel?: string
  ctaDisabled?: boolean
}>(), {
  statusVariant: 'open',
  ctaLabel: 'Book Now',
  ctaDisabled: false,
})

defineEmits<{ book: [] }>()
</script>

<template>
  <article class="court-card">
    <div class="court-card__media">
      <img class="court-card__image" :src="imageUrl" :alt="name" />

      <div class="court-card__rating">
        <span class="court-card__star" />
        <span>{{ rating }}</span>
      </div>

      <span class="court-card__status" :class="`court-card__status--${statusVariant}`">
        {{ statusVariant === 'open' ? 'Open' : statusVariant === 'premium' ? 'Premium' : 'Closed' }}
      </span>
      <span class="court-card__status court-card__status--label">{{ statusLabel }}</span>
    </div>

    <div class="court-card__body">
      <div class="court-card__heading">
        <h3 class="court-card__name">{{ name }}</h3>
      </div>

      <p class="court-card__address">
        <span class="court-card__pin" />
        {{ address }}
      </p>

      <button
        class="court-card__cta"
        :class="{ 'court-card__cta--disabled': ctaDisabled }"
        :disabled="ctaDisabled"
        @click="$emit('book')"
      >
        {{ ctaLabel }}
      </button>
    </div>
  </article>
</template>

<style scoped>
.court-card {
  flex: none;
  width: 280px;
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.court-card__media {
  position: relative;
  aspect-ratio: 330 / 256;
}

.court-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.court-card__rating {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-card);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--font-size-sm);
  color: var(--color-text);
}

.court-card__star {
  width: 12px;
  height: 12px;
  background: var(--color-rating-star);
  border-radius: 2px; /* swap for an actual star icon/svg */
}

.court-card__status {
  position: absolute;
  left: var(--space-4);
  top: var(--space-4);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-size: var(--font-size-xs);
  color: var(--color-text-on-dark);
  box-shadow: var(--shadow-card);
}

.court-card__status--open {
  background: var(--color-primary);
}

.court-card__status--closed {
  background: var(--color-badge-neutral);
}

.court-card__status--premium {
  background: var(--gradient-premium);
}

.court-card__status--label {
  top: calc(var(--space-4) + 24px + var(--space-2));
  background: var(--color-mint-pill);
  color: var(--color-primary);
}

.court-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-6);
}

.court-card__name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text);
}

.court-card__address {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text-muted);
}

.court-card__pin {
  flex: none;
  width: 10px;
  height: 12px;
  background: var(--color-icon-muted);
  border-radius: 2px; /* swap for an actual pin icon/svg */
}

.court-card__cta {
  margin-top: var(--space-2);
  padding: var(--space-3) 0;
  background: var(--color-mint-pill);
  color: var(--color-primary-soft);
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: var(--font-size-base);
  border-radius: var(--radius-pill);
  text-align: center;
}

.court-card__cta--disabled {
  background: var(--color-neutral-pill);
  color: var(--color-text-muted);
  cursor: not-allowed;
}
</style>
