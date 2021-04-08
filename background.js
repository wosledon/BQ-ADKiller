var clearAD = {
    clearIframe: function () {
        var iframe_tags = document.getElementsByTagName('iframe');
        for (let i = 0; i < iframe_tags.length; i++) {
            iframe_tags[i].remove();
            console.log(iframe_tags[i] + ":" + i + "remove!");
        }
        console.log("iframe clear!");
    },

    /**
     * 自定义过滤规则
     */
    clearWin: function () {
        var AD_id = [
            "cs_DIV_cscpvrich7316B"
        ];

        var AD_css = [
            "downcode",
            "con_ad"
        ];

        for (let i = 0; i < AD_id.length; i++) {
            $('#' + AD_id[i]).remove();
        }

        for (let i = 0; i < AD_css.length; i++) {
            $('.' + AD_css[i]).remove();
        }

        console.log("AD clear!");
    },

    /**
     * 筛选算法
     * iframe
     * javaScript
     * object
     */
    findSomeAdPossible: function () {
        var sap = $('div iframe'),
            ad_img = $('div script').parent().find('img,embed'),
            float_img = $('div object').parent().find('img,embed');

        this.arrayDel(sap, 360, 200);
        this.arrayDel(ad_img, 350, 150);
        this.arrayDel(float_img, 350, 150);
    },
    arrayDel: function (arr, conWidth, conHeight) {
        var len = arr.length;

        for (var i = 0; i < len; i++) {
            var self = arr.eq(i);

            if (self.width() <= conWidth || self.height() <= conHeight) {
                self.remove();
            }

        }
    },

    init: function () {
        this.clearIframe();
        this.clearWin();
        this.findSomeAdPossible();
    }
}

$(function () {
    $(document).ready(function () {
        var count = 1;
        var timer=window.setInterval(refreshCount, 1000);
        function refreshCount() {
            clearAD.init();
            console.log(++count);
            if(count>=20){
                window.clearInterval(timer);
            }
        }
    });
})

// function clear(value) {
//     var count = 1;
//     var timer = null;
    
//     if(value){
//         timer = window.setInterval(refreshCount, 1000);
//     }else{
//         try {
//             window.clearInterval(timer);
//         } catch (error) {
//             console.error(error);
//         }
//     }
// }

// function refreshCount() {
//     clearAD.init();
//     console.log(++count);
//     if (count >= 20) {
//         window.clearInterval(timer);
//     }
// }