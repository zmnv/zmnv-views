/* я не помню зачем этот файл здесь, но особо не юзается */

function updateQueryStringParam(key, value) {
    baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
    urlQueryString = document.location.search;
    var newParam = key + '' + value,
    params = '?answer=' + newParam;
  
    // If the "search" string exists, then build params from it
    if (urlQueryString) {
      keyRegex = new RegExp('([\?&])' + key + '[^&]*');
      // If param exists already, update it
      if (urlQueryString.match(keyRegex) !== null) {
        params = urlQueryString.replace(keyRegex, "$1" + newParam);
      } else { // Otherwise, add it to end of query string
        params = urlQueryString + '&' + newParam;
      }
    }
    window.history.replaceState({}, "", baseUrl + params);
  }