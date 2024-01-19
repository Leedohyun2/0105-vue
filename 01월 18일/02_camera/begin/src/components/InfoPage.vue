<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="py-3 px-3">
                    <v-img height="450px" contain :src="this.itemPic.url"></v-img>
                    <v-card-text v-if="this.itemPic.title">
                        <h1 class="headline mt-1 text-center">{{ this.itemPic.title }}</h1>
                        <p class="body-1 mt-1 text-center">{{ this.itemPic.info }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" class="mt-3 text-center">
                <v-btn color="grey" fab dark @click="fnDeleteItem()">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {
    oStorage,
    oPicturesinDB
} from '@/datasources/firebase'

export default {
    name: 'App',
    firebase: {
        oPictures: oPicturesinDB
    },
    data() {
        return {
            oPictures: [], // 사진 데이터 저장 변수
            itenPic: null, // 검색 결과 항목을 저장할 객체 변수
        }
    },
    created() {
        // 라우터의 매개변수로 전달된 항목 ID값 읽기
        const itemID = this.$route.params.p_id
        // finde 검색기능으로 파이어베이스에서 해당 ID 항목 검색 및 저장
        this.itemPic = this.oPictures.find(item => item['.key'] === itemID)
    },
    methods: {
        fnDeleteItem() {
            // 파이어베이스 db의 사진 항목 삭제
            oPicturesinDB.child(this.itemPick['.key']).remove()
            // 스토리지에 이미지가 존재할 경우(카메라 사용)만 삭제
            if (this.itemPic['filename'])
                oStorage.ref('images').child(this.itemPic['filename']).delete()
            // 홈화면으로 이동
            this.$router.push('/');
        }

    }
}
</script>

<style></style>