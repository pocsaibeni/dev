document.addEventListener('DOMContentLoaded', function () {

    let visitorCount = localStorage.getItem('visitorCount');


    if (!visitorCount) {
        visitorCount = 0;
    }


    document.getElementById('visitorCount').innerText = visitorCount;


    visitorCount++;
    document.getElementById('visitorCount').innerText = visitorCount;


    localStorage.setItem('visitorCount', visitorCount.toString());
});
