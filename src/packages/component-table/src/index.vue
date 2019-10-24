<template>
    <table class="c-table" :class="{ 'c-table--sm' : dense,
                                     'c-table--bordered' : bordered,
                                     'c-table--striped' : striped,
                                     'c-table--fixed' : fixed,
                                     [tableClass] : tableClass
                                   }">
        <thead>
            <tr>
                <th v-for="header in headers" :class="{[`text-${header.align}`] : header.align}">{{ header.text }}</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="!$slots.body">
                <tr v-for="item in items">
                    <td v-for="headerItem in headers"
                        :class="{[`text-${headerItem.align}`] : headerItem.align}">
                        {{ item[headerItem.value] || 'N/A' }}
                    </td>
                </tr>
            </template>
            <slot name="body"></slot>
        </tbody>
    </table>
</template>

<script>
    import "@nitro-ui/component-table";
    export default {
        props : {
            headers : {
                type : Array,
                required : true
            },
            items : {
                type : Array,
                required : false
            },
            bordered : {
                type : Boolean,
                required : false,
                default : false
            },
            dense : {
                type : Boolean,
                required : false,
                default : false
            },
            striped : {
                type : Boolean,
                required : false,
                default : false
            },
            fixed : {
                type : Boolean,
                required : false,
                default : false
            },
            tableClass : {
                type : String,
                required : false,
                default  : ''
            }
        }
    }
</script>