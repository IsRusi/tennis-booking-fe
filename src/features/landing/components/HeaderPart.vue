<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <header class="header-container">
        <div class="header-container__burger-menu">
            <p>...</p>
        </div>
        <div class="header-container__title">
            <p>{{ t('title.name') }}</p>
        </div>

        <button class="header-container__button">{{ t('booking.book') }}</button>

    </header>
</template>

<style scoped>
@media screen and (max-width:360px) {


    .header-container {
        margin-top: -0.75em;
        margin-left: -0.5em;
        margin-right: -0.5em;
        border-radius: 0px 0px 10px 10px;
        background-color: var(--color-primary);
        height: 7.5vh;
        padding: 0 1em;

        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;

    }


    .header-container__button {
        padding: 0.4em var(--space-mmd);
        border-radius: var(--radius-md);
        border: 0px solid;
        height: 3.5vh;
        background-color: var(--color-secondary-button);
        color: var(--color-text);
        font-size: var(--font-size-xsm);
        font-family: var(--font-family-base);
        font-weight: 600;
        justify-self: end;
    }

    .header-container__button:active {
        color: var(--color-surface);
    }

    .header-container__title {
        color: var(--color-surface);
        font-size: var(--font-size-lg);
        font-family: var(--font-family-base);
        font-weight: 600;
        justify-self: center;
    }

    .header-container__burger-menu {
        justify-self: start;
    }
}
</style>