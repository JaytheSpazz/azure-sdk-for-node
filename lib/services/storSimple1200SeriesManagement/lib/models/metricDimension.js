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

/**
 * Metric dimension
 *
 */
class MetricDimension {
  /**
   * Create a MetricDimension.
   * @member {string} name Metric dimension name
   * @member {string} value Metric dimension values
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricDimension
   *
   * @returns {object} metadata of MetricDimension
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricDimension',
      type: {
        name: 'Composite',
        className: 'MetricDimension',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricDimension;