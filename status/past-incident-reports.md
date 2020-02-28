# Past Incidents

Post-mortems on past incidents

## 2020-01-28

**Symptom**: Users experienced errors while printing/exporting diagrams containing custom images.

**Status**: Resolved :heavy_check_mark:

**Root cause**: Incident was caused by a misconfigured docker image.

**Investigation notes**:

* The base image needs to be `mcr.microsoft.com/dotnet/core/aspnet:2.1.15-bionic`.
* If we use the regular `2.1` tag instead of `2.1.15-bionic` then custom image nodes cannot be printed/exported (some crucial apt-get packages are missing in that tagged image).
* The full list of tags can be seen [here](https://hub.docker.com/_/microsoft-dotnet-core-aspnet/).
