
<template>
    <div>
        <forms :questions="lifestylepersonalitytest"/>
        <div class="box"><button @click="result()" class="button is-large is-success is-light">내 검사 결과 확인하기!</button></div>
    </div>
</template>
<script>
    import router from '@/router';
    const surveys = [
                { index: 1, question: '맛있는 음식을 먹을 때', answers: [ '사진 찍어서 인스타그램에 올리고 있음', '맛있어서 속으로 기뻐함' ], score: ["EF", "IN"]},
                { index: 2, question: '나의 분노 유형은?', answers: [ '화산폭발형', '얼음왕국 엘사편', '수도꼭지형' ], score: ["EP", "ITJ", "FP"]},
                { index: 3, question: '아이가 울 때 나의 대처법은?', answers: [ '아이 앞에서 온갖 재롱을 부린다', '에고 속상해서 그랬구나(토닥토닥)', '무시' ], score: ["EFP", "IF", "IT"]},
                { index: 4, question: '하루를 마무리하는 나의 모습은?', answers: [ '오늘의 계획 완료. 내일 계획 세운다', '유튜브짱, 넷플릭스 존잼', '그냥 잔다' ], score: ["IJ", "FP", "STP"] },
                { index: 5, question: '친구 신발 끈이 풀렸을 때', answers: [ '모른척 한다', '신발끈을 대신 묶어준다', '남은 한쪽 끈도 푼다' ], score: ["INT", "FJ", "ET"] },
                { index: 6, question: '학교에서 나의 행동 유형은', answers: [ '분위기 메이커', '늘 선행상 받음', '조용히 중간만 함' ], score: ["EF", "IJ", "IP"]},
                { index: 7, question: '화나는 일이 있을 때 나의 행동은?', answers: [ '내적 손절', '한 번 더 참아봄', '할 말 다 함' ], score: ["ST", "SF", "NT"]},
                { index: 8, question: '불합리한 상황에서 나의 대처법', answers: [ '비켜 다 뒤집을거니까', '좀 더 평화로운 방법은 없을까', '좀 더 참아봐 기달리면 달라질 수도' ], score: ["TJ", "FP", "ST"]},
                { index: 9, question: '친구와 대화할 때 내가 자주 하는 말', answers: [ '헉,진짜? 대박!', '아..ㅎㅎㅎ', '말을 안 함' ], score: ["EF", "IF", "ST"] },
                { index: 10, question: '누가 내 뒷담했을 때 나의 대처는?', answers: [ '세상 우울함', '걔가 누군데?', '신경 안 써~(엄청 신경씀)' ], score: ["FP", "ST", "EF"]}
                ]
    export default {
        data() {
            return {
            lifestylepersonalitytest: surveys
            }
        },
        methods: {
            
            result() {
                var MBTI = [0, 0, 0, 0, 0, 0, 0, 0];  // E,I,S,N,T,F,J,P
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
                if(char[i] === "E")
                    MBTI[0] += 1;
                if(char[i] === "I")
                    MBTI[1] += 1;
                if(char[i] === "S")
                    MBTI[2] += 1;
                if(char[i] === "N")
                    MBTI[3] += 1;
                if(char[i] === "T")
                    MBTI[4] += 1;
                if(char[i] === "F")
                    MBTI[5] += 1;
                if(char[i] === "J")
                    MBTI[6] += 1;
                if(char[i] === "P"){
                    MBTI[7] += 1;
                }
                }
                if(MBTI[0] >= MBTI[1]) result += "E";
                else result += "I" ;
                if(MBTI[2] >= MBTI[3]) result += "S";
                else result += "N" ;
                if(MBTI[4] >= MBTI[5]) result += "T";
                else result += "F" ;
                if(MBTI[6] >= MBTI[7]) result += "J";
                else result += "P" ; 
            alert('보아하니 당신의 MBTI는 '+result+'이군..');
            router.push({path: '/results', query: {test: 'lifestyle-personality-test', is: result}});
            
        },
    }}
</script>