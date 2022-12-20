// https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension
const myOrg = `salsgss`

chrome.tabs.getSelected(null, (tab) => {

    const tablink = tab.url
    if (/https:\/\/github.com\/.*/.test(tablink)) {
        open(`https://github.com/PingHuskar`, "_blank")
        open(`https://github.com/PingHuskar?tab=repositories`, "_blank")
    }
    
    else if (/https:\/\/(.+).udemy.com\/course\/(.*?)\//.test(tablink)) {
        
        const [full, org, path] = tablink.match(/https:\/\/(.+).udemy.com\/course\/(.*?)\//)

        switch (org) {
            case 'www':
                open(`https://${myOrg}.udemy.com/${path}`)
                break
            default:
                open(`https://www.udemy.com/${path}`)
                break
        }
    }

    else if (/https:\/\/(.+).udemy.com\/join\/login-popup\/\?next=\/course-dashboard-redirect\/%3Fcourse_id%3D(\d+)/.test(tablink)) {
        const [full, org, courseID] = tablink.match(/https:\/\/(.+).udemy.com\/join\/login-popup\/\?next=\/course-dashboard-redirect\/%3Fcourse_id%3D(\d+)/)
        open(`https://www.udemy.com/${courseID}`)
        open(`https://${myOrg}.udemy.com/${courseID}`)
    }
    else {
        open(`https://${myOrg}.udemy.com/home/my-courses/learning/`)
    }
})
