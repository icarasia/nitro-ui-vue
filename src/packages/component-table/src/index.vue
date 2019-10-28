<template>
    <table class="c-table" :class="{ 'c-table--sm' : dense,
                                     'c-table--bordered' : bordered,
                                     'c-table--striped' : striped,
                                     'c-table--fixed' : fixed,
                                     [tableClass] : tableClass
                                   }">
        <thead>
            <tr>
                <th v-for="(header, key) in headers"
                    :class="{[`text-${header.align}`] : header.align,}"
                    @click="header.sortable && sortBy(key, {sort : header.sort, name : header.sortColumnName})"

                >
                    {{ header.text }}
                    <i v-if="header.sortable" :class="{[iconClass] : iconClass, [header.sort || 'asc'] : true}">{{ header.sort === 'asc' ? 'DESC' : 'ASC' }}</i>
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-if="!$slots.body">
                <tr v-for="(item, key) in items"
                @click="$emit('click', $event, item, key)"
                @dblclick="$emit('dbclick', $event, item, key)"
                @mouseover="$emit('mouseover', $event, item, key)"
                    :class="{
                        'selected' : highlightSelected && key === selected
                    }"
                >
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
            },
            highlightSelected : {
                type : Boolean,
                required : false,
                default : false
            },
            selected : {
                type : Number,
                required : false,
                default : null
            },
            iconClass : {
                type : String,
                required : false,
                default : ''
            }
        },
        methods : {
            sortBy(index, params) {
                params.sort = params.sort && params.sort.toLowerCase() === 'asc' ? 'desc' : 'asc';
                this.headers[index].sort = params.sort;
                this.$forceUpdate();
                this.$emit('changedSort', params);
            }
        }
    }
</script>

<style scoped>
    tr.selected{
        background: #eee;
    }
</style>