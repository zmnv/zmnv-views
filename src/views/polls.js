function ViewsPolls() {
    return `
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script>


    function getSearchParams(k){
        var p={};
        location.search.replace(/[?&]+([^=&]+)=([^]*)/gi,function(s,k,v){p[k]=v})
        return k?p[k]:p;
       }

    function updateQueryStringParam(newUrlString) {
        baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
        urlQueryString = document.location.search;

        window.history.replaceState({}, "", baseUrl + newUrlString);
      }


    var params = [];

    if(getSearchParams('answers')) {
        const currentParams = getSearchParams('answers').split('&');
        currentParams.forEach(elem => {
            params.push(elem);
            $("input[data-tempid='"+elem+"']").attr('checked', true);
        })
        console.log('init params:', params);
    }

    function findTheSame(element, index, array) {

    }

    function tryExe(id) {
        console.log(params.includes(id));
    }

    function removePram(id) {
        if(params.includes(id)) {
            params = params.filter(element => element !== id);
            updateQueryStringParam('?answers='+params.join('&'));
        } else {
            console.log('naahh');
        }
    }

    function pushPram(id) {
        if(!params.includes(id)) {
            params.push(id);
            updateQueryStringParam('?answers='+params.join('&'));
        } else {
            console.log('naahh');
        }
    }


    $(".control-checkbox > input").on('change', function() {
        var answers = $(this).attr('data-tempid');
        if ($(this).is(':checked')) {
            pushPram(answers);
        }
        else {
            removePram(answers);
            // $(this).attr('value', 'false');
            // updateQueryStringParam('answers', '');
            // console.log(answers);
        }});

    </script>
    `;
}

module.exports = ViewsPolls;
