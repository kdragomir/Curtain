
/**
 * Gets the browser name or returns an empty string if unknown.
 * This function also caches the result to provide for any future calls this function has.
 * This function will only work for chrome, firefox, edge, or brave. Other browsers will return an empty string
 * @returns {string}
 */
 var browserDetect = function () {
    // Return cached result if available, else get result then cache it.
    if (browserDetect.prototype._cachedResult)
      return browserDetect.prototype._cachedResult;
  
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
 
    // Edge 20+
    var isEdge = window.StyleMedia;
  
    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  
    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') !== -1;

    //Brave 
    var isBrave = (navigator.brave && await navigator.brave.isBrave() || false)
  
    browserDetect.prototype._cachedResult = isFirefox
      ? 'Firefox'
      : isChrome
      ? 'Chrome'
      : isEdge
      ? 'Edge'
      : isEdgeChromium
      ? 'EdgeChromium'
      : isBrave
      ? 'Brave'
      : 'UnknownBrowser';
  
    if (browserDetect.prototype._cachedResult !== 'UnknownBrowser') {
      return browserDetect.prototype._cachedResult;
    } 
    else {
      //Detection is primarily done by the user agent of the browser
      if (navigator.userAgent.indexOf('Chrome') !== -1 && !isEdge  && !isBrave) {
        browserDetect.prototype._cachedResult = 'Chrome';
      } 
      else if (navigator.userAgent.indexOf('Firefox') !== -1) {
        browserDetect.prototype._cachedResult = 'Firefox';
      }        
      else if (isEdge) {
        browserDetect.prototype._cachedResult = 'Edge';
      }  
      else if (isBrave){
        browserDetect.prototype._cachedResult = 'Brave';
      }
      else {
        browserDetect.prototype._cachedResult = 'UnknownBrowser';
      }
      return browserDetect.prototype._cachedResult;
    }
  };