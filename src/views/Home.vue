<template>
    <div class="home">
        <sticky :className="'sub-navbar'">
            <el-button size="mini" type="primary">选取文件</el-button>
        </sticky>
        <div>
            <form-builder type="template" v-model="formData"></form-builder>

            <!--<form-builder type="gui" :form="formData" v-model="formValues"></form-builder>-->
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

    import Sticky from "../components/Sticky/index";
    import FormBuilder from 'v-form-builder';

    export default {
        name: 'home',
        components: {
            Sticky,
            FormBuilder
        },
        data() {
            return {
                formData: {},
                formValues: {}
            }
        }
    }
</script>
