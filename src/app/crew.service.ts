import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CrewService {
    public navigationItems = [
        {
          "applicationName": "crew-container-discovery-service",
          "instances": [
            {
              "instanceName": "crew-container-discovery-service-2-t4m2s",
              "ipAddress": "100.71.12.20",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:44Z"
            }
          ]
        },
        {
          "applicationName": "crew-gateway",
          "instances": [
            {
              "instanceName": "crew-gateway-1-jbpld",
              "ipAddress": "100.71.39.153",
              "defaultLogLevel": "INFO",
              "creationTimestamp": "2018-09-05T16:33:01Z"
            }
          ]
        },
        {
          "applicationName": "crew-health-monitoring",
          "instances": [
            {
              "instanceName": "crew-health-monitoring-3-q44lj",
              "ipAddress": "100.71.14.128",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-07T18:17:40Z"
            }
          ]
        },
        {
          "applicationName": "crew-log-manager-service",
          "instances": [
            {
              "instanceName": "crew-log-manager-service-1-xb28h",
              "ipAddress": "100.71.22.14",
              "defaultLogLevel": "INFO",
              "creationTimestamp": "2018-09-08T19:36:14Z"
            }
          ]
        },
        {
          "applicationName": "crew-reference-service",
          "instances": [
            {
              "instanceName": "crew-reference-service-1-cg8xz",
              "ipAddress": "100.71.19.86",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:25:54Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            },
            {
              "instanceName": "crew-reference-service-1-r8q5b",
              "ipAddress": "100.71.12.14",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-05T16:32:41Z"
            }
          ]
        },
        {
          "applicationName": "wco-sandbox",
          "instances": [
            {
              "instanceName": "wco-sandbox-2-x47rc",
              "ipAddress": "100.71.37.77",
              "defaultLogLevel": "ERROR",
              "creationTimestamp": "2018-09-06T12:53:12Z"
            }
          ]
        }
      ]
    constructor(private _http: HttpClient) { }
    getCreList() {
        //let _url: string = "https://restcountries.eu/rest/v2/name/india?fullText=true";
        //return this._http.get(_url);

    }


}