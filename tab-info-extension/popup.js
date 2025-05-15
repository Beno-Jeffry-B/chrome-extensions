document.addEventListener("DOMContentLoaded",()=>{

    chrome.tabs.query( {active : true , currentWindow : true } , (tabs)=>{

        if(tabs.length == 0) return ; // no active tabs found...

        const activeTab = tabs[0];
        const title = activeTab.title;
        const url = activeTab.url;
        
        document.getElementById("currentTabTitle").textContent = title;
        document.getElementById("currentUrl").textContent = url;
        
    })
})