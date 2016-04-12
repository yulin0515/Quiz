var questions = new Array();
questions[0] = 'Which fruit is higher in potassium?';
questions[1] = 'Which of these curries is NOT made with coconut milk?';
questions[2] = 'From where does Macarons originate?';
questions[3] = 'Which kind of vegetable is rich in iron?';
questions[4] = 'Which kind of yogurt is healthier?';

var choices = new Array();
choices[0] = ['A. Avocado', 'B. Banana', 'C. Apple','D. Blueberry'],
choices[1] = ['A. Massaman Curry', 'B. Jungle curry', 'C. Thai yellow curry ', 'D. India Traditional Curry'],
choices[2] = ['A. France', 'B. England', 'C. Arabic countries', 'D. Japan'],
choices[3] = ['A. Celery', 'B. Spanish', 'C. Tomato', 'D. Onion'],
choices[4] = ['A. Plain yogurt', 'B. Greek yogurt', 'C. Light yogurt', 'D. Low-fat yogurt'];

var answers = new Array();
answers[0] = ['A. Avocado'],
answers[1] = ['B. Jungle curry'],
answers[2] = ['C. Arabic countries'],
answers[3] = ['B. Spanish'],
answers[4] = ['C. Light yogurt'];
var choicesOutput0=[];
var choicesOutput1=[];
var choicesOutput2=[];
var choicesOutput3=[];
var choicesOutput4=[];
var score = 0;
var values = new Array();
var index=new Array();
var prepare = function(){
    document.getElementById("question0").innerHTML = '<p>'+questions[0]+'</p>';

    for (var k=0; k<choices[0].length; k++){
        choicesOutput0.push('<p><input onClick = "show0()" type = "radio" name ='+' "questionchoice0" value="'+choices[0][k]+'">'+choices[0][k]+'</p>');
        }
    document.getElementById("choice0").innerHTML =choicesOutput0.join("");

	document.getElementById("question1").innerHTML = '<p>'+questions[1]+'</p>';
    for (var k=0; k<choices[1].length; k++){
        choicesOutput1.push('<p><input onClick = "show1()" type = "radio" name ='+' "questionchoice1" value="'+choices[1][k]+'">'+choices[1][k]+'</p>');
        }
    document.getElementById("choice1").innerHTML =choicesOutput1.join("");
	
	document.getElementById("question2").innerHTML = '<p>'+questions[2]+'</p>';
    for (var k=0; k<choices[2].length; k++){
        choicesOutput2.push('<p><input onClick = "show2()" type = "radio" name ='+' "questionchoice2" value="'+choices[2][k]+'">'+choices[2][k]+'</p>');
        }
    document.getElementById("choice2").innerHTML =choicesOutput2.join("");
	
	document.getElementById("question3").innerHTML = '<p>'+questions[3]+'</p>';
    for (var k=0; k<choices[3].length; k++){
        choicesOutput3.push('<p><input onClick = "show3()" type = "radio" name ='+' "questionchoice3" value="'+choices[3][k]+'">'+choices[3][k]+'</p>');
        }
    document.getElementById("choice3").innerHTML =choicesOutput3.join("");
	
	document.getElementById("question4").innerHTML = '<p>'+questions[4]+'</p>';
    for (var k=0; k<choices[4].length; k++){
        choicesOutput4.push('<p><input onClick = "show4()" type = "radio" name ='+' "questionchoice4" value="'+choices[4][k]+'">'+choices[4][k]+'</p>');
        }
    document.getElementById("choice4").innerHTML =choicesOutput4.join("");
}

var show0 = function(){
	 for (var h = 0; h < document.getElementsByName('questionchoice0').length; h++){
        if (document.getElementsByName('questionchoice0')[h].checked){
            values[0] = document.getElementsByName('questionchoice0')[h].value;
			index[0]=h;
        }
    }
	if(values[0]==answers[0]){
			document.getElementById("question0").innerHTML=document.getElementById("question0").innerHTML+" You are right, Correct answer:"+answers[0];
	}else{
		document.getElementById("question0").innerHTML=document.getElementById("question0").innerHTML+" You are wrong, Correct answer:"+answers[0];
	}
	document.getElementsByName('questionchoice0')[0].disabled=true;
	document.getElementsByName('questionchoice0')[1].disabled=true;
	document.getElementsByName('questionchoice0')[2].disabled=true;
	document.getElementsByName('questionchoice0')[3].disabled=true;
}

var show1 = function(){
	 for (var h = 0; h < document.getElementsByName('questionchoice1').length; h++){
        if (document.getElementsByName('questionchoice1')[h].checked){
            values[1] = document.getElementsByName('questionchoice1')[h].value;
			index[1]=h;
        }
    }
	if(values[1]==answers[1]){
			document.getElementById("question1").innerHTML=document.getElementById("question1").innerHTML+" You are right, Correct answer:"+answers[1];
	}else{
		document.getElementById("question1").innerHTML=document.getElementById("question1").innerHTML+" You are wrong, Correct answer:"+answers[1];
	}
	document.getElementsByName('questionchoice1')[0].disabled=true;
	document.getElementsByName('questionchoice1')[1].disabled=true;
	document.getElementsByName('questionchoice1')[2].disabled=true;
	document.getElementsByName('questionchoice1')[3].disabled=true;
}

