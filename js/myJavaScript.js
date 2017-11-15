
//-------------------------- Teacher -------------
$( document ).ready(function() {
	$("#actionBtn0").click(function(){
		var std0 = JSON.parse(myDataPublic0);
		$("#nameStd0").text(std0.name);
		$("#detailStd0").html("ตำแหน่ง "+std0.position +" <br>สังกัด " + std0.office);
		$("#imageStd0").attr("src","images/"+std0.image);
		//$(".jumbotron my-4").animated()
	});
    
});
//-------------------------std1------------------
$( document ).ready(function() {
	$("#actionBtn1").click(function(){
		var std1 = JSON.parse(myDataPublic1);
		$("#nameStd1").text(std1.name);
		$("#detailStd1").html("ตำแหน่ง "+std1.position +" <br>สังกัด " + std1.office);
		$("#imageStd1").attr("src","images/"+std1.image);
	});
    
});
//-----------------std2-------------------
$( document ).ready(function() {
	$("#actionBtn2").click(function(){
		var std2 = JSON.parse(myDataPublic2);
		$("#nameStd2").text(std2.name);
		$("#detailStd2").html("ตำแหน่ง "+std2.position +" <br>สังกัด " + std2.office);
		$("#imageStd2").attr("src","images/"+std2.image);
	});
    
});