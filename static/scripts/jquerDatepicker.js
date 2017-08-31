// $( function() {
//     $( "#datepicker" ).datepicker();
//   } );

 $(function () {
                $('#datepicker').datepicker({ dateFormat: 'mm/dd/yy' }).val();
            });


 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    document.getElementById("openNav").style.display="none"
    document.getElementById("closeNav").style.display="block"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    
    document.getElementById("openNav").style.display="block"
    document.getElementById("closeNav").style.display="none"
}