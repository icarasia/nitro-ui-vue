<template>
    <div>
        <div class="display-4">
            Grid
        </div>
        <div class="text-muted">
            Some awesome description about Grid.
        </div>
        <div class="u-margin-top-md">
            <h4>
                Medium Grid (type="medium") with none padding on mobile and
                medium elsewhere
            </h4>
            <Container type="medium">
                <Row :paddings="['md', 'none@mobile']">
                    <Column>
                        <div style="background-color: #4488FF;padding:4px;">
                            Column 1
                        </div>
                    </Column>
                    <Column :portions="['2/4', '1@mobile']">
                        <div style="background-color: #44AAFF;padding:4px;">
                            Column 2 portions="2/4"
                        </div>
                    </Column>
                    <Column :portions="['1/3', '1@mobile']">
                        <div style="background-color: #44CCFF;padding:4px;">
                            Column 3 portions="1/3"
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
        <div class="u-margin-top-md">
            <h4>Default Grid with md padding</h4>
            <Container paddings="md">
                <Row>
                    <Column :portions="['1/8', '4/8@portable', '1/2@mobile']">
                        <div style="background-color: #4488FF;padding:4px;">
                            Column 1 portions=['1/8', '4/8@portable',
                            '1/2@mobile']
                        </div>
                    </Column>
                    <Column :portions="['2/4', '2/8@portable', '1/2@mobile']">
                        <div style="background-color: #44AAFF;padding:4px;">
                            Column 2 portions=['2/4', '2/8@portable',
                            '1/2@mobile']
                        </div>
                    </Column>
                    <Column :portions="['3/8', '2/8@portable', '1@mobile']">
                        <div style="background-color: #44CCFF;padding:4px;">
                            Column 3 portions=['3/8', '2/8@portable',
                            '1@mobile']
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
        <div class="u-margin-top-md">
            <h4>Wide Grid (type="wide") with reversed with lg padding</h4>
            <Container type="wide">
                <Row reversed paddings="lg">
                    <Column portions="2/12">
                        <div style="background-color: #4444FF;padding:4px;">
                            Column 1 (portions="2/12")
                        </div>
                    </Column>
                    <Column portions="2/12">
                        <div style="background-color: #4466FF;padding:4px;">
                            Column 2 (portions="2/12")
                        </div>
                    </Column>
                    <Column portions="2/12">
                        <div style="background-color: #4488FF;padding:4px;">
                            Column 3 (portions="2/12")
                        </div>
                    </Column>
                    <Column portions="2/12">
                        <div style="background-color: #44AAFF;padding:4px;">
                            Column 4 (portions="2/12")
                        </div>
                    </Column>
                    <Column portions="2/12">
                        <div style="background-color: #44CCFF;padding:4px;">
                            Column 5 (portions="2/12")
                        </div>
                    </Column>
                    <Column portions="2/12">
                        <div style="background-color: #44FFFF;padding:4px;">
                            Column 6 (portions="2/12")
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
        <div class="u-margin-top-md">
            <h4>Fluid Grid (type="fluid")</h4>
            <Container type="fluid">
                <Row>
                    <Column>
                        <div style="background-color: #4488FF;padding:4px;">
                            Column 1 portions="2/4"
                        </div>
                    </Column>
                    <Column portions="2/4">
                        <div style="background-color: #44AAFF;padding:4px;">
                            Column 2 portions="2/4"
                        </div>
                    </Column>
                    <Column portions="1/3">
                        <div style="background-color: #44CCFF;padding:4px;">
                            Column 3 portions="1/3"
                        </div>
                    </Column>
                </Row>
            </Container>
        </div>
        <div class="u-margin-top-md">
            <h4>Fluid Grid (type="fluid") with cards</h4>
            <Container type="fluid">
                <Row paddings="lg">
                    <Column>
                        <card>
                            Card
                        </card>
                    </Column>
                    <Column portions="5/12">
                        <card title="HI"> Test</card>
                    </Column>
                </Row>
            </Container>
        </div>
    </div>
</template>

<script>
import Container from "../../packages/component-container/src/index";
import Row from "../../packages/component-row/src/index";
import Column from "../../packages/component-col/src/index";
import Card from "../../packages/component-card/src/index";

export default {
    name: "GridPage",
    components: {
        Card,
        Column,
        Row,
        Container
    },
    data() {
        return {};
    },
    created() {}
};
</script>
