function ViewsPolls() {
    return `
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js"></script>
    
    <script>
    new ClipboardJS('.vg-button__copy-to-clipboard');

    $('.vg-button__copy-to-clipboard').click(function() {
        $(this).attr('data-clipboard-text', window.location.href);
        $(this).addClass('vg-button__copy-to-clipboard_copied');
        setTimeout(() => {
            $(this).removeClass('vg-button__copy-to-clipboard_copied');
        }, 1000);
    });

    window.location.href
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
            $(".vg-imageCard[data-tempid='"+elem+"']").addClass('vg-imageCard_active');
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
            $(".vg-imageCard[data-tempid='"+id+"']").removeClass('vg-imageCard_active');
        } else {
            console.log('naahh');
        }
    }

    function pushPram(id) {
        if(!params.includes(id)) {
            params.push(id);
            updateQueryStringParam('?answers='+params.join('&'));
            $(".vg-imageCard[data-tempid='"+id+"']").addClass('vg-imageCard_active');
        } else {
            console.log('naahh');
        }
    }

    function clearAll() {
        // $(".control-checkbox > input").attr('checked', false);
        // updateQueryStringParam('');
        window.location.href = '/';
    }


    $(".control-checkbox > input").on('change', function() {
        var answers = $(this).attr('data-tempid');
        if ($(this).is(':checked')) {
            pushPram(answers);
        }
        else {
            removePram(answers);
        }
    });

    </script>
    `;
}

module.exports = ViewsPolls;
