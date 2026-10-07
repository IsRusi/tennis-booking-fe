<script setup lang="ts">
withDefaults(defineProps<{
    title: string
    description: string
    tags?: string[]
    expandable?: boolean
}>(), {
    tags: () => [],
    expandable: true,
})

defineEmits<{ expand: [] }>()
</script>

<template>
    <article class="surface-card">
        <div class="surface-card__main">
            <div class="surface-card__icon">
                <slot name="icon" />
            </div>

            <div class="surface-card__body">
                <h3 class="surface-card__title">{{ title }}</h3>
                <p class="surface-card__desc">{{ description }}</p>
            </div>

            <button v-if="expandable" class="surface-card__expand" aria-label="Expand details" @click="$emit('expand')">
            </button>
        </div>

        <ul v-if="tags.length" class="surface-card__tags">
            <li v-for="tag in tags" :key="tag" class="surface-card__tag">{{ tag }}</li>
        </ul>
    </article>
</template>

<style scoped>
.surface-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--color-mint-card);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-card);
}

.surface-card__main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--space-4);
}

.surface-card__icon {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--color-surface);
    border-radius: var(--radius-pill);
    box-shadow: var(--shadow-card);
    color: var(--color-primary);
}

.surface-card__body {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    min-width: 0;
}

.surface-card__title {
    font-size: var(--font-size-base);
    font-weight: 700;
    color: var(--color-text);
}

.surface-card__desc {
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
}

.surface-card__expand {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
}

.surface-card__chevron {
    width: 10px;
    height: 6px;
    border-bottom: 2px solid var(--color-text-muted);
    border-right: 2px solid var(--color-text-muted);
    transform: rotate(45deg);
    margin-top: -4px;
}

.surface-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    list-style: none;
    margin: 0;
    padding: 0;
}

.surface-card__tag {
    padding: var(--space-1) var(--space-3);
    background: var(--color-surface);
    color: var(--color-text-muted);
    font-family: var(--font-body);
    font-size: var(--font-size-xs);
    border-radius: var(--radius-pill);
    box-shadow: var(--shadow-card);
}
</style>