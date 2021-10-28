const task = document.querySelector(".task");
const want = document.querySelector(".do");
const done = document.querySelector(".done");
const add = document.querySelector(".add");
var app;
const formVal = document.querySelector(".form-control");
const area = document.querySelector(".main-area");
const status = document.getElementsByClassName("status");
const del = document.getElementsByClassName("del");
const ok = document.getElementsByClassName("ok");
var a;
var inc = 0;
var obj;
var x;
var ret = [];
var drophistory;
var f;
var d = 0;
var n;
var j;
var arr = [];
const hide = document.querySelector(".hide");
const khali = document.querySelector(".khali");
const change = (index) => {
    if (status[index].innerText === " Done") {

        status[index].innerHTML = "<svg class=\"svg-inline--fa fa-check fa-w-16\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fa\" data-icon=\"check\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z\"></path></svg><!-- <i class=\"fa fa-check\"></i> -->  Done";
        status[index].style.background = '#28a745';
    }
}
const local = () => {
    var id = Math.floor(Math.random() * 100000) + '';

    obj = {
        id: id,
        status: "Do",
        val: a
    }

    drophistory = JSON.parse(localStorage.getItem("reason")) || [];
    drophistory.push(obj);
    localStorage.setItem("reason", JSON.stringify(drophistory));



    khali.innerHTML = "";
    showAll();
}
const showAll = () => {
    if (localStorage.getItem("reason") !== null) {
        x = JSON.parse(localStorage.getItem("reason"));

        x.forEach(function(element, index) {

            
            app = document.createElement("div");
            app.classList.add("container", "fuck");
            app.innerHTML =
                `  <div class="row mb-3">
  	<div class="col-12 d-flex justify-content-between align-items-center shadow px-md-4 py-0 rounded alag">
  		<div class="one py-4">
  			<p class="status badge badge-warning text-light m-0 mb-2"><i class="fas fa-sign-out-alt"></i>  ${x[index].status}</p>
  		<p class="num font-weight-bold">${index+1}.  <span class="value font-weight-normal"> ${x[index].val}</span></p>
  		</div>
  		<div class="two mt-auto pb-2">
  			<button class="btn btn-danger btn-sm mr-1 del"><i class="fa fa-trash"></i></button>
  		<button class="btn btn-success btn-sm ok"><i class="fa fa-check-square"></i></button>
  		</div>
  	</div>
  </div>`;
            task.innerHTML = x.length;

            khali.appendChild(app);

            change(index);

        });
    } else {
        console.log("empty");
    }

}
showAll();

add.addEventListener('click', function() {

    a = formVal.value;
    if (a !== "") {
        app = document.createElement("div");
        app.classList.add("container", "fuck");

        x = JSON.parse(localStorage.getItem("reason"));

        local();

        hata();
        formVal.value = "";
        hogaya();
        karo();
    } else {
        show();
    }

});

const fuck = document.querySelectorAll(".fuck");
const hata = () => {
    [...del].forEach(function(element, index) {

        if (localStorage.getItem("reason") !== null) {

            del[index].addEventListener('click', function() {

                x.splice(index, 1);
                localStorage.setItem('reason', JSON.stringify(x));
                khali.innerHTML = "";
                showAll();

                hata();
                hogaya();
                karo();
                task.innerHTML = x.length;

                falses.pop();
            })
        }

    });
}
hata();

const hogaya = () => {
    [...ok].forEach(function(element, index) {
        if (localStorage.getItem("reason") !== null) {
            ok[index].addEventListener('click', function() {

                x[index].status = "Done";
                localStorage.setItem('reason', JSON.stringify(x));


                khali.innerHTML = "";

                showAll();
                hogaya();
                hata();
                karo();
                change(index);


            })
        }

    })
}
hogaya();
const alag = () => {
    [...status].forEach(function(element, index) {
        if (status[index].innerText === " Done") {
            khali.innerHTML = "";



            showAll();
            d++;
            n = d - x.length + 1;
            done.innerHTML = n;
        }
    });
}

var z = 0;
var x;
var doTask;
var result;
var falses;
const karo = () => {
    if (localStorage.getItem("reason") !== null) {

        doTask = x.map(function(item) {
            return item.status === 'Do';

        });
        result = doTask.filter(Boolean).length;
        falses = doTask.filter(function(item) {
            return item === false;
        })
        want.innerHTML = result;
        done.innerHTML = falses.length;
    }


}

karo();
const show = () => {
    hide.style.display = 'block';
    setTimeout(function() {
        hide.style.display = 'none';
    }, 1500);
}
