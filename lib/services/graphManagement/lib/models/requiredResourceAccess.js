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
 * Specifies the set of OAuth 2.0 permission scopes and app roles under the
 * specified resource that an application requires access to. The specified
 * OAuth 2.0 permission scopes may be requested by client applications (through
 * the requiredResourceAccess collection) when calling a resource application.
 * The requiredResourceAccess property of the Application entity is a
 * collection of ReqiredResourceAccess.
 *
 */
class RequiredResourceAccess {
  /**
   * Create a RequiredResourceAccess.
   * @member {array} resourceAccess The list of OAuth2.0 permission scopes and
   * app roles that the application requires from the specified resource.
   * @member {string} [resourceAppId] The unique identifier for the resource
   * that the application requires access to. This should be equal to the appId
   * declared on the target resource application.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RequiredResourceAccess
   *
   * @returns {object} metadata of RequiredResourceAccess
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RequiredResourceAccess',
      type: {
        name: 'Composite',
        className: 'RequiredResourceAccess',
        modelProperties: {
          resourceAccess: {
            required: true,
            serializedName: 'resourceAccess',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceAccessElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceAccess'
                  }
              }
            }
          },
          resourceAppId: {
            required: false,
            serializedName: 'resourceAppId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RequiredResourceAccess;