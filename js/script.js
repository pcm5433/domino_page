// 고객센터 밑 메뉴 탭
let q_t_lists = document.querySelectorAll(".qna_tab_list");
let q_t_spaces = document.querySelectorAll(".qna_tab_space");

q_t_lists[0].classList.add("show2");
q_t_spaces[0].classList.add("view2");

q_t_lists.forEach(function(q_t_list, i){
    q_t_list.addEventListener("click", function(){
        for(j=0; j<q_t_lists.length; j++){
            q_t_lists[j].classList.remove("show2");
            q_t_spaces[j].classList.remove("view2");
        }
        q_t_list.classList.add("show2");
        q_t_spaces[i].classList.add("view2");
    })
})


// 자주하는 질문 탭
let t_lists = document.querySelectorAll(".tab_list");
let t_spaces = document.querySelectorAll(".tab_space");

t_lists[0].classList.add("show");
t_spaces[0].classList.add("view");

t_lists.forEach(function(t_list, i){
    t_list.addEventListener("click", function(){
        for(j=0; j<t_lists.length; j++){
            t_lists[j].classList.remove("show");
            t_spaces[j].classList.remove("view");
        }
        t_list.classList.add("show");
        t_spaces[i].classList.add("view");
    })
})


// 질문 아코디언 메뉴
let qus = document.querySelectorAll(".qus");
let asw = document.querySelectorAll(".asw");

qus.forEach(function(qu){
    asw.forEach(function(as){
        qu.addEventListener("click",function(){
            // for(i=0; i<qus.length; i++){
            //     qus[i].classList.remove("active");
            //     asw[i].style.maxHeight = null;
            // }
            var panel = this.nextElementSibling;
            let qusA = document.querySelector(".qus.active");
            // for(item of qus){
            //     item.classList.remove("active");
            // }
            // active 제거, max-height null
            for(item of asw){
                if(item.style.maxHeight){
                    item.style.maxHeight = null;
                    qusA.classList.remove("active");
                }else{
                    item.classList.remove("pad");
                }
            }
            qu.classList.add("active");
            as.classList.add("pad");
            // scrollHeight => 필요한 높이만큼 높이를 잡음
            panel.style.maxHeight = panel.scrollHeight + "px";
        })
    })
})