# Past Incidents

Post-mortems on past incidents

## 2020-11-26

**Symptom**: CloudSkew users encountered an `unable to fetch user profile` error and were unable to access their content.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: Still investigating. This page will be updated once the RCA has been concluded.

**Investigation notes**:

* [Github issue tracking this incident](https://github.com/cloudskew/cloudskew/issues/136).

## 2020-11-24

**Symptom**: New, first-time CloudSkew users encountered an `unable to fetch diagram` error when they signed up. Workaround was to just refresh the browser (F5) to make the error go away.

**Status**: Resolved :heavy_check_mark:

**Root Cause**: Incident was caused by a race condition where the diagram editor would try to access the new user's profile before it had been created.

**Investigation notes**:

* [Github issue tracking this incident](https://github.com/cloudskew/cloudskew/issues/135).
* Would be nice to refactor the user profile resolution code as a [resolve-guard](https://angular.io/api/router/Resolve) for the diagram editor component.

## 2020-01-28

**Symptom**: Users experienced errors while printing/exporting diagrams containing custom images.

**Status**: Resolved :heavy_check_mark:

**Root cause**: Incident was caused by a misconfigured docker image.

**Investigation notes**:

* The base image needs to be `mcr.microsoft.com/dotnet/core/aspnet:2.1.15-bionic`.
* If we use the regular `2.1` tag instead of `2.1.15-bionic` then custom image nodes cannot be printed/exported (some crucial apt-get packages are missing in that tagged image).
* The full list of tags can be seen [here](https://hub.docker.com/_/microsoft-dotnet-core-aspnet/).
