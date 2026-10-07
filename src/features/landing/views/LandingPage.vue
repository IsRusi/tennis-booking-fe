<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'


import SurfaceIcon from '../components/icons/SurfaceIcon.vue'
import CourtIcon from '../components/icons/CourtIcon.vue'
import TimeIcon from '../components/icons/TimeIcon.vue'
import LeafIcon from '../components/icons/LeafIcon.vue'

import HeaderPart from '../components/HeaderPart.vue'
import HeroSection from '../components/HeroSection.vue'
import SurfaceCard from '../components/SurfaceCard.vue'
import CourtCard from '../components/CourtCard.vue'


const { t } = useI18n()

const surfaceFeatures = computed(() => [
    {
        title: t('surface.features.surface.title'),
        description: t('surface.features.surface.description'),
        tags: [
            t('surface.features.surface.tags.clay'),
            t('surface.features.surface.tags.hard')
        ],
        icon: 'surface'
    },
    {
        title: t('surface.features.size.title'),
        description: t('surface.features.size.description'),
        tags: [
            t('surface.features.size.tags.regulation'),
            t('surface.features.size.tags.itf')
        ],
        icon: 'court'
    },
    {
        title: t('surface.features.schedule.title'),
        description: t('surface.features.schedule.description'),
        tags: [
            t('surface.features.schedule.tags.hours'),
            t('surface.features.schedule.tags.floodlit')
        ],
        icon: 'time'
    },
    {
        title: t('surface.features.location.title'),
        description: t('surface.features.location.description'),
        tags: [
            t('surface.features.location.tags.scenic'),
            t('surface.features.location.tags.freshAir')
        ],
        icon: 'leaf'
    }
])

const courts = computed(() => [
    {
        name: t('courts.items.riverside.name'),
        address: t('courts.items.riverside.address'),
        rating: '4.9',
        statusLabel: t('courts.items.riverside.status'),
        statusVariant: 'open' as const
    },
    {
        name: t('courts.items.downtown.name'),
        address: t('courts.items.downtown.address'),
        rating: '4.8',
        statusLabel: t('courts.items.downtown.status'),
        statusVariant: 'closed' as const
    },
    {
        name: t('courts.items.heritage.name'),
        address: t('courts.items.heritage.address'),
        rating: '',
        statusLabel: t('courts.items.heritage.status'),
        statusVariant: 'premium' as const,
        ctaDisabled: true
    },
    {
        name: t('courts.items.skyline.name'),
        address: t('courts.items.skyline.address'),
        rating: '4.7',
        statusLabel: t('courts.items.skyline.status'),
        statusVariant: 'open' as const
    }
])



</script>

<template>
    <div class="page">
        <HeaderPart />

        <main class="page__main">
            <HeroSection image-url="/images/hero.jpg" :tagline="t('hero.tagline')" />

            <section class="section">
                <h2 class="section__title">
                    {{ t('surface.title') }}
                </h2>

                <div class="section__stack">
                    <SurfaceCard v-for="feature in surfaceFeatures" :key="feature.title" v-bind="feature">
                        <template #icon>
                            <SurfaceIcon v-if="feature.icon === 'surface'" />
                            <CourtIcon v-else-if="feature.icon === 'court'" />
                            <TimeIcon v-else-if="feature.icon === 'time'" />
                            <LeafIcon v-else-if="feature.icon === 'leaf'" />
                        </template>
                    </SurfaceCard>
                </div>
            </section>

            <section class="section">
                <div class="section__header">
                    <h2 class="section__title section__title--left">
                        {{ t('courts.title') }}
                    </h2>

                    <a class="section__see-all" href="#">
                        {{ t('courts.seeAll') }}
                    </a>
                </div>

                <div class="gallery">
                    <CourtCard v-for="court in courts" :key="court.name" image-url="/images/court-placeholder.jpg"
                        v-bind="court" />
                </div>
            </section>

            
        </main>

       
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.page__main {
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    width: 100%;
    max-width: var(--page-max-width);
    margin: 0 auto;
    padding: var(--space-8) var(--space-4) var(--space-10);
}

.section {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

.section__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.section__title {
    font-size: var(--font-size-xl);
    font-weight: 500;
    text-align: center;
}

.section__title--left {
    text-align: left;
}

.section__see-all {
    font-family: var(--font-body);
    font-weight: 600;
    font-size: var(--font-size-sm);
    letter-spacing: 0.02em;
    color: var(--color-primary-muted);
}

.section__stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
}

.gallery {
    display: flex;
    gap: var(--space-6);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: var(--space-2);
}

.gallery>* {
    scroll-snap-align: start;
}

.amenities {
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    padding: var(--space-6);
    background: var(--color-mint-bg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
}

@media (min-width: 640px) {
    .section__stack {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .amenities {
        flex-direction: row;
    }

    .amenities>* {
        flex: 1;
    }
}
</style>