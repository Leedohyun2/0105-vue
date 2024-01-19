<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center">
                <!-- 카메라 영상 부분을 표시 -->
                <video ref="rVideo" class="style_video"></video>
            </v-col>
            <v-col cols="12" class="mt-5" text-center>
                <p>현재 ios는 지원하지 않습니다.</p>
            </v-col>
        </v-row>
        <div class="text-center" my-3>
            <v-btn v-if="!this.blsWait" color="red" fab dark bottom @click="fnCameraCapture()">
                <v-icon>camera</v-icon>
            </v-btn>
            <v-progress-circular v-if="this.blsWait" :size="50" indeterminate color="grey"> 
            </v-progress-circular>
        </div>
    </v-container>
</template>

<script>
import { oStorage, oPicturesinDB } from '@/datasources/firebase';

export default {
    firebase: {
        oPictures: oPicturesinDB
    },
    data() {
        return {
            oPictures: [], // 사진 데이터 저장 변수
            oVideoStream: null, //카메라 영상 스트림을 저장할 객체 변수
            blsWait: false
        }
    },
    mounted(){
        // web api를 통해서 사용자 카메라의 접근(영상 only)을 요청함
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(pVideoStream => {

        }).catch(function (err) {
            console.log(err)
        })
    },
    destroyed(){},
    methods:{}
}
</script>

<style>

</style>