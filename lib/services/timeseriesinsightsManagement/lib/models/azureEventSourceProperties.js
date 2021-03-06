/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Properties of an event source that reads events from an event broker in
 * Azure.
 *
 * @extends models['EventSourceCommonProperties']
 */
class AzureEventSourceProperties extends models['EventSourceCommonProperties'] {
  /**
   * Create a AzureEventSourceProperties.
   * @member {string} eventSourceResourceId The resource id of the event source
   * in Azure Resource Manager.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureEventSourceProperties
   *
   * @returns {object} metadata of AzureEventSourceProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureEventSourceProperties',
      type: {
        name: 'Composite',
        className: 'AzureEventSourceProperties',
        modelProperties: {
          provisioningState: {
            required: false,
            serializedName: 'provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Accepted', 'Creating', 'Updating', 'Succeeded', 'Failed', 'Deleting' ]
            }
          },
          creationTime: {
            required: false,
            readOnly: true,
            serializedName: 'creationTime',
            type: {
              name: 'DateTime'
            }
          },
          timestampPropertyName: {
            required: false,
            serializedName: 'timestampPropertyName',
            type: {
              name: 'String'
            }
          },
          eventSourceResourceId: {
            required: true,
            serializedName: 'eventSourceResourceId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureEventSourceProperties;
