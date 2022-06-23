// ==UserScript==
// @name         雨课堂自动播放
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.yuketang.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const urls = [
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532728",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532730",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532732",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532736",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532744",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532745",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532746",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532752",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532753",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532754",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532755",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532756",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532762",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532763",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532764",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532765",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532769",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532771",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532773",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532775",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532777",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532779",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532781",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532784",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532786",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532791",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532792",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532793",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532798",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532799",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532800",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532801",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532806",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532808",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532810",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532812",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532817",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532818",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532819",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532820",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532821",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532822",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532823",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532830",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532831",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532832",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532833",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532834",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532835",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532840",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532841",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532842",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532843",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532845",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532846",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532847",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532848",

        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532853",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532855",
        "https://changjiang.yuketang.cn/v2/web/xcloud/video-student/9177085/8532857",

    ];

     window.getVideoLength = function() {
        let lengthString = document.getElementsByClassName("xt_video_player_current_time_display")[0].children[1].textContent;
        let minute = lengthString.split(":")[1];
        minute = parseInt(minute);
        let second = lengthString.split(":")[2];
        second = parseInt(second);
        let bufferSecond = 10;
        return minute*60 + second + bufferSecond;
    };

     window.setupTwoSpeed = function() {
        document.getElementsByClassName("xt_video_player_common_list")[0].children[0].click();
    };

    window.playVideo = function() {
        let playBtnText = document.getElementsByClassName("xt_video_player_play_btn")[0].children[0].textContent;
        if (playBtnText === "播放") {
            console.log("Video not playing, start playing now.");
            document.getElementsByClassName("xt_video_player_play_btn")[0].click();
            console.log("Video not playin now.");
        }
    };

    function main() {
        console.log("Script start.");
        window.playVideo();
        let currentPageUrl = window.location.href;
        let i = urls.indexOf(currentPageUrl);
        if (i + 1 < urls.length && i !== -1) {
            window.nextPageUrl = urls[i+1];
            console.log("Next page is: ", window.nextPageUrl);
            let seconds = window.getVideoLength();
            console.log("Video length: " + seconds + " seconds.");
            setTimeout(function(){
                console.log("Going to next page.")
                window.location.href = window.nextPageUrl;
            }, seconds * 1000);
        }
    }

    setTimeout(main, 5000);

})();
