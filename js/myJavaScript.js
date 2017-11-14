
$( document ).ready(function() {
	$("#actionBtn").click(function(){
		var std1 = JSON.parse(myDataPublic);
		$("#nameStd1").text(std1.name);
		$("#detailStd1").html("ตำแหน่ง "+std1.position +" <br>สังกัด " + std1.office);
		$("#imageStd1").attr("src","images/"+std1.image);
	});
    
});
