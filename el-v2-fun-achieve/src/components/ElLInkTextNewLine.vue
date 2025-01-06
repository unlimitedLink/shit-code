<template>
    <div id="el-link-layout">
        <div class="nav">
            <el-row>
                <el-col v-for="(item, index) in data" :key="index" :span="24 / data.length">
                    {{ item.name }}
                </el-col>
            </el-row>
        </div>
        <div class="footer">
            <el-row>
                <el-col v-for="(item, index) in data" :key="index" :span="24 / data.length">
                    <el-link class="custom-link" underline>{{ item.value }}</el-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElLInkTextNewLine',
    data() {
        return {
            data: [
                { name: '项目一号', value: (Math.random() * 9000 + 1000).toFixed(2) },
                { name: '第二项目', value: (Math.random() * 90000 + 10000).toFixed(2) },
                { name: '第三个项目', value: (Math.random() * 900000 + 100000).toFixed(2) },
                { name: '第四项', value: (Math.random() * 9000 + 1000).toFixed(2) },
                { name: '第五个', value: (Math.random() * 90000 + 10000).toFixed(2) },
                { name: '第六项', value: (Math.random() * 900000 + 100000).toFixed(2) },
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
#el-link-layout {
    width: calc(100% - 400px);
    padding: 10px 20px;
    margin: 20% auto;
    background: #efe;
}

::v-deep {
    .el-row {
        display: flex;

        .el-col {
            text-align: center;
            padding: 5px 0;
            border: 1px solid #000;
        }
    }


    .custom-link {
        display: block;
        white-space: normal;
        word-wrap: break-word;
    }

}
</style>