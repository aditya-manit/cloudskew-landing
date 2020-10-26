# Frequently asked questions

## Product usage

### Why can't I resize or reorient the diagram canvas?

Currently CloudSkew supports multi-page diagrams on an infinitely large canvas. However each page is of A4 size (210 x 297 millimeters or 8.27 x 11.69 inches) and in landscape mode.

Custom diagram sizes and orientations will be enabled in a future release.

### Why can't I use the app without logging in?

The diagrams are auto-saved to CloudSkew's back-end, which requires users to be logged in. Auto-save was a convenience feature requested by many of the initial test users.

Also some upcoming features (checkpoints, restoring from checkpoints etc) will require users to be authenticated.

## Product roadmap

### Any plans to auto-generate diagrams from existing infrastructure?

Not in the [near-term future](#planned-features-calendar).

### Any plans to create an offline (desktop) version of this app?

Not in the [near-term future](#planned-features-calendar).

### Any plans to create a team/enterprise version of this app?

[Yes, there are plans](#planned-features-calendar).

### Any plans to create a VSCode extension?

Not in the [near-term future](#planned-features-calendar).

### Any plans to export diagrams as deployable scripts (ARM, CloudFormation, Terraform)?

Not in the [near-term future](#planned-features-calendar).

### Any plans to improve the experience on mobile devices?

No plans. The web app is best used on laptops and desktops (screen resolutions higher than 960 x 540, landscape mode).

### Any plans to make the app work correctly in Internet Explorer (IE)?

To be honest, I haven't tested it in IE. No plans to add support for IE since it is [now deprecated](https://support.microsoft.com/en-in/help/17454/lifecycle-faq-internet-explorer).

## Miscellaneous

### How do I make my diagrams "pop"?

Do the following:

* Change color of the rectangle shapes to something that contrasts the icons inside it.
* Reduce the opacity of the rectangle shapes to (say) 40% or 50%.

### How do I report a bug?

Please report it [here](https://github.com/cloudskew/cloudskew/issues/new/choose).

### Is this an open source project?

No. However, would love to open source parts of it in the future to invite community contributions around:

* icons from different cloud providers.
* templates for some frequently created diagrams.

However not there yet, lot of features have to be added before all this can be enabled.

### What does the CloudSkew architecture look like?

Take a [look](../about/cloudskew-architecture.md).
