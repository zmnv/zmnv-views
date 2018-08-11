function ViewsPolls() {
    return `
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script>
    function getSearchParams(k){
        var p={};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(s,k,v){p[k]=v})
        return k?p[k]:p;
       }

    console.log(getSearchParams());
    </script>
    `;
}

module.exports = ViewsPolls;
