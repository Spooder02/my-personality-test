<template>
<div>
    <forms :questions="schoolpersonalitytest"></forms>
    <div class="box"><button @click="result()" class="button is-large is-success is-light">내 검사 결과 확인하기!</button></div>
</div>
</template>
<script>
    import router from '@/router';
    const surveys = [
        { index: 1, img: 'liedcat.jpeg', question: '쉬는 시간에 책상에서 붙어 있는다', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['B', 'B', 'F', 'DF', 'DF']},
        { index: 2, img: 'presentation.jpg', question: '수업시간에 발표를 많이 한다', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['CE', 'C', 'F', 'A', 'B']},
        { index: 3, img: 'talking-together.jpg', question: '친구들과 얘기하다 모르는 것이 나왔을 때 은근슬쩍 아는 척 한다', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['A', 'A', 'F', 'D', 'D']},
        { index: 4, img: 'teambuilding.jpg', question: '반에서 팀 짤 때 친구 없을까봐 걱정된다.', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['B', 'BA', 'F', 'F', 'ED']},
        { index: 5, img: 'activities.jpg', question: '체육시간에 운동을 많이 한다.', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['DF', 'F', 'A', 'B', 'B']},
        { index: 6, img: 'university-library.jpg', question: '자신이 매일 인서울 4년제는 무조건 갈 수 있다고 한다.', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['AC', 'C', 'F', 'DE', 'D']},
        { index: 7, img: 'study.jpg', question: '공부 안했는데 하는 척 한다.', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['A', 'A', 'F', 'D', 'C']},
        { index: 8, img: 'talk-with-friends.jpg', question: '친구들과 이야기 할 때, 본인 주장 없이 분위기에 이끌려 얘기한다', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['A', 'AB', 'F', 'EC', 'EDC']},
        { index: 9, img: 'stylish.jpg', question: '학교 갈 때 입고 싶은 스타일이 있음', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['D', 'ED', 'F', 'B', 'B']},
        { index: 10, img: 'studyhard.jpg', question: '시험기간만 되면 정시파이터라고 말하고 다닌다', answers: ['매우 그렇다', '그렇다', '보통이다', '아니다', '매우 아니다'], score: ['A', 'A', 'C', 'F', 'C']}
    ]
    export default {
        data() {
            return {
                schoolpersonalitytest: surveys
            }
        },
        methods: {
            result() {
                var type = [0, 0, 0, 0, 0, 0];  // A, B, C, D, E, F
                var result = "";
                var res = "";
                var verify = 0;
                var index = 0;
                for (var i = 0; i < surveys.length; i++) {
                    for (var j = 0; j < surveys[i].answers.length; j++) {
                        var subject = String(i+1) + (j+1)
                        if (document.getElementById(subject).checked == true) {
                            res += surveys[i].score[j];
                            verify += 1;
                        }
                    }
                }
                if (verify != surveys.length) {
                    alert("아직 선택 안한 게 있어요.. 선택해주세요")
                    return;
                }
                
                var char = res.split("");

                for(var i = 0; i < res.length ; i++) {
                if(char[i] === "A")
                    type[0] += 1;
                if(char[i] === "B")
                    type[1] += 1;
                if(char[i] === "C")
                    type[2] += 1;
                if(char[i] === "D")
                    type[3] += 1;
                if(char[i] === "E")
                    type[4] += 1;
                if(char[i] === "F")
                    type[5] += 1;
                }
                var max = 0, maxidx = 0;
                for (var i = 0; i <= 6; i++) {
                    if (max < type[i]) {
                        max = type[i];
                        maxidx = i;
                    }
                }
                if(maxidx === 0) result = "쿨한척 하는 찐따";
                if(maxidx === 1) result = "찐따의 근본";
                if(maxidx === 2) result = "반에서 공부 1등";
                if(maxidx === 3) result = "우리반 멋쟁이";
                if(maxidx === 4) result = "리더쉽, 인싸력 1등";
                if(maxidx === 5) result = "민간인";
                
            alert('보아하니 학교에서 당신의 유형은 '+result+'이군..');
            router.push({name: 'results', params:{is: "school-personality-test", name: '당신의 학교 유형은..', id: result}});
            }
        }
    }
</script>