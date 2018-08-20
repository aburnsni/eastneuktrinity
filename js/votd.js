$.getJSON('/js/verse.json', function(data) {
    
    var text = `<div class=\"lead votd-text\">${data.votd.text}<br />
                <span class=\"votd-ref\"><a href=\"${data.votd.permalink}\">${data.votd.display_ref}</a>
                <a rel=\"nofollow\" href=\"${data.votd.audiolink}\" title=\"Listen to chapter\"><img alt=\"Listen to chapter\" src=\"//www.biblegateway.com/assets/images/audio/sound.gif\" border=\"0\"></a>
                </span></div>
                </div class="votd-copy">
                <a href=\"${data.votd.copyrightlink}\">${data.votd.copyright}</a>
                </div>
                <div class=\"small\">
                  Provided by 
                    <a rel=\"nofollow\" href=\"https://www.biblegateway.com/\">BibleGateway.com</a>
                </div>`
    
    $(".verse").html(text);
});       
