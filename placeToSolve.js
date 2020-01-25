const notCheckAndTryDebugByBrowser = require('./comments')
module.exports = `
${
    notCheckAndTryDebugByBrowser.map(({authorName, authorUrl, authorAvatar, comments})=>`
<div class="separator"></div>
<div class="card" style="width: 80%;">
<div class="card-body">
    <div class="media">
    <img src="${authorAvatar}" class="align-self-start mr-3 avatar" alt="" >
    <div class="media-body">
        <h5 class="mt-0">${authorName}</h5>
        <h6 class="mt-0"><a href="${authorUrl}" target="_blank">Check my website</a></h6>
        <p>${comments}</p>
    </div>
    </div>
</div>
</div>
    `).join('')
}
`