$('.graphs').hide();
var app = angular.module("GitMeApp", []);
var BreakException = {};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var circle = 0;
circle = new ProgressBar.Circle('#loader', {
    color: '#FCB03C',
    strokeWidth: 3.5,
    trailWidth: 1.5,
    duration: 5000,
    easing: 'easeInOut',
    text: {
        value: '0'
    },
    step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0));
    }
});
$(window).on('resize orientationChange', function (event) {
    console.log($('body').height());
    $('.backg').css('height', $('.splash').height());
});

$('.hide-this').hide();


app.controller ("MainDataController", function ($scope) {

    var url = window.location.href;

    $scope.home = function () {
        url = window.location.href;
        if (/#/.test(url)) {
            console.log("testing");
            window.location = url.substr(0, url.search("#"));
        }
    };

    $scope.name = '';

    $scope.name_refresh = function () {
        $scope.apply();
        return $scope.full_name;
    };


    $scope.search = function (name) {
        if (name === undefined) {
            $scope.name = $(".search-text")[0].value;
            window.location = window.location.href + "#" + $scope.name.toLowerCase();
        } else {
            $scope.name = name
        }
        $.ajax('https://api.github.com/users/'+$scope.name+'/repos'+"?client_id="+client_id
            +"&client_secret="+client_secret).done(function(data, status, res) {
            if(status === "success") {
                $('.splash').slideUp(1000, function () {
                    $('.hide-this').show();
                    $('.loader').css('opacity', 0);
                    $('.loader').animate({opacity: 1, duration: 500})
                });
                $('.logo').animate({opacity: 0});
                $('.headstuff').animate({opacity:0});
                $('.big-search').animate({opacity:0});
                $('.OCTOCAT').animate({opacity:0});
                $('.backg').animate({opacity: 0});
                circle.animate(
                    1,
                    {
                        easing: "easeInOutExpo"
                    },
                    function () {
                        $('.hide-this').animate({opacity: 0}, function () {
                            $(this).hide();
                            $('.graphs').show().css('opacity', 0);
                            $('.graphs').animate({opacity: 1, duration: 4000});
                        });
                    });
                console.log("Searching for "+$scope.name+"...");
                new_name($scope.name);
            }
        });
    };

    $scope.name = "";
    $scope.repos = [];
    $scope.biggest_repos = [
        {
            'name': '',
            'size': -1
        },
        {
            'name': '',
            'size': -1
        },
        {
            'name': '',
            'size': -1
        }
    ];
    $scope.counter = 0;
    $scope.num_repos = 0;
    $scope.stars = 0;
    $scope.watchers = 0;
    $scope.languages = {};
    $scope.commits = 0;
    $scope.open_issues = 0;

    // sunday - saturday (0 - 6)
    $scope.weekday_avgs = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    $scope.peers = {};
    $scope.followers = 0;
    $scope.downloads = 0;
    $scope.lines = 0;
    $scope.full_name = '';
    $scope.profile_url = '';

    var client_id = "4cb3db40db885450d09f",
        client_secret = "f143655f867cb8ae4036101c32c1bef807c7f3bb";

    var new_name = function (name) {
        $scope.name = $scope.name.toLowerCase();
        $.ajax("https://api.github.com/users/"+$scope.name+"?client_id="+client_id+"&client_secret="+client_secret).done(function (data) {
            $scope.full_name = data.name;
            $scope.profile_url = data.avatar_url;
            $('.full-name').text($scope.full_name);
            $('.prof').attr('src', $scope.profile_url);
        });
        $.ajax('https://api.github.com/users/'+$scope.name+"?client_id="+client_id+"&client_secret="+client_secret).done(function (data) {
            $scope.num_repos = data['public_repos'];
            $('.num-repos').text(numberWithCommas($scope.num_repos));
        });
        $.ajax("https://api.github.com/users/"+$scope.name+"/repos?client_id="+client_id+"&client_secret="+client_secret).done(function (data) {
            $scope.repos = data;

            $scope.repos.forEach(function (repo, repo_num, arr) {
                $scope.stars += repo.stargazers_count;
                $scope.watchers += repo.watchers_count;
                $scope.open_issues += repo.open_issues_count;
                try {
                    $scope.biggest_repos.forEach(function (el, i, arr) {
                        if(repo.size > el['size']) {
                            $scope.biggest_repos.splice(i, 0, {'name': repo.name, 'size': repo.size});
                            $scope.biggest_repos.pop();
                            throw BreakException;
                        }
                    });
                } catch (e) {
                    if (e!=BreakException) throw e;
                }

                $.ajax({
                    url: 'https://api.github.com/repos/'+$scope.name+'/'+repo['name']+"/languages"+"?client_id="+client_id+"&client_secret="+client_secret
                }).done(function (data) {
                    $scope.counter = 0
                    Object.keys(data).forEach(function (el, i, arr) {
                        if($scope.languages[el] == undefined) {
                            $scope.languages[el] = 0;
                        }
                        $scope.languages[el] += data[el];
                        $scope.counter += data[el];
                    });
                    // try {
                    //     $scope.biggest_repos.forEach(function (el, i, arr) {
                    //         if($scope.counter > el['size']) {
                    //             $scope.biggest_repos.splice(i, 0, {'name': repo['name'], 'size': $scope.counter});
                    //             $scope.biggest_repos.pop();
                    //             throw BreakException;
                    //         }
                    //     });
                    // } catch (e) {
                    //     if (e!=BreakException) throw e;
                    // }

                    if($scope.biggest_repos[0].size >= 0) {
                        $('.ind-repo-0').text($scope.biggest_repos[0].name);
                        $('.ind-repo-0-bits').text(numberWithCommas($scope.biggest_repos[0].size));
                    }
                    if($scope.biggest_repos[1].size >= 0) {
                        $('.ind-repo-1').text($scope.biggest_repos[1].name);
                        $('.ind-repo-1-bits').text(numberWithCommas($scope.biggest_repos[1].size));
                    }
                    if ($scope.biggest_repos[2].size >= 0) {
                        $('.ind-repo-2').text($scope.biggest_repos[2].name);
                        $('.ind-repo-2-bits').text(numberWithCommas($scope.biggest_repos[2].size));
                    }
                    $.ajax('https://api.github.com/repos/'+$scope.name+'/'+repo['name']+'/stats/contributors'+"?client_id="+client_id+"&client_secret="+client_secret).done(function(data) {
                        data.forEach(function(el, i, arr) {
                            if(el.author.login.toLowerCase() === $scope.name) {
                                el.weeks.forEach(function (week, j, week_arr) {
                                    $scope.lines += week.a;
                                    // $scope.lines -= week.d;
                                });
                            } else {
                                if (el.author != null && !(el.author.login in $scope.peers)) {
                                    $scope.peers[el.author.login] = 0;
                                    el.weeks.forEach(function (week, j, week_arr) {
                                        $scope.peers[el.author.login] += week.a;
                                    });
                                }
                            }
                        });
                        // TODO: fetch the current value of the language, instead of whatever is going on now
                        $('.num-bytes').text(numberWithCommas($scope.lines));
                        var langs = [['Language', 'Bytes']];
                        Object.keys($scope.languages).forEach(function(lang){
                            langs.push([ lang, $scope.languages[lang] ]);
                        });

                        google.load("visualization", "1", {packages:["corechart"], callback: drawChart});

                        function drawChart() {
                            var data = google.visualization.arrayToDataTable(langs);

                            var options = {
                                chartArea:{width:'90%',height:'100%'},
                                height: 400,
                                pieHole: 0.4,
                                pieSliceText: "none",
                                sliceVisibilityThreshold: .05,
                                width: 400
                            };

                            var chart = new google.visualization.PieChart(document.getElementById('languages-doughnut'));

                            chart.draw(data, options);
                        }
                    });

                });



                $.ajax('https://api.github.com/repos/'+$scope.name+'/'+repo['name']+'/stats/punch_card'+"?client_id="+client_id+"&client_secret="+client_secret).done(function(data) {
                    data.forEach(function(el, i, arr) {
                        $scope.weekday_avgs[el[0]] += el[2];
                    });
                    if (repo_num === $scope.repos.length-1) {
                        var data = {
                            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                            datasets: [
                                {
                                    label: "Days of the week",
                                    fillColor: "#4EBAEE",
                                    strokeColor: "#4EBAEE",
                                    highlightFill: "rgba(220,220,220,0.75)",
                                    highlightStroke: "rgba(220,220,220,1)",
                                    data: $scope.weekday_avgs
                                },
                            ]
                        };
                        var ctx = document.getElementById("weekday-dist").getContext("2d");
                        var myBarChart = new Chart(ctx).Bar(data, bar_options)
                    }
                });

                $.ajax('https://api.github.com/repos/'+$scope.name+'/'+repo['name']+'/commits'+"?client_id="+client_id+"&client_secret="+client_secret).done(function(data) {
                    data.forEach(function(el, i, arr) {
                        if (el.author != null){
                            if (el['author']['login'].toLowerCase() == $scope.name) {
                                $scope.commits++;
                            }
                        }
                    });
                    $('.num-commits').text(numberWithCommas($scope.commits));
                });


            });
        });
    };

    if (/#.+/.test(url)){
        $scope.name = url.match(/#(\w+)/)[1];
        $.ajax('https://api.github.com/users/'+$scope.name+'/repos'+"?client_id="+client_id
            +"&client_secret="+client_secret).done(function(data, status, res) {
            if(status === "success") {
                $scope.search($scope.name);
                
            }
        });
    }
});


var bar_options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: false,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 4,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 3,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.l"+
        "ength; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if"+
        "(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}
