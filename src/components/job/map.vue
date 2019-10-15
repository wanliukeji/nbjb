<!--<template>-->
<!--  <div class="map">-->
<!--    HJ好看KHKJH-->
<!--    <baidu-map class="baidumap" :center="{lan:108.927154,lat:34.229159}"-->
<!--     :zoom="15" :scroll-wheel-zoom="true" :map-style="{styleJson:styleJson}"-->
<!--     :map-type="BMAP_NORMAL_MAP">-->
<!--    </baidu-map>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                styleJson: [-->
<!--                    {-->
<!--                        "featureType":"all",-->
<!--                        "elementType":"geometry",-->
<!--                        "stylers":{-->
<!--                            "hue":"#007fff",-->
<!--                            "saturation":89-->
<!--                        }-->
<!--                    },-->
<!--                    {-->
<!--                        "featureType":"water",-->
<!--                        "elementType":"all",-->
<!--                        "stylers":{-->
<!--                            "color":"#ffffff"-->
<!--                        }-->
<!--                    }-->
<!--                ]-->
<!--            }-->
<!--        },-->

<!--        created(){-->
<!--        },-->
<!--        mounted(){-->
<!--            //请求百度地图api接口-->
<!--            let params = {-->
<!--                'address':'北京市朝阳区工体北路1号',-->
<!--                'ak':'百度地图ak',-->
<!--                'output':'json',-->
<!--            };-->
<!--            getAddress(params,sucessAddressCallBack, errorAddressCallBack);-->
<!--            const  self = this;-->
<!--            function sucessAddressCallBack(res) {-->
<!--                if(res.data.status === 0){-->
<!--                    self.location.lng = res.data.result.location.lng;-->
<!--                    self.location.lat = res.data.result.location.lat;-->
<!--                    self.setMap()-->
<!--                }-->
<!--            };-->
<!--            function errorAddressCallBack(err) {-->
<!--                console.log(err);-->
<!--            }-->
<!--        },-->
<!--        methods: {}-->

<!--    }-->
<!--</script>-->

<!--<style scoped>-->
<!--  .baidumap {-->
<!--    height: 600px;-->
<!--    width: 500px;-->
<!--  }-->
<!--</style>-->
