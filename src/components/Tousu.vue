<template>
     <div class="tousu-container">
        <div class="tousu-title">
            <h2 class="tousu-reason">请选择投诉该网页的原因:</h2>
        </div>
        <ul class="tousu-list">
            <li><a href="#">网页包含欺诈信息</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">网页包含色情信息</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">网页包含诱导行为</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">网页包含不实信息</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">网页包含违法犯罪</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">网页包含骚扰信息</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">违规声明原创</a><i class="icon-keyboard_arrow_right"></i></li>
            <li><a href="#">未经授权的文章内容</a><i class="icon-keyboard_arrow_right"></i></li>
        </ul>
        <div class="line"></div>
        <div class="other"><a href="tijiao3.html">其他</a></div> 
    </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
.tousu-container {
    margin: 0 auto;
    margin-top: -50px;
    .tousu-title {
        width: 100%;
        border-bottom: 1px solid #ccc;
        h2 {
            font-size: 14px;
            color: #3c3c3c;
            font-weight: 200;
            text-align: left; 
            margin-left: 20px;
            padding: 10px 0;
        }
    }
    .tousu-list {
        width: 335px;
        margin: 0 auto;
        li {
            width:100%;
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
            font-size: 16px;
            color: #333;
            text-align: left;
            &:last-child {
                border: none;
            }
            a {
                font-size: 16px;
                color: #333;
            }
            .icon-keyboard_arrow_right {
                font-size: 16px;
                padding: 10px 0;
            }
            
        }
    }
    
    .line {
        width: 100%;
        height: 1px;
        background-color: #ccc;
    }
    .other {
        width: 335px;
        margin: 0 auto;
        padding-top: 10px;
        text-align: left;
        a {
            font-size: 16px;
            color: #333;
        }
    }
}
   
</style>


