module.exports = (function UrlHelper() {
  const setParam = function(pParent, pParamString) {
    if (!pParamString) return;
    const tSplited = pParamString.split("=");
    const tValue = tSplited[1];
    pParent[tSplited[0]] = tValue;
  }

  const getUrlParameters = function() {
    const tParams = {};
    if (!window.location.hash) return tParams;

    const tWindowParams = window.location.hash.substring(1);

    if (!tWindowParams.includes("&")) {
      setParam(tParams, tWindowParams);
      return tParams;
    }

    const tWindowParams2 = tWindowParams.split('&');
    for (const tItem of tWindowParams2) {
      setParam(tParams, tItem);
    }
    return tParams;
  }

  const getSearchParams = function() {
    const tParams = {};
    if (!window.location.search) return tParams;
    const tWindowParams = window.location.search.substring(1);
    if (!tWindowParams.includes("&")) {
      setParam(tParams, tWindowParams);
      return tParams;
    }
    const tWindowParams2 = tWindowParams.split('&');
    for (const tItem of tWindowParams2) {
      setParam(tParams, tItem);
    }
    return tParams;
  }
  return {
      getUrlParameters,
      getSearchParams,
  };
})();
