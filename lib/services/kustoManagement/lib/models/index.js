/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.TrustedExternalTenant = require('./trustedExternalTenant');
exports.AzureSku = require('./azureSku');
exports.AzureCapacity = require('./azureCapacity');
exports.AzureResourceSku = require('./azureResourceSku');
exports.DatabaseStatistics = require('./databaseStatistics');
exports.Resource = require('./resource');
exports.TrackedResource = require('./trackedResource');
exports.Cluster = require('./cluster');
exports.ClusterUpdate = require('./clusterUpdate');
exports.ProxyResource = require('./proxyResource');
exports.Database = require('./database');
exports.DatabaseUpdate = require('./databaseUpdate');
exports.DatabasePrincipal = require('./databasePrincipal');
exports.DataConnection = require('./dataConnection');
exports.DataConnectionValidationResult = require('./dataConnectionValidationResult');
exports.DatabasePrincipalListRequest = require('./databasePrincipalListRequest');
exports.DataConnectionValidation = require('./dataConnectionValidation');
exports.EventHubDataConnection = require('./eventHubDataConnection');
exports.EventGridDataConnection = require('./eventGridDataConnection');
exports.DataConnectionValidationListResult = require('./dataConnectionValidationListResult');
exports.ClusterCheckNameRequest = require('./clusterCheckNameRequest');
exports.DatabaseCheckNameRequest = require('./databaseCheckNameRequest');
exports.CheckNameResult = require('./checkNameResult');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.AzureEntityResource = require('./azureEntityResource');
exports.ClusterListResult = require('./clusterListResult');
exports.ListSkusResult = require('./listSkusResult');
exports.ListResourceSkusResult = require('./listResourceSkusResult');
exports.DatabaseListResult = require('./databaseListResult');
exports.DatabasePrincipalListResult = require('./databasePrincipalListResult');
exports.DataConnectionListResult = require('./dataConnectionListResult');
exports.OperationListResult = require('./operationListResult');
exports.discriminators = {
  'BaseResource.DataConnection' : exports.DataConnection,
  'BaseResource.EventHub' : exports.EventHubDataConnection,
  'BaseResource.EventGrid' : exports.EventGridDataConnection
};