var show2 = function(){
	 for (var h = 0; h < document.getElementsByName('questionchoice2').length; h++){
        if (document.getElementsByName('questionchoice2')[h].checked){
            values[2] = document.getElementsByName('questionchoice2')[h].value;
			index[2]=h;
        }
    }
	if(values[2]==answers[2]){
			document.getElementById("question2").innerHTML=document.getElementById("question2").innerHTML+" You are right, Correct answer:"+answers[2];
	}else{
		document.getElementById("question2").innerHTML=document.getElementById("question2").innerHTML+" You are wrong, Correct answer:"+answers[2];
	}
	document.getElementsByName('questionchoice2')[0].disabled=true;
	document.getElementsByName('questionchoice2')[1].disabled=true;
	document.getElementsByName('questionchoice2')[2].disabled=true;
	document.getElementsByName('questionchoice2')[3].disabled=true;
}

var show3 = function(){
	 for (var h = 0; h < document.getElementsByName('questionchoice3').length; h++){
        if (document.getElementsByName('questionchoice3')[h].checked){
            values[3] = document.getElementsByName('questionchoice3')[h].value;
			index[3]=h;
        }
    }
	if(values[3]==answers[3]){
			document.getElementById("question3").innerHTML=document.getElementById("question3").innerHTML+" You are right, Correct answer:"+answers[3];
	}else{
		document.getElementById("question3").innerHTML=document.getElementById("question3").innerHTML+" You are wrong, Correct answer:"+answers[3];
	}
	document.getElementsByName('questionchoice3')[0].disabled=true;
	document.getElementsByName('questionchoice3')[1].disabled=true;
	document.getElementsByName('questionchoice3')[2].disabled=true;
	document.getElementsByName('questionchoice3')[3].disabled=true;
}

var show4 = function(){
	 for (var h = 0; h < document.getElementsByName('questionchoice4').length; h++){
        if (document.getElementsByName('questionchoice4')[h].checked){
            values[4] = document.getElementsByName('questionchoice4')[h].value;
			index[4]=h;
        }
    }
	if(values[4]==answers[4]){
			document.getElementById("question4").innerHTML=document.getElementById("question4").innerHTML+" You are right, Correct answer:"+answers[4];
	}else{
		document.getElementById("question4").innerHTML=document.getElementById("question4").innerHTML+" You are wrong, Correct answer:"+answers[4];
	}
	document.getElementsByName('questionchoice4')[0].disabled=true;
	document.getElementsByName('questionchoice4')[1].disabled=true;
	document.getElementsByName('questionchoice4')[2].disabled=true;
	document.getElementsByName('questionchoice4')[3].disabled=true;
}
var submitb = function(){
    score=0;	
    for (var h = 0; h < document.getElementsByName('questionchoice0').length; h++){
        if (document.getElementsByName('questionchoice0')[h].checked){
            values[0] = document.getElementsByName('questionchoice0')[h].value;
			index[0]=h;
        }
    }
	   for (var h = 0; h < document.getElementsByName('questionchoice1').length; h++){
        if (document.getElementsByName('questionchoice1')[h].checked){
            values[1] = document.getElementsByName('questionchoice1')[h].value;
			index[1]=h;
        }
    }
	   for (var h = 0; h < document.getElementsByName('questionchoice2').length; h++){
        if (document.getElementsByName('questionchoice2')[h].checked){
            values[2] = document.getElementsByName('questionchoice2')[h].value;
			index[2]=h;
		}
    }
	   for (var h = 0; h < document.getElementsByName('questionchoice3').length; h++){
        if (document.getElementsByName('questionchoice3')[h].checked){
            values[3] = document.getElementsByName('questionchoice3')[h].value;
			index[3]=h;
		}
    }
	   for (var h = 0; h < document.getElementsByName('questionchoice4').length; h++){
        if (document.getElementsByName('questionchoice4')[h].checked){
            values[4] = document.getElementsByName('questionchoice4')[h].value;
			index[4]=h;
		}
    }
	for(var i=0;i<values.length;i++){
		if(values[i]==answers[i]){
			score++;
		}
	}

	document.getElementById("scores").innerHTML="Your score is "+score;
	if(score<3){
		document.getElementById("comments").innerHTML="Poor, suggest to learn more about health eating habits";
	}else if (score<5){
		document.getElementById("comments").innerHTML="Well, you are on the good status";
	}else{
		document.getElementById("comments").innerHTML="Excellent, you are very good at it";
	}
};

window.onload = prepare;