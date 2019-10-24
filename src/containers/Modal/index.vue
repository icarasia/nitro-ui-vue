<template>
    <div>
        <div class="display-4">
            Modal
        </div>
        <div class="text-muted">
            Some awesome description about Modal.
        </div>
        <div class="u-margin-top-md">
            <h4>Sizes</h4>
            <Button @click="first_modal = true" variant="primary"
                >First Modal</Button
            >
            <Modal
                v-bind:shown.sync="first_modal"
                :with_close_sign="true"
                size="sm"
                :close-on-outside-click="false"
                title="My First Modal"
            >
                <div>
                    This is the body content!<br />This modal with small size
                    and you can't close by clicking outside, you have close x
                    button also.<br />
                    The title is coming from props.
                </div>
                <div slot="footer">
                    <Button variant="primary">Ok</Button>
                    <Button variant="negative" @click="first_modal = false"
                        >Close</Button
                    >
                </div>
            </Modal>
            <Button @click="second_modal = true" variant="primary"
                >Second Modal</Button
            >
            <Modal v-bind:shown.sync="second_modal" :with_close_sign="false">
                <span slot="title">My Second Modal</span>
                <div>
                    This is the body content!<br />This modal with default size
                    and you can close by clicking outside, , you don't have
                    close x button also.<br />
                    The title is coming from slot.
                </div>
                <div slot="footer">
                    <Button variant="primary">Ok</Button>
                    <Button variant="negative" @click="second_modal = false"
                        >Close</Button
                    >
                </div>
            </Modal>
            <Button @click="third_modal = true" variant="primary"
                >Third Modal</Button
            >
            <Modal
                v-bind:shown.sync="third_modal"
                :with_close_sign="true"
                size="md"
            >
                <span slot="title">My Third Modal</span>
                <div>
                    This is the body content!<br />This modal with md size
                </div>
                <div slot="footer">
                    <Button variant="primary">Ok</Button>
                    <Button variant="negative" @click="third_modal = false"
                        >Close</Button
                    >
                </div>
            </Modal>
            <Button @click="forth_modal = true" variant="primary"
                >Fourth Modal</Button
            >
            <Modal
                v-bind:shown.sync="forth_modal"
                :with_close_sign="true"
                size="lg"
            >
                <span slot="title">My Fourth Modal</span>
                <div>
                    This is the body content!<br />This modal with lg size
                </div>
                <div slot="footer">
                    <Button variant="primary">Ok</Button>
                    <Button variant="negative" @click="forth_modal = false"
                        >Close</Button
                    >
                </div>
            </Modal>
        </div>
    </div>
</template>

<script>
import Modal from "../../packages/component-modal/src";
import Button from "../../packages/component-button/src/index";

export default {
    name: "ModalPage",
    components: {
        Button,
        Modal
    },
    filters: {},
    data() {
        return {
            first_modal: false,
            second_modal: false,
            third_modal: false,
            forth_modal: false
        };
    }
};
</script>
