var alltutors = {
  t1:["alan","Alan.jpeg","Alan W"],
  t2:["alinda","Alinda.jpg","Alinda Lau"],
  t3:["amelia","Amelia.jpg","Amelia Tsao"],
  t4:["benjamin","Benjamin.jpg","Benjamin Lee"],
  t5:["brendan","Brendan.jpg","Brendan Yen"],
  t6:["candice","Candice.jpg","Candice Chen"],
  t7:["casey","Casey.jpg","Casey Chan"],
  t8:["cheng","Yoyo.jpg","Cheng You Tsai"],
  t9:["eric","Eric.jpg","Eric Wang"],
  t10:["harris","Harris.jpg","Harris Liu"],
  t11:["henry","Henry.jpg","Henry Chou"],
  t12:["johnny","Johnny.jpg","Johnny Chiu"],
  t13:["jonathan","Jonathan.jpg","Jonathan Shao"],
  t14:["joseph","Joseph.jpg","Joseph Lin"],
  t15:["melinda","Melinda.jpg","Melinda Kuo"],
  t16:["sophieK","SophieK.jpg","Sophie Kao"],
  t17:["sophieT","SophieT.jpg","Sophie Tsai"],
  t18:["tristan","Tristan.jpg","Tristan Cox"],
  t19:["verina","Verina.jpeg","Verina Mok"],

}

function displayTutors(alltutors){
  var count = 0
  colnum = 3
  for (var tutor in alltutors){
    if (count!=0&&count%4==0){
      colnum++
    }
    $(".all-tutors").append(`
      <a class = "apl" href = "tutorpages/`+alltutors[tutor][0]+`.html">
          <div class = "column`+colnum+`">
              <img class  = "img1" src = "tutorphotos/`+alltutors[tutor][1]+`" alt ="picture of self " width = 200px height = 200px>
              <h2>`+alltutors[tutor][2]+`</h2>
          </div>
      </a>
    `)
    count++
  }
}

displayTutors(alltutors)