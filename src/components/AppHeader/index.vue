<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
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
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="menu-component" data-toggle="dropdown">
                            Components
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/button" class="dropdown-item">Button</router-link>
                            <router-link to="/alert" class="dropdown-item">Alert</router-link>
                            <router-link to="/chip" class="dropdown-item">Chip</router-link>
                            <router-link to="/breadcrumb" class="dropdown-item">Breadcrumb</router-link>
                            <router-link to="/card" class="dropdown-item">Card</router-link>
                            <router-link to="/avatar" class="dropdown-item">Avatar</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link to="/form" class="dropdown-item disabled">Form</router-link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="menu-layout" data-toggle="dropdown">
                            Layouts
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/grid" class="dropdown-item">Grid</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link to="/module-dashboard-sidebar" class="dropdown-item">Dashboard Sidebar</router-link>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="menu-popup" data-toggle="dropdown">
                            Popups
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="/modal" class="dropdown-item">Modal</router-link>
                            <router-link to="/dropdown" class="dropdown-item">Dropdown</router-link>
                            <router-link to="/tooltip" class="dropdown-item">Tooltip</router-link>
                        </div>
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
