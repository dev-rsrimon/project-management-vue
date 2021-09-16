<template>
    <div class="progress-card">
        <div class="progress-card__header">
            <div class="progress-card__header-left-inner">
                <div class="progress-card__header__icon">
                    <img src="@/assets/images/google.png" alt="icon">
                </div>
                <div class="progress-card__header-info">
                    <h5 class="progress-card__header__title">Google</h5>
                    <span class="progress-card__header__c-name">Google Inc.</span>
                </div>
            </div>
            <!-- card header -->
            <div class="progress-card__header-right-inner">
                <div class="progress-card__header__icon-two">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>                    
                </div>
                <button class="progress-card__header__menu tork-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="progress-card__action">
            <button class="progress-card__action-btn tork-btn">Select Progress</button>
            <button class="progress-card__action-btn progress-card__action-btn-primary tork-btn">High Priority</button>
        </div>
        <div class="progress-card__progress-bar">
            <h4 class="progress-card__progress-bar__title">
                Task Done: <span>25</span> /60
            </h4>
            <div class="progress-card__progress-bar__bar">
                <span class="done"></span>
            </div>
        </div>
        <div class="progress-card__tag">
            <span class="progress-card__tag-item">App</span>
            <span class="progress-card__tag-item">UI/UX</span>
            <span class="progress-card__tag-item">Web</span>
        </div>
        <div class="progress-card__participants">
            <div class="progress-card__participants-img">
                <img src="@/assets/images/users/user-1.jpg" alt="">
            </div>
            <div class="progress-card__participants-img">
                <img src="@/assets/images/users/user-2.jpg" alt="">
            </div>
            <div class="progress-card__participants-img">
                <img src="@/assets/images/users/user-3.jpg" alt="">
            </div>
            <div class="progress-card__participants-img">
                <img src="@/assets/images/users/user-4.jpg" alt="">
            </div>
            <div class="progress-card__participants-img">
                <img src="@/assets/images/users/user-5.jpg" alt="">
            </div>
            <div class="progress-card__participants-img">
                <span>+5</span>
            </div>
        </div>
        <div class="progress-card__date progress-card__action-btn">
            <span>Due Date:</span> 21 June 2021
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.progress-card {
    padding: 20px;
    background-color: $white-color;
    border-radius: 15px;
    box-shadow: 0 0 20px $shadow-color;
    margin-top: 30px;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        &-left-inner {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        
        &-info {
            margin-left: 15px;
        }
        // left inner
        &__icon {
            width: 45px;
            height: 45px;
            border-radius: 8px;
            background-color: $primary-color + unquote("1a");
            padding: 6px;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &__title {
            font-size: 1rem;
            font-weight: 500;
            text-transform: capitalize;
            color: $dark-color;
            line-height: 1.2;
        }

        &__c-name {
            font-size: .85rem;
            font-weight: 400;
            color: $secondary-color;
            text-transform: capitalize;
        }

        // right inner
        &-right-inner {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        &__icon-two {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid $muted-color;
            padding: 6px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                fill: $primary-color;
            }
        }

        &__menu {
            padding: 0;
            margin-left: 15px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 25px;
                height: 25px;
                fill: $dark-color;
            }
        }
    }

    &__action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        &-btn {
            padding: 0;
            background: $light-color;
            padding: 5px 10px;
            border-radius: 5px;
            color: $dark-color + unquote("a6");
            font-size: .75rem;
            text-transform: uppercase;
            font-weight: 500;
            display: inline-block;
        }

        &-btn-primary {
            background-color: transparent;
            border-color: $primary-color;
            color: $primary-color;
        }
    }

    &__progress-bar {
        width: 100%;
        margin-bottom: 20px;

        &__title {
            font-size: .875rem;
            color: $dark-color + unquote("a6");
            font-weight: 500;
            text-transform: capitalize;
            margin-bottom: 10px;
            
            span {
                color: $dark-color;
            }
        }

        &__bar {
            width: 100%;
            height: 6px;
            border-radius: 30px;
            background-color: $muted-color;
            overflow: hidden;

            .done {
                height: 100%;
                width: 50%;
                border-radius: 30px;
                display: block;
                background-color: $purpal-color;
            }
        }
    }

    &__tag {
        margin-bottom: 20px;

        &-item {
            display: inline-block;
            padding: 5px 10px;
            font-size: .75rem;
            margin-right: 7px;
            border-radius: 5px;
            font-weight: 500;
            background-color: $blue-color + unquote("1a");
            color: $blue-color;
            text-transform: uppercase;


            &:nth-child(even) {
                background-color: $success-color + unquote("1a");
                color: $success-color;
            }
        }

    }

    &__participants {
        margin-bottom: 10px;

        &-img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: inline-block;
            overflow: hidden;
            border: 2px solid $white-color;

            &:last-child {
                border-color: $muted-color;
            }

            &:not(:first-child) {
                margin-left: -8px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                font-size: .75rem;
                font-weight: 500;
                background-color: $white-color;
                color: $secondary-color;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
        }
    }

    &__date {
        color: $primary-color;
        background-color: $primary-color + unquote("1e");

        span {
            font-weight: 600;
        }
    }

}
</style>