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
                :shown.sync="first_modal"
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
            <Modal :shown.sync="second_modal" :with_close_sign="false">
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
            <Modal :shown.sync="third_modal" :with_close_sign="true" size="md">
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
            <Modal :shown.sync="forth_modal" :with_close_sign="true" size="lg">
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
            <br />
            <br />
            <h4>Drawers</h4>

            <Button @click="first_drawer = true" variant="primary"
                >Top Drawer</Button
            >
            <Drawer :shown.sync="first_drawer">Top Drawer</Drawer>

            <Button @click="second_drawer = true" variant="primary"
                >Bottom Drawer</Button
            >
            <Drawer :shown.sync="second_drawer" position="bottom"
                >Bottom Drawer</Drawer
            >

            <Button @click="third_drawer = true" variant="primary"
                >Left Drawer</Button
            >
            <Drawer :shown.sync="third_drawer" position="left"
                >Left Drawer</Drawer
            >

            <Button @click="fourth_drawer = true" variant="primary"
                >Right Drawer</Button
            >
            <Drawer :shown.sync="fourth_drawer" position="right"
                >Right Drawer</Drawer
            >
        </div>
    </div>
</template>

<script>
import Modal from "../../packages/component-modal/src";
import Button from "../../packages/component-button/src/index";
import Drawer from "../../packages/component-drawer/src/index";

export default {
    name: "ModalPage",
    components: {
        Drawer,
        Button,
        Modal
    },
    filters: {},
    data() {
        return {
            first_modal: false,
            second_modal: false,
            third_modal: false,
            forth_modal: false,
            first_drawer: false,
            second_drawer: false,
            third_drawer: false,
            fourth_drawer: false
        };
    }
};
</script>
