<template>

    <!-- Section Pricing -->
    <section>
        <!-- Pricing Container-->
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <!-- Pricing Title -->
            <div class="text-center">
                <h2 class="text-3xl font-bold md:text-5xl">Simple & Affordable Pricing</h2>
                <p class="mx-auto">Simple & fixed pricing. 30 days money-back guarantee</p>
                <p class="mx-auto mb-8 mt-4 max-w-lg text-[#636262] md:mb-12 lg:mb-16">
                    For inquiries or assistance, please contact us at
                    <a :href="'mailto:' + email" class="text-blue-500">{{ email }}</a>
                </p>
            </div>
            <!-- Pricing Table -->
            <div class="hidden text-center md:block">
                <div
                    class="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-8 pt-8 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] mb-8">
                    <div></div>
                    <div>
                        <a href="#"
                            class="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]">Get
                            Started</a>
                    </div>
                    <div>
                        <a @click="checkout(price_1)"
                            class="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]">Get
                            Started</a>
                    </div>
                    <div>
                        <a @click="checkout(price_2)"
                            class="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]">Get
                            Started</a>
                    </div>
                    <div>
                        <a @click="checkout(price_3)"
                            class="inline-block border-2 border-solid border-black px-6 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px]">Get
                            Started</a>
                    </div>
                </div>

                <div class="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-4">
                    <div class=""></div>
                    <div class="">
                        <p class="text-sm">Free</p>
                        <p class="text-3xl font-bold">$0</p>
                        <p class="text-sm font-semibold">Per month</p>
                    </div>
                    <div class="">
                        <p class="text-sm">Starter</p>
                        <p class="text-3xl font-bold">$99</p>
                        <p class="text-sm font-semibold">Per month</p>
                    </div>
                    <div class="">
                        <p class="text-sm">Agency</p>
                        <p class="text-3xl font-bold">$199</p>
                        <p class="text-sm font-semibold">Per month</p>
                    </div>
                    <div class="">
                        <p class="text-sm">Enterprise</p>
                        <p class="text-3xl font-bold">$299</p>
                        <p class="text-sm font-semibold">Per month</p>
                    </div>
                </div>
                <div
                    class="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] gap-8 py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    <div class="flex items-center">
                        <p class="font-semibold">Website Number</p>
                        <div class="ml-2">
                            <div
                                class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                ?</div>
                        </div>
                    </div>
                    <p>01</p>
                    <p>10</p>
                    <p>50</p>
                    <p>Unlimited</p>
                </div>
                <div
                    class="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    <div class="flex items-center">
                        <p class="font-semibold">Server Storage</p>
                        <div class="ml-2">
                            <div
                                class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                ?</div>
                        </div>
                    </div>
                    <p>100GB</p>
                    <p>200GB</p>
                    <p>1TB</p>
                    <p>Unlimited</p>
                </div>
                <div
                    class="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    <div class="flex items-center">
                        <p class="font-semibold">Team Members</p>
                        <div class="ml-2">
                            <div
                                class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                ?</div>
                        </div>
                    </div>
                    <p>01</p>
                    <p>20</p>
                    <p>50</p>
                    <p>Unlimited</p>
                </div>
                <div
                    class="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    <div class="flex items-center">
                        <p class="font-semibold">Access to Email API</p>
                        <div class="ml-2">
                            <div
                                class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                ?</div>
                        </div>
                    </div>
                    <p>-</p>
                    <p>-</p>
                    <div>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                            alt="" class="inline-block" />
                    </div>
                    <div>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                            alt="" class="inline-block" />
                    </div>
                </div>
                <div
                    class="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] py-8 [border-bottom:1px_solid_rgb(233,_240,_241)] lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
                    <div class="flex items-center">
                        <p class="font-semibold">Access to Storage API</p>
                        <div class="ml-2">
                            <div
                                class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                ?</div>
                        </div>
                    </div>
                    <p>-</p>
                    <p>-</p>
                    <p>-</p>
                    <div>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                            alt="" class="inline-block" />
                    </div>
                </div>
            </div>
            <!-- Pricing Table Mobile -->
            <div class="block md:hidden">
                <!-- Pricing Table Item -->
                <div>
                    <div class="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                        <p class="text-sm">Free</p>
                        <p class="text-3xl font-bold">$0</p>
                        <p class="text-sm font-semibold">per month</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Website Number</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>01</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Server Storage</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>100GB</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Team Members</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>01</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Email API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>-</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Storage API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>-</p>
                    </div>
                    <a href="#"
                        class="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <p class="mr-6">Get Started</p>
                    </a>
                </div>
                <!-- Pricing Table Item -->
                <div>
                    <div class="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                        <p class="text-sm">Starter</p>
                        <p class="text-3xl font-bold">$99</p>
                        <p class="text-sm font-semibold">per month</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Website Number</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>10</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Server Storage</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>200GB</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Team Members</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>10</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Email API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>-</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Storage API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>-</p>
                    </div>
                    <!-- <a v-if='has_active_subscription' @click="checkout(price_1)" 
                        class="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <p class="mr-6">Get Started</p>
                    </a>
                    <p v-else class="mt-8 inline-block gray">Current plan</p> -->
                    <a @click="checkout(price_1)"
                        class="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <p class="mr-6">Get Started</p>
                    </a>
                </div>
                <!-- Pricing Table Item -->
                <div>
                    <div class="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                        <p class="text-sm">Agency</p>
                        <p class="text-3xl font-bold">$199</p>
                        <p class="text-sm font-semibold">per month</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Website Number</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>50</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Server Storage</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>1TB</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Team Members</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>20</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Email API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                            alt="" class="inline-block" />
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Storage API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>-</p>
                    </div>
                    <a @click="checkout(price_2)"
                        class="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <p class="mr-6">Get Started</p>
                    </a>
                </div>
                <!-- Pricing Table Item -->
                <div>
                    <div class="pb-4 pt-12 [border-bottom:1px_solid_rgb(233,_240,_241)]">
                        <p class="text-sm">Enterprise</p>
                        <p class="text-3xl font-bold">$299</p>
                        <p class="text-sm font-semibold">per month</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Website Number</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>Unlimited</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Server Storage</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>Unlimited</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Team Members</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <p>Unlimited</p>
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Email API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                            alt="" class="inline-block" />
                    </div>
                    <div class="grid gap-8 py-4 [border-bottom:1px_solid_rgb(233,_240,_241)] md:py-8">
                        <div class="flex items-center">
                            <p class="font-semibold">Access to Storage API</p>
                            <div class="ml-2">
                                <div
                                    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded-[50%] bg-[#e9f0f1] text-xs font-bold text-[#0b0b1f54]">
                                    ?</div>
                            </div>
                        </div>
                        <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f199a0337f863_Vector (2).svg"
                            alt="" class="inline-block" />
                    </div>
                    <a @click="checkout(price_3)"
                        class="mt-8 inline-block bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                        <p class="mr-6">Get Started</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { initializePaddle } from '@paddle/paddle-js'
import { useMainStore } from '~/store'

const config = useRuntimeConfig().public
const pay_success_url = config.pay_success_url
const email = config.email

let { data: payment_info } = await useAsyncData("payment_info", async () => {
    let resp = await request("/api/v1/payment_info", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return resp.data;
});

const payment_processor = payment_info.value?.payment_processor
const paddle_billing_environment = payment_info.value?.paddle_billing_environment
const paddle_billing_client_token = payment_info.value?.paddle_billing_client_token
const price_1 = payment_info.value?.price_1
const price_2 = payment_info.value?.price_2
const price_3 = payment_info.value?.price_3

let { data: info } = await useAsyncData("active_subscription_info", async () => {
    let resp = await request("/api/v1/active_subscription_info", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    return resp.data;
});

const has_active_subscription = info.value?.has_active_subscription;
const active_subscriptions = info.value?.active_subscriptions;
// console.log(active_subscriptions)

const { locale } = useI18n()
let localeValue = locale.value || config.defaultLocale
const { notify } = useNotify()

let store = useMainStore()

async function paddle_customer() {
    const resp = await request("/paddle_customer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    });
    return resp
}

async function paddle_checkout(priceId, successUrl = pay_success_url) {
    const resp = await paddle_customer()

    if (resp.status === 200) {
        let paddleInstance = await initializePaddle(
            {
                environment: paddle_billing_environment,
                token: paddle_billing_client_token
            })

        if (paddleInstance) {
            paddleInstance.Checkout.open({
                items: [{
                    priceId: priceId,
                    quantity: 1
                }],
                settings: {
                    displayMode: "overlay",
                    locale: localeValue,
                    allowLogout: false,
                    successUrl: pay_success_url,
                },
                customer: {
                    email: store.userInfo.email,
                },
                customData: {
                    "crm_id": 1,
                    "utm_source": "web"
                },
            });
        }
    }
    else {
        notify('error', 'paddle customer error')
    }
}

async function stripe_checkout(priceId, successUrl = pay_success_url) {
    const resp = await request("/stripe_checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            locale: localeValue,
            price_id: priceId,
            success_url: successUrl
        }),
    });

    if (resp.status === 200) {
        navigateTo(resp.data.url, { external: true })
    }
    else {
        notify('error', 'stripe pay error')
    }
}


async function checkout(priceId) {
    if (payment_processor === 'paddle_billing') {
        await paddle_checkout(priceId)
    }
    else if (payment_processor === 'stripe') {
        await stripe_checkout(priceId)
    }
}

</script>