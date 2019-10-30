<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">@nitro-ui-vue</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#app-nav-mobile"
                aria-controls="app-nav-mobile"
                aria-expanded="false"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="app-nav-mobile">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/button" class="nav-link"
                            >Button</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/chip" class="nav-link"
                            >Chip</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/tooltip" class="nav-link"
                            >Tooltip</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/avatar" class="nav-link"
                            >Avatar</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/breadcrumb" class="nav-link"
                            >Breadcrumb</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/card" class="nav-link"
                            >Card</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/alert" class="nav-link">
                            Alert
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dropdown" class="nav-link">
                            Dropdown
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/form" class="nav-link"
                            >Form</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/modal" class="nav-link"
                            >Modal & Drawer</router-link
                        >
                    </li>
                    <!--                    <li class="nav-item">-->
                    <!--                        <router-link to="/pagination" class="nav-link">Pagination</router-link>-->
                    <!--                    </li>-->
                    <!--                    <li class="nav-item">-->
                    <!--                        <router-link to="/rating" class="nav-link">Rating</router-link>-->
                    <!--                    </li>-->
                    <li class="nav-item">
                        <router-link to="/grid" class="nav-link"
                            >Grid</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link disabled"
                            >Components</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link disabled"
                            >Utilities</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link disabled"
                            >Objects</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link disabled"
                            >Mixins</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>
