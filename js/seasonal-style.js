$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        season=season.toLowerCase();

        switch(season){
            case "spring":
                $("html").css("background-color", "#2B7129");
                $("#slogon").text("Spring into our spring wear!");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#logo").attr("src","images/spring.gif");
            break;


        }
       

        switch(season){
            case "summer":
                $("html").css("background-color", "#EBA52B");
                $("#slogon").text("Summer is Aperol time !");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#logo").attr("src","images/summer.gif");
            break;

        }

        switch(season){
            case "fall":
                $("html").css("background-color", "#A81124");
                $("#slogon").text("Coffe is the savior!");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#logo").attr("src","images/fall.gif");
            break;

        }

        switch(season){
            case "winter":
                $("html").css("background-color", "#005393");
                $("#slogon").text("It's the most wonderful time of the year !");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#logo").attr("src","images/winter.gif");
            break;

        }

        switch(season){
            case "default":
                $("html").css("background-color", "#FFFAF0");
                $("#slogon").text("Four Seasons Are The Best!");
                $("#wear").attr("src","images/300x400.png");
                $("#logo").attr("src","images/four-seasons.gif");
            break;

        }


       
    });
});