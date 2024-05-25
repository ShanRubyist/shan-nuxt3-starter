<template>
    <UModal v-model="props.isOpen">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">

            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Tip
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="$emit('closeModal')" />
                </div>
            </template>

            <p>You don't has enough credit!</p>


            <template #footer>
                <div class="flex items-center justify-around">
                    <UButton color="primary" @click="gotoPay">Charge</UButton>
                </div>
            </template>

        </UCard>
    </UModal>
</template>

<script setup lang="ts">
const props = defineProps(['isOpen'])
const localePath = useLocalePath()

function gotoPay() {
    navigateTo({
        path: localePath("/pricing")
    });
}

</script>