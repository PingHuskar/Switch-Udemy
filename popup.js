// https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension
const myOrg = `salsgss`

chrome.tabs.getSelected(null, (tab) => {

    const tablink = tab.url
    if (/https:\/\/github.com\/.*/.test(tablink)) {
        open(`https://github.com/PingHuskar`, "_blank")
        open(`https://github.com/PingHuskar?tab=repositories`, "_blank")
    }
    const [full, org, path] = tablink.match(/https:\/\/(.+).udemy.com\/course\/(.*?)\//)

    switch (org) {
        case 'www':
            open(`https://${myOrg}.udemy.com/${path}`)
            break
        default:
            open(`https://www.udemy.com/${path}`)
            break
    }
})
