# Reddit Unit Converter
A userscript to automatically convert **lbs to kg** or vice versa, specifically made for Reddit. It currently replaces with a regular expression any matches with a number followed by `lbs` or `pounds` into a converted number followed by a space and `kg`. 

## Customizing the script

* **Reverse mode:** Modify the const `reverseConverter` to true to convert kg to lbs instead.

* **Precise rounding:** Modify the const `round` to true to round the results with 2 digits.

* **Limiting the script to specific subs:** Modify the `match` tag at the top to something like `*://*.reddit.com/r/Brogress/*` to only use it on your preferred subreddits. Just keep adding match tags for every subreddit you want to use it on.

## Downloading the script
The direct download link is here:

* [GreasyFork](https://greasyfork.org/en/scripts/378593-reddit-unit-converter)

**Chrome users:** you'll need a script manager extension like [TamperMonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) (the one I'm currently using) or [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/). Then go to the download link above and click on 'Install X.X'. Finally, click on 'install' in the new window that will open.

**Firefox users:** you'll need a script manager extension like [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en). Then go to the download link above and click on 'Install X.X'. Finally, click on 'install' in the new window that will open.

**Other browsers:** you can look for a script manager extension in your browser add-ons page. Look for Tampermonkey or Greasemonkey and install them. Then go to the download link above and click on 'Install X.X'. Finally, click on 'install' in the new window that will open.
