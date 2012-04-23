function colorChange(){
vol = document.forms["form1"].clr.value;
volCheck = new RegExp("[a-zA-Z0-9]+","i");

if(vol.match(volCheck)){
ClrCd = vol.match(volCheck);
str = new String(ClrCd);
ClrCdW = str.length;

	if(ClrCdW == 6){
	ch1 = str.charAt(0);
	ch2 = str.charAt(1); 
	ch3 = str.charAt(2);
	ch4 = str.charAt(3);
	ch5 = str.charAt(4);
	ch6 = str.charAt(5);
	
	R = parseInt(ch1 + ch2,16);
	G = parseInt(ch3 + ch4,16);
	B = parseInt(ch5 + ch6,16);
	
	}else if(ClrCdW == 3){
	ch1 = str.charAt(0);
	ch2 = str.charAt(1); 
	ch3 = str.charAt(2);
	
	R = parseInt(ch1 + ch1,16);
	G = parseInt(ch2 + ch2,16);
	B = parseInt(ch3 + ch3,16);
	}else{
	alert("文字数が適切ではありません。");
	}
}else{
alert("文字が適切ではありません。");
}
p1 = document.getElementById("r");
p2 = document.getElementById("g");
p3 = document.getElementById("b");
p1.innerHTML = R + ",";
p2.innerHTML = G + ",";
p3.innerHTML = B;
}
