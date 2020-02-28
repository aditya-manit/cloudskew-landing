# Frequently asked questions

**Why can't the diagram canvas be resized?**

The diagram size is restricted to 900px x 500px (landscape mode). While it's possible to zoom in/out, it's not possible to change a diagram's height, width & orientation.

Custom diagram sizes might be enabled at a future point as a premium/paid feature.

**Any plans to auto-generate diagrams from existing infrastructure?**

Not in the [near-term future](#planned-features-calendar).

**Any plans to improve the experience on mobile devices?**

No plans. The web app is best used on laptops and desktops (screen resolutions higher than 960 x 540, landscape mode).

**Why doesn't the app work correctly in Internet Explorer (IE)?**

To be honest, I haven't tested it in IE. No plans to add support for IE since it is [now deprecated](https://support.microsoft.com/en-in/help/17454/lifecycle-faq-internet-explorer).

**Where do I report a bug?**

Please report it [here](https://github.com/cloudskew/cloudskew/issues/new/choose).

**Is this an open source project?**

No. However, would love to open source parts of it in the future to invite community contributions around:

* icons from different cloud providers.
* templates for some frequently created diagrams.

However not there yet, lot of features have to be added before all this can be enabled.

**Why are users required to login?**

The diagrams are auto-saved, which requires users to be logged in. Auto-save was a convenience feature requested by many of the initial test users. 

Also some upcoming features (checkpoints, restoring from checkpoints etc) will require users to be authenticated.

**Any tips/tricks to make my diagram "pop"?**

Do the following:

* Change color of the rectangle shapes to something that contrasts the icons inside it.
* Reduce the opacity of the rectangle shapes to (say) 40% or 50%.

**What does the CloudSkew architecture look like?**

Take a [look](https://assets.cloudskew.com/assets/misc/cloudskew-architecture-20200116.png).
