<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps<{ imageUrl: string }>()
</script>

<template>
    <section class="hero-section">
        <div class="hero-section__goal">
            <h1 class="hero-section__goal">{{ t('hero.goal') }}</h1>
        </div>
        <div class="hero-section__media">
            <img class="hero-section__image" :src="imageUrl" alt="" />
            <div class="hero-section__overlay" />

            <div class="hero-section__caption">
                <h1 class="hero-section__title">{{ t('hero.title') }}</h1>
                <p class="hero-section__tagline">{{ t('hero.tagline') }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-section {
    padding-top: 3.5rem;
}

.hero-section__media {
    position: relative;
    aspect-ratio: 358 / 400;
    margin: 1em;
    overflow: hidden;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-hero);
}

.hero-section__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-section__overlay {
    position: absolute;
    inset: 0;
    background: var(--overlay-image-bottom);
}

.hero-section__goal {
    color:var(--color-text-muted);
    font-family: var(--font-body);
    font-size: var(--font-size-lg);
    font-weight: 700;
    margin: 1em;
    justify-items: center;
}

.hero-section__caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-6);
}

.hero-section__title {
    margin: 0;
    color: var(--color-text-on-dark);
    font-family: var(--font-heading);
    font-size: var(--font-size-xl);
    font-weight: 700;
}

.hero-section__tagline {
    margin: 0;
    color: var(--color-text-on-dark);
    opacity: 0.9;
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    max-width: 28ch;
}
</style>