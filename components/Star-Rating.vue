<script>// lang="ts"
export default {
    props: {
        rating: {
            type: Number,
        },
        max: {
            type: Number,
            default: () => 5,
        },
        showHalf: {
            type: Boolean,
            default: true,
        },
        showEmpty: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        roundRating() {
            return Math.round(this.rating);
        },
        getMax() {
            return this.showEmpty ? this.max : Math.round(this.rating);
        },
    },
};
</script>

<template>
    <ul>
        <li v-for="n of getMax">
            <svg v-if="n <= rating" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px">
                <path
                    d="M480-269 314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z" />
            </svg>
            <svg v-else-if="showHalf && n > rating && roundRating === n" xmlns="http://www.w3.org/2000/svg"
                height="24px" viewBox="0 -960 960 960" width="24px">
                <path
                    d="M480-675v312l126 77-33-144 111-96-146-13-58-136Zm0 406L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Z" />
            </svg>
            <svg v-else-if="showEmpty" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px">
                <path
                    d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm126 18L314-169q-11 7-23 6t-21-8q-9-7-14-17.5t-2-23.5l44-189-147-127q-10-9-12.5-20.5T140-571q4-11 12-18t22-9l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q14 2 22 9t12 18q4 11 1.5 22.5T809-528L662-401l44 189q3 13-2 23.5T690-171q-9 7-21 8t-23-6L480-269Zm0-201Z" />
            </svg>
        </li>
    </ul>
</template>