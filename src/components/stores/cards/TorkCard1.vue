<template>
<router-link :to="{ name: singleComponentName, params: { id: cardData.id } }" >
    <div class="course_card">
        <div class="course_item">
            <div class="course_thumb">
                <img
                    :src="baseStorageUrl + cardData.banner"
                    :alt="cardData.title"
                />
            </div>
            <div class="course_info">
                <router-link :to="{
                            name: singleComponentName,
                            params: { id: cardData.id }
                        }" >
                    <h3 class="course-card__title">{{ cardData.title }}</h3>
                </router-link>
                <div class="sub_info tork-d-flex tork-justify-c-space-between">
                    <span>{{ cardData.grade }} | {{ cardData.chapter }}</span>
                    <div class="rating tork-d-flex">
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                        <span class="icon-star inactive"></span>
                        <span class="count_rating">{{
                            cardData.overall_review
                        }}</span>
                    </div>
                </div>
                <!-- price -->
                <div class="price" v-if="cardData.regular_price > 0 ">
                    <div v-if="cardData.offer_price > 0">
                        <h4 class="tork-d-inline-block">
                            {{ cardData.offer_price }}TK
                        </h4>
                        <del class="tork-d-inline-block">
                            {{ cardData.regular_price }}TK
                        </del>
                    </div>
                    <div v-else>
                        <h4 class="tork-d-inline-block">
                            {{ cardData.regular_price }}TK
                        </h4>
                    </div>
                </div>
                <div v-else class="price">
                    <h4 class="tork-d-inline-block">
                        Free
                    </h4>
                </div>
                <!-- action buttons -->
                <div
                    class="action_btn tork-d-flex tork-items-center tork-justify-c-space-between"
                >
                    <router-link
                        :to="{
                            name: singleComponentName,
                            params: { id: cardData.id }
                        }"
                        class="preview__btn tork-btn tork-btn-primary tork-rounded-pill"
                    >
                        {{ leftButtonText }}
                    </router-link>
                    <button
                        @click="enrollAction(loopIndex)"
                        class="tork-btn tork-btn-outline-primary tork-rounded-pill"
                        v-if="cardData.offer_price > 0 && cardData.regular_price > 0 "
                    >
                        {{ rightButtonText }}
                    </button>
                    <router-link
                        :to="`/course-preview/${cardData.id}`"
                        v-else
                        class="tork-btn tork-btn-outline-primary tork-rounded-pill"
                        >
                        View Course
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    props: {
        cardData: {
            type: Object,
            required: true
        },
        singleComponentName: {
            type: String,
            required: true
        },
        enrollAction: {
            type: Function,
            default: null
        },
        loopIndex: {
            type: Number,
            default: null
        },
        leftButtonText: {
            type: String,
            default: "Preview Details"
        },
        rightButtonText: {
            type: String,
            default: "Enroll Now"
        }
    },
    data() {
        return {
            baseStorageUrl: ''
        };
    },
};
</script>

<style  scoped>
.course_thumb {
    transition: .3s ease-in-out;
    cursor: pointer;
}

.course_thumb:hover {
    transform: scale(1.1);
}

.preview__btn:hover {
    background-color: transparent;
    color: #1ba591;
}

.course-card__title:hover {
    color: #1ba591 !important;
}

</style>
